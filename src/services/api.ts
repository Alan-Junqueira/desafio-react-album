import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
  getPhotoAlbuns: async () => {
    const response = await http.get('/albums');
    return response.data;
  },

  getSpecificAlbum: async (params: string | undefined) => {
    const response = await http.get(`/albums/${params}/photos`);
    return response.data;
  },

  getSpecificPhoto: async (params: string | undefined) => {
    const response = await http.get(`/photos/${params}`);
    return response.data;
  },

  getSpecificTitle: async (params: string | undefined) => {
    const response = await http.get(`/albums/${params}`)
    return response.data
  }
};
