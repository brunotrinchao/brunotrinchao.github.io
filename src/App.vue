<template>
  <div id="app" class="container-fluid">
    <div class="py-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="https://upload.wikimedia.org/wikipedia/pt/9/90/ECBahia.png"
        alt=""
        height="100"
      />
      <h2>Pontuação por bloco do campeonato brasileiro 2020</h2>
      <p class="lead"></p>
    </div>
    <Home />
    <div class="pt-4 my-md-5 pt-md-5 border-top"></div>
  </div>
</template>

<script>
import Home from './components/home';

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>
