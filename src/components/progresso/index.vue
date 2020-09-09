<template>
  <div>
    <h3>Progresso para alcançar a meta (60 pontos)</h3>
    <b-progress :max="metaTotal"  height="2rem">
    <b-progress-bar :value="pontos" :label="`${((pontos / metaTotal) * 100).toFixed(2)}%`" show-progress class="mb-2"></b-progress-bar>
    </b-progress>
  </div>
</template>

<script src="./progresso.js" />
