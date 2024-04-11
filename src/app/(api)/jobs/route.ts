import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  return NextResponse.json(
    {status: "up"},
    {status: 200}
  )
}
