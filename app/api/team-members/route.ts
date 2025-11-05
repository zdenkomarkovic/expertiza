import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    const query = `*[_type == "teamMember" && active == true] | order(order asc) {
      _id,
      name,
      position,
      image,
      bio,
      email,
      phone,
      order,
      active
    }`

    const teamMembers = await client.fetch(query)

    return NextResponse.json(teamMembers)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 })
  }
}
