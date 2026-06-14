import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  // Basic auth check: require the admin-auth cookie or header
  const authHeader = request.headers.get('authorization');
  const authCookie = request.headers.get('cookie')?.includes('admin-auth=true');

  // For now, check a simple header. In production, use proper JWT/session.
  if (!authCookie && authHeader !== 'Bearer admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const submissions = await db.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
