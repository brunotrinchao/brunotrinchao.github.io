import { mapActions } from 'vuex';
import Bloco from '../bloco';
import Progresso from '../progresso';
import ChartLines from '../chart-lines';

export default {
  name: 'Home',
  components: {
    Bloco,
    Progresso,
    ChartLines
  },
  data() {
    return {
      blocos: [],
      jogos: null,
      pontos: 0
    };
  },
  async beforeMount() {
    let _jogos = await this.getJogos();
    this.jogos = _jogos.matches;

    this.iniciaValores(this.jogos);
    this.separaBlocos(this.jogos);
  },
  methods: {
    separaBlocos(jogos) {
      let corte = 6;
      for (var i = 0; i < jogos.length; i = i + corte) {
        this.blocos.push(jogos.slice(i, i + corte));
      }

      this.setJogos(this.blocos);
    },
    iniciaValores(itens) {
      const bahia = 1777;
      let triunfos = itens.filter(item => {
        const vencedor = item.score.winner;
        const emCasa = item.homeTeam.id;

        return (
          (emCasa === bahia && vencedor === 'HOME_TEAM') ||
          (emCasa !== bahia && vencedor === 'AWAY_TEAM')
        );
      });

      let empates = itens.filter(item => {
        const vencedor = item.score.winner;

        return vencedor === 'DRAW';
      });

      let calcPontos = triunfos.length * 3;
      this.pontos = calcPontos + empates.length;
    },
    ...mapActions(['getJogos', 'setJogos'])
  }
};
