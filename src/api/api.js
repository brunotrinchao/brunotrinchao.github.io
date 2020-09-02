import axios from 'axios';
import urls from './url';

const Api = {
  install(Vue) {
    const instance = axios.create({
      baseURL: urls.BASE_API,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': '16ccdd941e4f49b5855d552430ab8295'
      },
      loader: '.conteudo-pagina',
      exibirErro: true
    });

    Vue.prototype.$api = instance;
  }
};

export default Api;
