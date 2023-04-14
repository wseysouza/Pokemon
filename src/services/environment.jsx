const env = {
  hmg: 'hmg',
  prod: 'prod',
};

const API_URL = {
  hmg: '',
  prod: 'https://pokeapi.co/api/v2/pokemon/',
};

const currentEnv = env.prod;

export const BASE_API = API_URL[currentEnv];
