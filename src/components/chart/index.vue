<template>
  <div>
    <DoughnutChart
      :percent="percento"
      :visibleValue="false"
      foregroundColor="#006296"
      backgroundColor="#f2f2f2"
      :strokeWidth="20"
      :radius="85"
      :width="largura"
    />
  </div>
</template>

<script src="./chart.js" />
