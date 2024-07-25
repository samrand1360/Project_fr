<template>
  <q-layout view="hHh lpR fFf" class="bg-dark text-white">
    <!-- Snow *********-->

    <!-- <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>

      <div class="snowflake">❅</div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">
        <q-img src="/public/coinrain.png" style="height: 20px; width: 20px" />
      </div>
      <div class="snowflake">❄</div>
    </div> -->
    <!-- Snow ***********-->
    <q-header reveal elevated class="glassh text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/public/coin.png" />
          </q-avatar>
          <span class="q-px-sm text-overline text-grey-3">Lucky Code</span>
        </q-toolbar-title>
        <span class="text-overline text-grey"> <CounterTimer /></span>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <div class="q-px-md q-mt-sm">
          <q-list bordered class="bg-grey-10 inlineshadow" style="border-radius: 15px">
            <q-item>
              <q-item-section avatar>
                <q-avatar size="40px">
                  <img src="../assets/minilogo.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label
                  ><span class="text-grey q-mr-md">Cio :</span>
                  <span
                    > {{UserData.user.first_name}}
                    {{UserData.user.last_name}}
                  </span></q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <i
                  class="fa-solid fa-user-circle fa-shake"
                  style="color: white; font-size: 32px; --fa-animation-duration: 3s"
                ></i>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <router-view />
      </q-page>
      <q-footer
        style="margin-bottom: 10px"
        rounded
        reveal
        class="glass text-white q-mr-md q-ml-md q-mb-md text-overline"
      >
        <q-tabs
          dense
          align="justify"
          switch-indicator
          indicator-color="transparent"
          active-color="white"
          active-bg-color="dark"
          active-class="tab_active"
          class="shadow-2 q-py-xs q-px-xs text-dark"
        >
          <q-route-tab
            to="/"
            name="Play"
            icon="play_circle_filled"
            label="Play"
            class="enter_tab q-mr-md text-caption"
          />
          <q-route-tab
            to="/payment"
            name="Payment"
            icon="payment"
            label="Payment"
            class="enter_tab text-caption"
          />
          <q-route-tab
            to="/history"
            name="history"
            icon="history"
            label="History"
            class="enter_tab q-ml-md text-caption"
          />
        </q-tabs>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import CounterTimer from "/src/components/CounterTimer.vue";
const tele = window.Telegram.WebApp;
const UserData = tele.initDataUnsafe;



</script>

<style>
.enter_tab:hover {
  border-radius: 15px;
}
.enter_tab {
  border-radius: 15px;
}
.enter_tab:hover:efter {
  border-radius: 15px;
}
.tab_active {
  border-radius: 15px;
  box-shadow: inset 0 6px 20px rgba(0, 0, 0, 0.3), inset 0 10px 20px rgba(0, 0, 0, 0.15);
}
.glass {
  background: rgba(97, 247, 11);
  overflow: hidden;
  border-radius: 15px;
  box-shadow: inset 0 6px 20px rgba(0, 0, 0, 0.3), inset 0 6px 20px rgba(0, 0, 0, 0.15);

  z-index: 1;
}

.glass:before {
  content: "";
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -20px;
  box-shadow: inset 0 0 500px rgba(116, 113, 113, 0.4);
  filter: blur(20px);
  z-index: -1;
}
.glassh {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: inherit;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.glassh:before {
  content: "";
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -20px;
  box-shadow: inset 0 0 500px rgba(116, 113, 113, 0.4);
  filter: blur(20px);
  z-index: -1;
}
</style>
