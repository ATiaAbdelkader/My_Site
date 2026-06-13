import { NextRequest, NextResponse } from 'next/server';

// Admin authentication — password is checked server-side only.
// Set ADMIN_PASSWORD in your Vercel environment variables.
// Falls back to a default for local development.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'atia2024';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
