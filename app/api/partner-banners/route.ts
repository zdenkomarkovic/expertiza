import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    const query = `*[_type == "partnerBanner" && active == true] | order(order asc) {
      _id,
      title,
      image,
      link,
      description,
      order,
      active
    }`

    const banners = await client.fetch(query)

    return NextResponse.json(banners)
  } catch (error) {
    console.error('Error fetching partner banners:', error)
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 })
  }
}
