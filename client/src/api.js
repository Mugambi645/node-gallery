const API_URL = process.env.REACT_APP_API_URL;
export const getImages = async (nextCursor) => {
    const params = new URLSearchParams();

    if (nextCursor) {
        //check if more images exist
        params.append('next_cursor', nextCursor);
    }
    const res = await fetch(`${API_URL}/photos?${params}`);
    const resJson = await res.json();
    return resJson;
}