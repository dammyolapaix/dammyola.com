import env from '@/env'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_SECRET,
  api_secret: env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const body = await request.json()
  const { paramsToSign } = body

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    env.CLOUDINARY_API_SECRET
  )

  return Response.json({ signature })
}
