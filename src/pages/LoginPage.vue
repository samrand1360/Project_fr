<template>
  <div class="flex flex-center q-mt-lg">
    <div class="column">
          <q-btn push color="indigo" :loading="loading" type="submit">
            Loading...
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Processing...
            </template>
          </q-btn>
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const store = useStore();
const router = useRouter();
const loading = ref(false);
const username = ref("");
const $q = useQuasar();
const tele = window.Telegram.WebApp;
const UserData = tele.initDataUnsafe;

const notify = (msg) => {
  $q.notify({
    type: "negative",
    message: msg,
  });
};


const submitLogin = async () => {

    try {
      loading.value = true;
      const response = await api
        .post("usersapi/login", {
          username: UserData.user.idUserData.user.id,
        })
        .then(async (response) => {
          await store.dispatch("setIsLogged", true);
          localStorage.setItem("token", JSON.stringify(response.data.jwt));

          const user_response = await api.get("usersapi/user");
          await store.dispatch("setUser", user_response.data);
          loading.value = false;
          await router.push("/");
        })
        .catch((err) => {
          notify(err.response.data.detail);
          loading.value = false;
        });
    } catch (error) {
      notify("The connection with the server is lost");
      loading.value = false;
    }
  }
  onMounted(async () => {
await submitLogin()

  })
</script>

<style scoped></style>
