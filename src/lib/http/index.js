import axios from 'axios';

export default (baseUrl, requestConfig) => {
  const defaultConfig = {
    ...requestConfig,
    baseURL: baseUrl ? baseUrl : process.env.REACT_APP_API_BASE_URL,
  };
  const instance = axios.create(defaultConfig);
  instance.interceptors.request.use(authorizationInterceptor);

  return instance;
};

const authorizationInterceptor = async (config) => {
  if (!config.headers.Authorization) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
};

export const getErrorMessage = ({ response }) => {
  if (response && response.error) {
    return response.error[0] || response.error;
  }

  if (response && response.data && response.data.errors) {
    return response.data.errors[0];
  }

  if (response && response.data && response.data.error) return response.data.error;

  return (response && response.data) || 'Falha na conexão, tente novamente mais tarde';
};
