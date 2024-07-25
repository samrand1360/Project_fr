<template>
  <div class="bg-animation">
    <router-view />
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="stars4"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
// const tele = window.Telegram.WebApp;
// tele.ready();
// tele.expand();
// tele.headerColor = "#000000";

export default defineComponent({
  name: "App",
});


</script>

<style></style>
