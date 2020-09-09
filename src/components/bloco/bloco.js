import { mapActions } from 'vuex';
import Chart from '../chart';

export default {
  name: 'Bloco',
  components: {
    Chart
  },
  props: {
    itens: Array,
    id: Number
  },
  data() {
    return {
      meta: 0,
      pontos: 0,
      bahia: 1777,
      percentagem: 0,
      textoBloco: '',
      widthChart: 125
    };
  },
  computed: {},
  beforeMount() {
    this.meta = this.itens.length > 2 ? 9 : this.itens.length * 3;
  },
  mounted() {
    this.percentagem = this.calculaDesempenho();
  },
  methods: {
    getImg(id) {
      return require('@/assets/img/' + id + '.png');
    },
    calculaPontos(item) {
      const vencedor = item.score.winner;
      const emCasa = item.homeTeam.id;
      let ret = '';
      if (vencedor) {
        ret = '<p class="ponto text-secundary">0</p>';
        if (
          (emCasa === this.bahia && vencedor === 'HOME_TEAM') ||
          (emCasa !== this.bahia && vencedor === 'AWAY_TEAM')
        ) {
          ret = '<p class="ponto text-success">+3</p>';
        }
        if (vencedor === 'DRAW') {
          ret = '<p class="ponto text-warning">+1</p>';
        }
      }
      return ret;
    },
    calculaDesempenho() {
      let triunfos = this.itens.filter(item => {
        const vencedor = item.score.winner;
        const emCasa = item.homeTeam.id;

        return (
          (emCasa === this.bahia && vencedor === 'HOME_TEAM') ||
          (emCasa !== this.bahia && vencedor === 'AWAY_TEAM')
        );
      });
      let empates = this.itens.filter(item => {
        const vencedor = item.score.winner;

        return vencedor === 'DRAW';
      });

      let jogos = this.itens.filter(item => {
        const vencedor = item.score.winner;

        return vencedor;
      });

      this.setTriunfos(triunfos.length);
      this.setEmpates(empates.length);

      let triunfosCalc = triunfos.length * 3;
      this.pontos = triunfosCalc + empates.length;
      this.setPontos(this.pontos);
      let sPonto = this.pontos > 1 ? 's' : '';
      let sPontoCal = this.meta - this.pontos > 1 ? 's' : '';

      let pct = Math.round((this.pontos * 100) / this.meta);

      let metaFaltam =
        this.meta - this.pontos > 0
          ? `<span class="text-danger">${this.meta - this.pontos} ponto${sPontoCal}</span>`
          : '-';

      this.textoBloco = `
      <small><b>Disputados:</b> ${jogos.length * 3} pontos</small><br/>
      <small><b>Ganhos:</b> ${this.pontos} ponto${sPonto} (${pct}%)</small><br/>
                        <small><b>Meta:</b> ${this.meta} pontos</small><br/>
                        <small><b>Faltam:</b> ${metaFaltam}</small>`;

      return pct;
    },

    ...mapActions(['setPontos', 'setTriunfos', 'setEmpates'])
  }
};
