import axios from "axios";

const API_KEY = "claraisthebest";

async function fetchInviteCode(): Promise<{
  code?: string;
  timeLeft?: number;
}> {
  try {
    const response = await axios.get("https://api.e-z.software/invite", {
      headers: {
        key: API_KEY,
      },
    });

    if (response.status === 429) {
      return { timeLeft: response.data.timeRemaining };
    }

    if (
      response.status === 200 &&
      response.data &&
      typeof response.data.code === "string"
    ) {
      return { code: response.data.code.trim() };
    }

    return {};
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 429
    ) {
      return { timeLeft: error.response.data.timeRemaining };
    }
    console.error("Error fetching invite code:", error);
    return {};
  }
}

export async function getRandomCode(): Promise<{
  code?: string;
  timeLeft?: number;
}> {
  return await fetchInviteCode();
}
