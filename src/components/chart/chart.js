import DoughnutChart from 'vue-doughnut-chart';

export default {
  name: 'Chart',
  components: {
    DoughnutChart
  },
  props: {
    percento: Number,
    largura: Number
  },
  data() {
    return {
      percent: '90',
      text: 'Download Speed 8 Mbps'
    };
  },
  methods: {}
};
