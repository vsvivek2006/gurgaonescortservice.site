import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { invalidateBlogCache } from '@/lib/supabaseBlog';

/**
 * On-Demand ISR Revalidation Endpoint
 * Triggered by central publisher to bust Next.js route cache instantly.
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const path = req.nextUrl.searchParams.get('path');
  const slug = req.nextUrl.searchParams.get('slug');

  const configuredSecret = process.env.REVALIDATE_SECRET;
  if (!configuredSecret || secret !== configuredSecret) {
    return NextResponse.json(
      { success: false, message: 'Invalid or missing revalidation secret.' },
      { status: 401 }
    );
  }

  try {
    invalidateBlogCache(slug || undefined);

    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath('/blog');
    }

    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({
      success: true,
      revalidated: true,
      timestamp: new Date().toISOString(),
      revalidatedPath: path || '/blog',
      revalidatedSlug: slug || null,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown revalidation error';
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
