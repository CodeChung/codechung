<template>
  <div v-if="menu" class="menu-container">
    <div class="close-menu" @click="closeMenu">
      <button>CLOSE</button>
    </div>
    <ul>
      <li>
        <nuxt-link to="/" data-text="Home">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/portfolio" data-text="Portfolio">Portfolio</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" data-text="About">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" data-text="Contact">Contact</nuxt-link>
      </li>
      <WebButler />
    </ul>
  </div>
</template>

<script>
import WebButler from "./WebButler";
export default {
  components: {
    WebButler
  },
  methods: {
    closeMenu() {

    }
  },
  props: ["menu"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.close-menu {
  position: absolute;
  left: 80px;
  top: 80px;
}

.close-menu button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 22px;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  width: 100%;
}

.menu-container ul li {
  list-style: none;
}

.menu-container ul li a {
  position: relative;
  display: block;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  font-size: 5em;
  font-weight: 900;
  text-decoration: none;
  line-height: 1.2em;
}

.menu-container ul li a:hover {
  color: #fff;
  -webkit-text-stroke: 1px #000;
  transition: 0.5s;
}
.menu-container ul li a:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}

.menu-container ul li a:hover:before {
  color: #0ff;
  z-index: 1;
  -webkit-text-stroke: 1px #000;
  transform: translate(10px, -10px);
  transition: 0.5s;
}

.menu-container ul li a:hover:after {
  color: #0ff;
  z-index: 2;
  -webkit-text-stroke: 1px #000;
  transform: translate(20px, -20px);
  transition: 0.5s;
}
</style>