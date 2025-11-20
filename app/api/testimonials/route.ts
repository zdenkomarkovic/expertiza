import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    const query = `*[_type == "testimonial" && active == true] | order(order asc) {
      _id,
      clientName,
      clientImage,
      testimonial,
      order,
      active
    }`

    const references = await client.fetch(query)

    return NextResponse.json(references)
  } catch (error) {
    console.error('Error fetching references:', error)
    return NextResponse.json({ error: 'Failed to fetch references' }, { status: 500 })
  }
}
