export default {
  name: 'Chart-lines',
  data() {
    return {
      datasets: [
        {
          data: [3, 3, 1, 0, 1, 0],
          smooth: true,
          fill: true,
          className: 'bahia'
        },
        {
          data: [1.5, 3, 4.5, 6, 7.5, 9],
          smooth: true,
          fill: true,
          className: 'meta'
        }
      ],
      grid: {
        verticalLines: true,
        horizontalLines: true
      },
      labels: {
        xLabels: [],
        yLabels: 0
      }
    };
  },
  beforeMount() {
    for (let index = 1; index <= 6; index++) {
      this.labels.xLabels.push(`${index}`);
    }
  }
};
