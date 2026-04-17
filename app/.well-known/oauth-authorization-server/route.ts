import { NextResponse } from 'next/server'

const SUPABASE_BASE = 'https://gwofsysfknxecqbanwtp.supabase.co/auth/v1'

// RFC 8414 — OAuth 2.0 Authorization Server Metadata
// Proxied from the Supabase auth server that protects this site's APIs
export async function GET() {
  const metadata = {
    issuer: SUPABASE_BASE,
    authorization_endpoint: `${SUPABASE_BASE}/authorize`,
    token_endpoint: `${SUPABASE_BASE}/token`,
    userinfo_endpoint: `${SUPABASE_BASE}/user`,
    jwks_uri: `${SUPABASE_BASE}/.well-known/jwks.json`,
    registration_endpoint: `${SUPABASE_BASE}/signup`,
    scopes_supported: ['openid', 'email', 'profile'],
    response_types_supported: ['code', 'token'],
    grant_types_supported: [
      'authorization_code',
      'implicit',
      'refresh_token',
      'password',
    ],
    token_endpoint_auth_methods_supported: ['client_secret_post', 'client_secret_basic'],
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256'],
    service_documentation: 'https://supabase.com/docs/guides/auth',
  }

  return NextResponse.json(metadata, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
