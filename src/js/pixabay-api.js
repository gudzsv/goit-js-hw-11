const options = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
};
const API_KEY = '42598065-1779ad5a953180c3fe77c2809';
const API_URL = 'https://pixabay.com/api/?';

export async function getGalleryData(queryValue) {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: queryValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    const response = await fetch(API_URL + searchParams, options);

    if (!response.ok) {
      throw new Error(`Error(getGalleryData): ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return `Exception(getGalleryData): ${error}`;
  }
}
