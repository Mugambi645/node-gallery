const API_URL = process.env.REACT_APP_API_URL;
export const getImages = async () => {
    const res = await fetch(`${API_URL}/photos`);
    const resJson = await res.json();
    return resJson;
}