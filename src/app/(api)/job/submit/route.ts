import { NextRequest, NextResponse } from "next/server";
import z from "zod"

const schemaJob = z.object({
  name: z.string(),
  age: z.number(),
  phone: z.string(),
  state:z.string(),
  city: z.string()
})

export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  try {
    const body = await req.json()
    
    schemaJob.parse(body)

    return NextResponse.json(
      {
        message: `Thank you for your application, ${body.name}`
      },
      { status: 200 }
    )
  } catch(err) {
    console.log(err)
    return NextResponse.json(
      { error: 'The request body is missing or has an invalid format' },
      { status: 400 }
    )
  }
}
