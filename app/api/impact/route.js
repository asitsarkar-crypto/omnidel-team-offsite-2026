import { NextResponse } from 'next/server';
import { impactStats } from '../../../lib/vatika';
import { getSupabaseAdmin, supabaseConfigured } from '../../../lib/supabase/server';

export const revalidate = 60;

export async function GET() {
  if (supabaseConfigured()) {
    try {
      const supabase = await getSupabaseAdmin();
      const { data, error } = await supabase
        .from('impact_snapshots')
        .select('*')
        .order('as_of', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        return NextResponse.json({
          ok: true,
          source: 'supabase',
          asOf: data.as_of,
          note: data.note,
          items: [
            { id: 'trees', label: 'Trees Planted', value: data.trees_planted },
            { id: 'sponsors', label: 'Sponsors', value: data.sponsors },
            { id: 'funds', label: 'Funds Raised', value: Math.round(data.funds_raised_paise / 100), prefix: '₹' },
            { id: 'carbon', label: 'Carbon Offset', value: Number(data.carbon_offset_tons), suffix: ' t' },
            { id: 'villages', label: 'Villages Covered', value: data.villages_covered },
            { id: 'campaigns', label: 'Campaigns', value: data.campaigns },
          ],
        });
      }
    } catch (err) {
      console.error('[impact] Supabase error', err);
    }
  }

  return NextResponse.json({
    ok: true,
    source: impactStats.source,
    asOf: impactStats.asOf,
    note: impactStats.note,
    items: impactStats.items,
  });
}
