import { type NextRequest, NextResponse } from "next/server";
import { jobs } from "../../../../data/jobs";

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('level')

  if (query) {
    const filteredJobs = jobs.filter(({level}) => query === level)

    return NextResponse.json(
      filteredJobs,
      {status: 200}
    )
  }

  return NextResponse.json(
    jobs,
    {status: 200}
  )
}
