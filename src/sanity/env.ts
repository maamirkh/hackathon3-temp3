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
  "skZuing63Lcsm3v2ynM5Ya1mkRjuZGnUxD3MhieClRrEbaTQmBcqEnCG5UffOAYG7gc3OiGn4oMbLOGsTnUNvIVghVCLd1z3lc5L46asY4nYUGOGl7l1J0Aj3uQJx9ekgJc75cVLcd4lmjip4XRgmTeb0BG2dYn8mBQcLZpqYYNA07KoCdNx",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
