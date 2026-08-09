import { NextResponse } from 'next/server';
import {
  buildSpaceApplicationDocxBuffer,
  spaceApplicationDocxFilename,
} from '../../../../lib/space-application-docx';
import { emptySpaceApplication } from '../../../../lib/space-application';
import { getSpaceApplicationByPublicId } from '../../../../lib/space-applications-store';

export const runtime = 'nodejs';

/** Blank Word template, or filled copy by public id / JSON body. */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const blank = searchParams.get('blank') === '1' || searchParams.get('blank') === 'true';
  const publicId = searchParams.get('id');

  let data = emptySpaceApplication();
  let meta = {};
  let filename = spaceApplicationDocxFilename({}, { blank: true });

  if (!blank && publicId) {
    const row = await getSpaceApplicationByPublicId(publicId);
    if (!row) {
      return NextResponse.json({ ok: false, error: 'Application not found' }, { status: 404 });
    }
    data = row;
    meta = { publicId: row.public_id };
    filename = spaceApplicationDocxFilename(row);
  } else if (blank) {
    data = {};
    filename = spaceApplicationDocxFilename({}, { blank: true });
  }

  const buffer = await buildSpaceApplicationDocxBuffer(data, meta);
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const buffer = await buildSpaceApplicationDocxBuffer(body, {
    publicId: body.publicId || body.public_id,
  });
  const filename = spaceApplicationDocxFilename(body);
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  });
}
