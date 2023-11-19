import { getNamespaceList } from '@/lib/namespaces/namespaces';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to force-static
export async function GET(request: Request) {
  const namespaces = await getNamespaceList();
  return NextResponse.json(namespaces);
}
