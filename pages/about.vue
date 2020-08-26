<template>
  <div class="about" @mousemove="moveEyes">
    <h1 class="neon" data-text="Help Desk">Help Desk</h1>
    <div class="butler">
      <div class="face">
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
          <div class="moustache"></div>
        </div>
      </div>
    </div>
    <div class="badge">
      <div class="badge-top">Hello my name is</div>
      <div class="badge-text">
        <h3>Bobert Phillips</h3>
        <h4>Web Intern, PhD</h4>
      </div>
      <div class="badge-bottom"></div>
    </div>
    <div class="messages">
      <div class="bobert message-chat">
        <p>
          <span style="color:red;">Sorry</span>, I'm on break right now. Check back later.
        </p>
      </div>
      <div class="client message-chat">
        <p>Bobert Phillips, Web Intern</p>
      </div>
    </div>
    <div class="message-input">
      <!-- <input type="text" v-model="text" />
      <button>SEND</button>-->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: "About the App",
      meta: [
        {
          hid: "about",
          name: "about",
          content:
            "Oh please come in and rest at the manor. You must, you must my liege. What do you wish to know about CodeChung?"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    moveEyes() {
      let eye = document.querySelectorAll(".eye");
      eye.forEach(function(eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientWidth / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;

        eye.style.transform = "rotate(" + rot + "deg)";
      });
    }
  }
};
</script>

<style>
.about {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 100px);
  flex-direction: column;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,ffffff+0,878787+8,1c1c1c+20,000000+35,000000+35,000000+39,111111+60,000000+76,000000+99,000000+100,131313+100 */
  background: #000000; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #000000 0%,
    #ffffff 0%,
    #878787 8%,
    #1c1c1c 20%,
    #000000 35%,
    #000000 35%,
    #000000 39%,
    #111111 60%,
    #000000 76%,
    #000000 99%,
    #000000 100%,
    #131313 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #000000 0%,
    #ffffff 0%,
    #878787 8%,
    #1c1c1c 20%,
    #000000 35%,
    #000000 35%,
    #000000 39%,
    #111111 60%,
    #000000 76%,
    #000000 99%,
    #000000 100%,
    #131313 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #ffffff 0%,
    #878787 8%,
    #1c1c1c 20%,
    #000000 35%,
    #000000 35%,
    #000000 39%,
    #111111 60%,
    #000000 76%,
    #000000 99%,
    #000000 100%,
    #131313 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#131313',GradientType=0 ); /* IE6-9 */
}

.neon {
  position: absolute;
  left: 50%;
  top: 20vh;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0 20px;
  font-size: 5em;
  color: #fff;
  text-shadow: 0 0 20px #ff005b;
  opacity: 0.29;
}

.neon:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 20px;
  z-index: -1;
  color: #ff005b;
}

.face {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffcd00;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.7);
  position: relative;
  top: 69px;
  margin-bottom: 70px;
}

.badge {
  background: ghostwhite;
  border-radius: 12px;
  position: absolute;
  left: 25.9%;
  top: 46%;
  transition: 0.4s;
}

.badge:hover,
.badge:active {
  transform: scale(1.69);
}

.badge-top {
  background: blue;
  padding: 5px;
}

.badge-text {
  padding: 5px;
}

.butler {
  background: turquoise;
  width: 50%;
  display: flex;
  justify-content: center;
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.15);
  border-radius: 15px 15px 0 0;
}

.face::before {
  content: "";
  position: absolute;
  top: 180px;
  width: 150px;
  height: 70px;
  background: #b57700;
  transition: 0.5s;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}

.face:hover::before {
  top: 210px;
  width: 150px;
  height: 20px;
  background: #b57700;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.eyes {
  position: relative;
  top: -40px;
  display: flex;
}

.eyes .eye {
  position: relative;
  width: 80px;
  height: 80px;
  display: block;
  background: #fff;
  margin: 0 15px;
  border-radius: 50%;
}

.eyes .eye::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: #333;
  border-radius: 50%;
}

.messages {
  width: 50%;
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid #ebebeb;
  background: ghostwhite;
}

.message-chat {
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.bobert {
  justify-content: flex-start;
  align-items: flex-start;
}

.client {
  justify-content: flex-end;
  align-items: flex-end;
}

.message-input {
  height: 119px;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  padding-top: 6.9px;
}

.message-input input {
  height: 39px;
  outline: none;
  width: 60%;
  border-radius: 6.9px;
  border: 1px solid grey;
  padding: 0 10px;
}

.message-input button {
  height: 39px;
  width: 80px;
  margin-right: 5px;
  border-radius: 6.9px;
  outline: none;
}

@media (max-width: 768px) {
  .about {
    padding-top: 40px;
  }
  .neon {
    font-size: 3.1em;
    top: 26vh;
  }
  .messages {
    width: 90%;
  }
  .message-chat {
    font-size: 16px;
  }
  .message-input {
    width: 90%;
  }
  .butler {
    width: 90%;
  }
  .badge {
    left: 8%;
    top: 51%;
  }
}
</style>