<template>
  <div class="banner">
    <video autoplay muted loop>
        <source src="/waves.mp4" type="video/mp4">
    </video>
    <div class="title">CodeChung</div>
  </div>
</template>

<script>

export default {
    head() {
        return {
            title: 'Welcome to CodeChung',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Best place for codechungs'
                }
            ]
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.banner {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner .title {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    font-size: 14vw;
    text-align: center;
    text-transform: uppercase;
    color: #000;
    line-height: 100vh;
    mix-blend-mode: screen;
    display: flex;
    justify-content: center;
    letter-spacing: .01px;
}

.line-break {
    display: none;
}

@media(max-width:768px) {
    .line-break {
        display: block;
    }
}
</style>
