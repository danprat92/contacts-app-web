import Config from './config';

const apiValues = Config.restApi;
const otherConfig = Config[process.env.NODE_ENV];
const esc = encodeURIComponent;

const fetchContacts = async (filters, page) => {
  try {
    const query = `?filter=${esc(filters || '')}&page=${page || 0}`;
    const response = await fetch(`${otherConfig.apiUrl}${apiValues.contacts}${query}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export {
  fetchContacts,
};
