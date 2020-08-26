<template>
    <div>
        <nuxt-link to='/jokes'>Back To Jokes</nuxt-link>
        <h1>Joke #{{joke.id}}</h1>
        <p>{{joke.joke}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            joke: {

            }
        }
    },
    async created() {
        const config = {
            headers: {
                'Accept': 'application/json',
            }
        }

        try {
            const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
            console.log(res.data)
            this.joke = res.data
        } catch (err) {
            console.log(err)
        }
    }
}
</script>

<style>

</style>