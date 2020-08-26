<template>
  <header class="header">
    <h1 class="title" @click="dropDownMenu">C</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/portfolio">Work</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    dropDownMenu() {
      console.log('penis')
    }
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding-top: 20px;
}

.header .title {
  font-size: 5rem;
  color: #bfd5ff;
  border: 1px solid black;
  border-radius: 3px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s ease-in-out;
}

.header .title:hover {
  background: black;
  color: #dfeaff;
}

.header ul {
  display: flex;
}

.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
</style>