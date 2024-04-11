import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher:  ["/jobs", "/job/:path*"]
}

export default function middleware(
  req: NextRequest,
) {
  const { headers } = req
  const secret = headers.get('secret');
  if (!secret || secret !== (process.env.SECRET || "naranja-labs")) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )

  }

  return NextResponse.next();
}
