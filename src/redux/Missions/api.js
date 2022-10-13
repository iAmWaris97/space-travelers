const baseURL = 'https://api.spacexdata.com/v3/missions';

const api = {
  fetchMissions: async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  },
};

export default api;
