<template>
  <div class="hello">
    <div class="card-deck text-center">
      <div class="card-container">
        <Bloco v-for="(bloco, index) in blocos" :key="index" :id="index + 1" :itens="bloco" />
      </div>
    </div>
    <div class="bloco_info mt-4">
      <div class="row">
        <div class="col-12">
          <div class="progresso"><Progresso :percento="percento" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js" />
<style src="./home.scss" lang="scss" scoped />
