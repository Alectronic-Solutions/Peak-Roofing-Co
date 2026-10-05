// Web3Forms access key. Get one free at https://web3forms.com and paste it here.
// Until it's set, forms run in demo mode: submissions resolve as successful without
// sending anything, so the site can be shown to the client end to end.
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

const DEMO_MODE = WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE'

export async function submitForm(fields: Record<string, unknown>): Promise<boolean> {
  if (DEMO_MODE) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return true
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    })
    const data = await res.json()
    return Boolean(data.success)
  } catch {
    return false
  }
}
