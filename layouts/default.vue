<template>
  <div class="container">
    <Menu :menu="menu" />
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import Menu from '../components/Menu';

export default {
  components: {
    AppHeader,
    Menu,
  },
  data() {
    return {
      menu: false
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  height: 100vh;
  overflow: scroll;
  background: #fff;
}

</style>
