<template>
  <div class="contact">
    <h1>Contact <span style="color:#bfd5ff;">Me</span></h1>
    <ul>
      <li><a href="mailto:hc9825@gmail.com" target="_blank"><img class="fa" src="/gmail.png" /></a></li>
      <li><a href="https://github.com/CodeChung" target="_blank"><img class="fa" src="/github.png" /></a></li>
      <li><a href="https://www.linkedin.com/in/harry-h-chung/" target="_blank"><img class="fa" src="/linkedin.png" /></a></li>
    </ul>
    <div class="ginger">
      <a href="https://docs.google.com/document/d/1vFk-gxdaSvRwkk_tgjKGjdkF0U9ij2AzPvIKnr8FwGk/edit?usp=sharing" target="_blank">
        <img src="/gingerbread.png" alt="ginger bread recruiter" />
      </a>
    </div>
  </div>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons";

export default {
  head() {
    return {
      title: "Contact this Coder",
      meta: [
        {
          hid: "contact",
          name: "contact",
          content: "Best place for codedaddys"
        }
      ]
    };
  },
};
</script>

<style>
.contact {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
}

.contact ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

.contact ul li {
  list-style: none;
  margin: 0 40px;
  width: 260px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact ul li a .fa {
  font-size: 40px;
  color: #262626;
  line-height: 80px;
  transition: 0.5s;
}

.contact img {
    width: 70px;
}

.contact ul li a {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  background:rgb(255, 39, 39);
  text-align: center;
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact ul li a:hover {
  transform: perspective(1000px) rotate(-30deg) skew(25deg)
    translate(20px, -20px);
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.2);
}

.ginger {
  position: absolute;
  right: -150px;
  bottom: 30px;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: 1s ease-in;
}

.ginger:hover, .ginger:active {
  opacity: 1;
}

.ginger img {
  width: 50%;
}

@media(max-width:768px) {
  .contact {
    overflow: scroll;
    width: 100%;
  }
  .contact ul {
    flex-direction: column;
    position: relative;
    top: 50vh;
  }
  .ginger {
    width: 100px;
    right: 0;
  }
  .ginger img {
    width: 100%;
  }
}
</style>