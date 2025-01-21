import login from "./login";
import {apiUrl} from "./api-url";


export const placeVote = async (voteOption) => {
    const token = await login();

    const response = await fetch(`${apiUrl.baseUrl}/api/kenf/v1/votes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            option: voteOption,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to cast vote');
    }
}