<template>
  <div class="butler" @mousemove="moveEyes">
    <div class="face">
      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
        <div class="moustache"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebButler",
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

</style>