<template>
  <div class="row q-mr-sm">
    <q-item-section top class="text-center text-overline">
      <q-chip class="glossy text-grey-5" color="grey-10" size="10px" square>{{
        timer.days
      }}</q-chip>
      <span class="text-caption">Day</span>
    </q-item-section>
    <span>.</span>
    <q-item-section top class="text-center text-overline">
      <q-chip class="glossy text-grey-5" color="grey-10" size="10px" square>{{
        timer.hours
      }}</q-chip>
      <span class="text-caption">Hrs</span>
    </q-item-section>
    <span>.</span>
    <q-item-section top class="text-center text-overline">
      <q-chip class="glossy text-grey-5" color="grey-10" size="10px" square>{{
        timer.minutes
      }}</q-chip>
      <span class="text-caption">Min</span>
    </q-item-section>
    <span>.</span>
    <q-item-section top class="text-center text-overline">
      <q-chip class="glossy text-grey-4" color="grey-10" size="10px" square>{{
        timer.seconds
      }}</q-chip>
      <span class="text-caption">Sec</span>
    </q-item-section>

    <!-- <p>{{ timer.isRunning ? "Running" : "Now !!!!!" }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { watchEffect, onMounted } from "vue";
import { useTimer } from "vue-timer-hook";

const time = new Date();
time.setSeconds(time.getSeconds() + 1296000); // 10 minutes timer
const timer = useTimer(time);
const restartFive = () => {
  // Restarts to 5 minutes timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  timer.restart(time);
};
onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      console.warn("IsExpired");
    }
  });
});
</script>
<style scoped>
.text-caption {
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 0.25rem;
  /* letter-spacing: 0.03333em; */
}
</style>
