<template>
  <div class="portfolio">
    <h1>
      Port<span style="color:#bfd5ff;">folio</span>
    </h1>
    <div class="carousel">
      <div class="project-card">
        <nuxt-link :to="'/portfolio/facejams'">
          <img src="/facejams.jpeg" alt="face jams" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/goala'">
          <img src="/goala.png" alt="goala" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/noodlebox'">
          <img src="/noodlebox.jpg" alt="noodlebox" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/mydayspa'">
          <img src="/mydayspa.png" alt="my day spa" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/fridgefriend'">
          <img src="/fridgefriend.png" alt="fridge friend" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/eatos'">
          <img src="/eatos.png" alt="eatos" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/networkkm'">
          <img src="/networkkm.png" alt="network km" />
        </nuxt-link>
      </div>
      <div class="project-card">
        <nuxt-link :to="'/portfolio/portfolio2'">
          <img src="/portfolio2.png" alt="portfolio 2" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio",
      meta: [
        {
          hid: "portfolio",
          name: "portfolio",
          content: "Whoa check out Harrys projects"
        }
      ]
    };
  },
  components: {}
};
</script>

<style>
.portfolio {
  padding-top: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  height: calc(100vh - 100px);
}

.portfolio h1 {
  padding-left: 5%;
}

.carousel {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
}

.project-card {
  margin: 10px;
  width: 22%;
  height: auto;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.15);
  transition: 0.25s;
}

.project-card:hover {
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.project-card img {
  width: 100%;
  object-fit: cover;
}

@media(max-width:768px) {
  .carousel {
    overflow: scroll;
    padding: 50px 0;
  }

  .project-card {
    width: 70%;
  }

}
</style>


