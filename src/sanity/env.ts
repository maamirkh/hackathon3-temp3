export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'

  // "skIQAJrVKhF56rSU3Er2dj316mfL66pRe2jiCRwLQEV474HA0SJTX4NAX3JshndCqH0g9yfEWSKK8CKNeWKXsF1eTxbEsDSIsdIZaUV9WkkePBVGNio3mF8OZGxasntkqD1y9dsldTRsLgqQXpUOTW96M8uSbVahcDZWru7GmsGZbOV76iCW",
  // 'Missing environment variable: SANITY_API_TOKEN'
  
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
