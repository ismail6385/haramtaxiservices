import { NextResponse } from 'next/server'

// RFC 9728 — OAuth 2.0 Protected Resource Metadata
// Tells agents which authorization server issues tokens for this site's protected APIs
export async function GET() {
  const metadata = {
    resource: 'https://haramtaxiservice.com',
    authorization_servers: [
      'https://gwofsysfknxecqbanwtp.supabase.co/auth/v1',
    ],
    scopes_supported: [
      'openid',
      'email',
      'profile',
    ],
    bearer_methods_supported: ['header'],
    resource_documentation: 'https://haramtaxiservice.com/.well-known/api-catalog',
    resource_signing_alg_values_supported: ['RS256'],
  }

  return NextResponse.json(metadata, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
