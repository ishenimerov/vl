import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import md5 from 'crypto-js/md5';

const apiUrl = 'https://api.valantis.store:41000';

interface GetIdsResponse {
  result: string[];
}
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
  getIds: async (
    offset: number,
    limit: number,
  ): Promise<GetIdsResponse['result']> => {
    try {
      const response = await axios.post(
        `${apiUrl}/`,
        { action: 'get_ids', params: { offset, limit } },
        { headers: getAuthHeader() },
      );

      return response.data.result;
    } catch (error: any) {
      console.error('Error fetching IDs:', error.response?.status);
      throw error;
    }
  },
};
