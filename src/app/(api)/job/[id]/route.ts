import { jobs } from "@/data/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  const id = params.id
  
  const isExist = jobs.filter(job => job.id === Number(id))

  if (isExist.length === 0) return NextResponse.json(
    { error: `Job with ID ${id} not found` },
    { status: 404 }
  )

  return NextResponse.json(
    isExist[0],
    { status: 200 }
  ) 
}
