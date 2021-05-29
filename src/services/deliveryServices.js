import axios from 'axios';

//função para retornar o endereço da API..
export const getApiUrl = () => {
  return 'http://apirestaurante2-001-site1.ftempurl.com';
};

//função para obter os dados do restaurante..
export const getDadosRestaurante = () => {
  return axios.get(getApiUrl() + '/api/restaurante').then(
    //Promisse -> retorno do processamento da API..
    (response) => {
      return response.data;
    },
  );
};

//função para obter os dados do cardapio..
export const getCardapio = () => {
  return axios.get(getApiUrl() + '/api/cardapio').then(
    //Promisse -> retorno do processamento da API..
    (response) => {
      return response.data;
    },
  );
};

export const postClient = (cliente) => {
  return axios.post(getApiUrl() + '/api/cliente', cliente).then((response) => {
    return response.data;
  });
};
