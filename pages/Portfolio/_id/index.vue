<template>
  <div class="project-container">
    <div class="content">
      <div class="left-side">
        <div class="bannerText">
          <h1>{{ project.title }}</h1>
          <p>{{ project.desc }}</p>
        </div>
        <div class="lang">
          <img :src="lang" alt="`${lang} used`" v-for="lang in project.lang" :key="lang" />
        </div>
      </div>
      <div class="right-side">
        <div class="bannerImg">
          <img :src="project.img" alt="project screenshot" />
        </div>
        <div class="links">
          <button v-for="link in project.links" :key="link">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </button>
        </div>
      </div>
    </div>
    <div class="tag">{{ project.tag }}</div>
  </div>
</template>

<script>
import axios from "axios";

const projectKey = {
  facejams: {
    title: "Facejams",
    img: "/facejams.jpeg",
    tag: "Listen to Your Face",
    desc: `Facejams converts the emotional data in your face into a song that reflects your mood. This was a really fun way to integrate a bunch of random APIs in an interesting way. How cool is technology!`,
    lang: ["/react.png", "/node.png", "/postgres.svg"],
    links: [
      {
        title: "Demo",
        url: "https://codechung-facejams-app.now.sh/"
      },
      {
        title: "Client",
        url: "https://github.com/CodeChung/facemusic-client"
      },
      {
        title: "Server",
        url: "https://github.com/CodeChung/facemusic-server"
      }
    ]
  },
  goala: {
    title: "Goala",
    img: "/goala.png",
    tag: "Track Goals & Journal",
    desc:
      "I liked the idea of building with components in React with components. I wanted to componentized our day to day tasks in a way that allows for easy data tracking/scheduling while organically journalling about your day.",
    lang: ["/react.png", "/node.png", "/postgres.svg"],
    links: [
      {
        title: "Demo",
        url: "https://hc9825-goala-app.now.sh/"
      },
      {
        title: "Client",
        url: "https://github.com/CodeChung/goala-client"
      },
      {
        title: "Server",
        url: "https://github.com/CodeChung/goala-server"
      }
    ]
  },
  fridgefriend: {
    title: "Fridge Friend",
    img: "/fridgefriend.png",
    tag: "Where's the Beef?",
    desc:
      "One of my first bootcamp projects. Type in ingredients you have in the fridge and voila! Get a recipe that incorporates those ingredients. Version 2.0 coming soon.",
    lang: ["/jquery.png", "/html.png", "/css.png"],
    links: [
      {
        title: "Demo",
        url: "https://codechung.github.io/fridgefriend/"
      },
      {
        title: "Code",
        url: "https://github.com/CodeChung/fridgefriend"
      }
    ]
  },
  noodlebox: {
    title: "Noodlebox",
    img: "/noodlebox.jpg",
    tag: "Box Dem Noodles Up",
    desc:
      "This was a project I completed while interning at a dev shop. Converting PSDs to HTML and CSS. Pretty rote but good practice",
    lang: ["/javascript.png", "/html.png", "/css.png"],
    links: [
      {
        title: "Demo",
        url: "https://codechung.github.io/noodlebox/"
      },
      {
        title: "Code",
        url: "https://github.com/CodeChung/noodlebox"
      }
    ]
  },
  mydayspa: {
    title: "My Day Spa",
    img: "/mydayspa.png",
    tag: "So Fresh & So Clean",
    desc: "My first client! Shoutout to My Day Spa & Acupuncture in Calabasas",
    lang: ["/react.png", "/greensock.png"],
    links: [
      {
        title: "Demo",
        url: "https://mydayspa365.firebaseapp.com/"
      }
    ]
  },
  eatos: {
    title: "EatOS",
    img:
      "https://images.pexels.com/photos/750075/pexels-photo-750075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tag: "Eat Toes",
    desc:
      "Definitely an interesting learning experience. Built an online food ordering platform using Angular and MongoDB for the first time. Led satellite teams in Peru and India in building a responsive, secure ordering system as full stack lead. Crash & Burn & Learn. MEAN, not PERN.",
    lang: ["/angular.png", "/mongo.png"],
    links: [
      {
        title: "Sorry Under NDA",
        url: "https://www.placecage.com/400/400"
      }
    ]
  },
  networkkm: {
    title: "Network KM",
    img: "/networkkm.png",
    tag: "Shoutout to Craigslist",
    desc:
      "Saw Craigslist ad looking for a dev to build app. Called number. Drove to the house. Didn't get murdered. Got the job. Started next day. Worked on a social networking app designed for older audiences. Added blogging, commenting, friend requests, login/registration, notifications. Client ran out of budget. Sayonara.",
    lang: ["/react.png", "/node.png"],
    links: [
      {
        title: "Demo",
        url: "http://networkkm.com/"
      },
      {
        title: "Client",
        url: "https://github.com/CodeChung/networkkm-client"
      },
      {
        title: "Server",
        url: "https://github.com/CodeChung/networkkm-server"
      }
    ]
  },
  portfolio2: {
    title: "Portfolio 2.0",
    img: "/portfolio2.png",
    tag: "From The Ashes Rise",
    desc:
      "Like the phoenix, my portfolio hath risen from the dead countless times. As I continue to grow stronger, so too do the flames of my JavaScript fury. I will never stop burning, this phoenix will never lose its flame. BTW, this is currently the third version, written in Vue.",
    lang: ["/javascript.png", "/greensock.png"],
    links: [
      {
        title: "Demo",
        url: "https://github.com/CodeChung/portfolio"
      },
      {
        title: "Code",
        url: "https://github.com/CodeChung/networkkm-client"
      }
    ]
  }
};

