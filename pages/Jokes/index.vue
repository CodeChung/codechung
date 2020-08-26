<template>
  <div>
    <SearchJokes v-on:search-text="searchText" />
    <Joke v-for="joke in jokes" v-bind:key="joke.id" :id="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke";
import SearchJokes from "../../components/SearchJokes";

export default {
  components: {
    Joke,
    SearchJokes
  },
  data() {
    return {
      jokes: []
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      console.log(res.data);
      this.jokes = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async searchText(text) {
      console.log(text);
      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        console.log(res.data);
        this.jokes = res.data.results;
      } catch (err) {
        console.log(err);
      }
    }
  },
  head() {
    return {
      title: "Funny Jokes from Papa",
      meta: [
        {
          hid: "jokes",
          name: "jokes",
          content: "Daddy stop being so funny!"
        }
      ]
    };
  }
};
</script>

<style>
</style>