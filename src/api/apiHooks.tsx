import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import md5 from 'crypto-js/md5';

const apiUrl = 'https://api.valantis.store:41000';

export const getAuthHeader = (): AxiosRequestConfig['headers'] => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');

  const authString = `Valantis_${timestamp}`;
  const authHash = md5(authString).toString();

  return {
    'X-Auth': authHash,
    Authorization: 'Bearer YourAccessToken',
  };
};

export const apiService = {
  getIds: async (offset: number, limit: number) => {
    try {
      const response = await axios.post(
        `${apiUrl}/`,
        { action: 'get_ids', params: { offset, limit } },
        { headers: getAuthHeader() },
      );

      return response.data.result;
    } catch (error) {
      console.error('Error fetching IDs:', (error as any).response?.message);
      throw error;
    }
  },

  getItems: async (ids: string[]) => {
    try {
      const response = await axios.post(
        `${apiUrl}/`,
        { action: 'get_items', params: { ids } },
        { headers: getAuthHeader() },
      );

      return response.data.result;
    } catch (error) {
      console.error('Error fetching items:', (error as any).response?.message);
      throw error;
    }
  },

  getFields: async (field: string, offset: number, limit: number) => {
    try {
      const response = await axios.post(
        `${apiUrl}/`,
        { action: 'get_fields', params: { field, offset, limit } },
        { headers: getAuthHeader() },
      );

      return response.data.result;
    } catch (error) {
      console.error('Error fetching fields:', (error as any).response?.message);
      throw error;
    }
  },

  filter: async (field: string, value: any) => {
    try {
      const response = await axios.post(
        `${apiUrl}/`,
        { action: 'filter', params: { [field]: value } },
        { headers: getAuthHeader() },
      );

      return response.data.result;
    } catch (error) {
      console.error('Error filtering:', (error as any).response?.message);
      throw error;
    }
  },
};
