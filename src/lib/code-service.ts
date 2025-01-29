import axios from 'axios';

const API_KEY = 'claraisthebest';

async function fetchInviteCode(): Promise<string> {
  try {
    const response = await axios.get("https://api.e-z.software/invite", {
      headers: {
        'key': API_KEY
      }
    });

    if (response.data === false) {
      return '';
    }

    if (response.data && typeof response.data.code === 'string') {
      return response.data.code.trim();
    }

    return '';
  } catch (error) {
    console.error('Error fetching invite code:', error);
    return '';
  }
}

export async function getRandomCode(): Promise<string> {
  return await fetchInviteCode();
}

export function tempCode(): string {
  return "No codes yet, sorry!";
}
