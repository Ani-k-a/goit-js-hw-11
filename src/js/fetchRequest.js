import axios from 'axios';

const API_KEY = '14059179-d3026114f55903ce7f535b499';
const BASE_LINK = 'https://pixabay.com/api/';

export const fetchImgsData = async (data, page) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });

  return (await axios.get(`${BASE_LINK}?${searchParams}`)).data;
};