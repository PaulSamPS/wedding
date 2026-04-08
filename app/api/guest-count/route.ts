import { createAdminClient } from '@/lib/supabase/admin';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from('rsvp')
      .select('guests, children')
      .eq('attending', true);

    const guests = data?.reduce((sum, r) => sum + (r.guests ?? 0), 0) ?? 0;
    const children = data?.reduce((sum, r) => sum + (r.children ?? 0), 0) ?? 0;

    return NextResponse.json({ guests, children });
  } catch {
    return NextResponse.json({ guests: 0, children: 0 });
  }
}