export default {
  components: {},
  data() {
    return {
      project: {}
    };
  },
  async created() {
    console.log(
      "YOLO",
      this.$route.params.id,
      projectKey[this.$route.params.id]
    );
    this.project = projectKey[this.$route.params.id];
  },
  methods: {},
  head() {
    return {
      title: `${this.$route.params.id[0].toUpperCase() + this.$route.params.id.slice(1, this.$route.params.id.length)}`,
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
.project-container {
  position: relative;
  height: calc(100vh - 100px);
}

.project-container:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: #333;
  border-radius: 25px 0 0 0;
}

.left-side {
  width: 50%;
}

.right-side {
  box-shadow: 0px 0px 0px 0 rgba(0, 0, 1, 0), 0 2px 4px 0 black;
  border-radius: 15px;
}

.tag {
  position: absolute;
  bottom: 0;
  left: 40px;
  font-size: 5.9vw;
  z-index: 2;
  font-weight: 700;
  color: #000;
  opacity: 0.04;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  position: relative;
  z-index: 1;
  padding: 0 100px;
}

.content .bannerText {
  position: relative;
  max-width: 500px;
  margin-right: 50px;
}

.content .bannerText h1 {
  font-size: 54px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  color: #333;
}

.content .bannerText p {
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin: 20px 0;
}

.content .bannerImg {
  position: relative;
  width: 550px;
  height: 300px;
  background: #000;
  border-radius: 15px;
}

.content .bannerImg img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}

.lang {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  width: 60%;
}

.lang img {
  width: 55px;
  object-fit: cover;
}

.links {
  position: absolute;
  padding-top: 3px;
}

.links button {
  font-size: 16px;
  padding: 3px;
  margin: 2.5px;
  background: ghostwhite;
  border-radius: 3px;
}

@media(max-width:768px) {
  .content {
    flex-direction: column-reverse;
  }
  .project-container:before {
    width: 69%;
    z-index: -1;
  }
  .tag {
    opacity: .069;
    font-size: 2.5em;
  }
  .left-side {
    width: 90%;
  }
  .content {
    margin-bottom: 40px;
    padding: 0;
  }
  .content .bannerImg {
    width: 80vw;
    height: auto;
  }
  .content .bannerImg img {
    position: relative;
    width: 100%;
    height: auto;
  }
  .content .bannerText {
    width: 100%;
    margin-top: 70px; 
  }
  .content .bannerText h1 {
    font-size: 2.9em;
  }
  .links button {
    font-size: 24px;
  }
  .project-container {
    overflow: scroll;
  }
  .lang {
    margin-bottom: 60px;
  }

}
</style>