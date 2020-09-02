<template>
  <div class="card-bloco col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card shadow-sm">
      <div class="card-header">Bloco {{ id }}</div>
      <div class="card-body">
        <div class="row lista-jogo d-flex" v-for="(item, index) in itens" :key="index">
          <div class="col-3 linha">
            <img :src="getImg(item.homeTeam.id)" />
          </div>
          <div class="col-3 linha">
            <h4>{{ item.score.fullTime.homeTeam }}X{{ item.score.fullTime.awayTeam }}</h4>
          </div>
          <div class="col-3 linha">
            <img :src="getImg(item.awayTeam.id)" />
          </div>
          <div class="col-3 linha" v-html="calculaPontos(item)"></div>
        </div>
        <Chart :percento="percentagem" :largura="widthChart" />
        <div class="text-left" v-html="textoBloco"></div>
      </div>
    </div>
  </div>
</template>

<script src="./bloco.js" />
<style src="./bloco.scss" lang="scss" scoped />
<style>
.ponto {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
}
</style>
