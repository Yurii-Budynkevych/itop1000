import axios from 'axios';
axios.defaults.baseURL = 'https://api.monobank.ua/';

export const getCurrentCurrencyPrice = async () => {
  const res = await axios.get(`/bank/currency`);

  const data = res.data.filter(
    element => element.currencyCodeA === 840 || element.currencyCodeA === 978
  );
  const filteredByUAHData = data.filter(el => el.currencyCodeB === 980);
  return filteredByUAHData;
};
