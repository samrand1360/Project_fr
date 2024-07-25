<template>
  <div class="q-px-md q-mt-md main_page">
    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      bordered
      default-opened
      icon="emoji_events"
      label="Winning Numbers : 6/25/2024"
    >
      <q-card
        class="text-center bg-grey-10 q-mt-xs"
        style="border-bottom-left-radius: 100px; border-bottom-right-radius: 100px"
      >
        <q-card-section class="q-gutter-x-xs">
          <div class="text-center">
            <i
              class="fa-solid fa-trophy fa-flip"
              style="color: gold; font-size: 30px; --fa-animation-duration: 3s"
            ></i>
          </div>
          <q-avatar
            color="green"
            size="2rem"
            text-color="grey-11"
            class="glossy text-bold"
            >50</q-avatar
          >
          <q-avatar
            color="green"
            size="2rem"
            text-color="grey-11"
            class="glossy text-bold"
            >21</q-avatar
          >
          <q-avatar color="green" size="2rem" text-color="grey-11" class="glossytext-bold"
            >42</q-avatar
          >
          <q-avatar
            color="green"
            size="2rem"
            text-color="grey-11"
            class="glossy text-bold"
            >11</q-avatar
          >
          <q-avatar
            color="green"
            size="2rem"
            text-color="grey-11"
            class="glossy text-bold"
            >47</q-avatar
          >
          <q-avatar color="yellow" size="2rem" text-color="dark" class="glossy text-bold"
            >13</q-avatar
          >
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-card
      bordered
      class="q-mt-xs"
      style="
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        background-color: rgb(37, 33, 38);
        height: 21em;
      "
    >
      <q-card-section>
        <q-bar dense class="bg-black text-white">
          <div class="text-h6 text-overline text-grey">Try your luck</div>

          <q-space />

          <q-icon size="1.5rem" name="qr_code_2" />
        </q-bar>
      </q-card-section>
      <!-- <q-separator color="grey" inset /> -->
      <q-card-section
        class="q-pt-none ticket"
        style="border-style: inset; border-color: #616161"
      >
        <div class="q-pa-md q-gutter-x-xs text-center">
          <q-avatar class="glossy" size="2rem" color="white" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{
              CommonNumberArr[0]
            }}</span>
          </q-avatar>
          <q-avatar class="glossy" size="2rem" color="white" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{
              CommonNumberArr[1]
            }}</span>
          </q-avatar>
          <q-avatar class="glossy" size="2rem" color="white" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{
              CommonNumberArr[2]
            }}</span>
          </q-avatar>
          <q-avatar class="glossy" size="2rem" color="white" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{
              CommonNumberArr[3]
            }}</span>
          </q-avatar>
          <q-avatar class="glossy" size="2rem" color="white" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{
              CommonNumberArr[4]
            }}</span>
          </q-avatar>
          <q-avatar color="transparent" size="30px" text-color="white">
            <span class="text-h6 text-bold text-weight-bolder">+</span>
          </q-avatar>
          <q-avatar class="glossy" size="2rem" color="yellow" text-color="red">
            <span class="text-h6 text-bold text-weight-bolder">{{ GoldNumber }}</span>
          </q-avatar>
        </div>
        <div class="text-center col-12">
          <q-btn-group spread push class="q-mt-sm">
            <button
              data-v-54d5bc8c=""
              class="col-8 q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-grey-10 text-white q-btn--actionable q-focusable q-hoverable"
              tabindex="0"
              type="button"
              @click="
                (CommonNumberDialog = true), (CommonNumberArr = []), (GoldNumber = '')
              "
            >
              <span class="q-focus-helper" tabindex="-1"></span
              ><span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
              >
                <i
                  class="fa-solid far fa-hand-point-right fa-beat on-left notranslate"
                  style="
                    color: #66d028;
                    font-size: 20px;
                    --fa-beat-scale: 1.4;
                    --fa-animation-duration: 1s;
                  "
                ></i>

                <span
                  class="block fa-bounce"
                  style="
                    --fa-bounce-start-scale-x: 1;
                    --fa-bounce-start-scale-y: 1;
                    --fa-bounce-jump-scale-x: 1;
                    --fa-bounce-jump-scale-y: 1;
                    --fa-bounce-land-scale-x: 1;
                    --fa-bounce-land-scale-y: 1;
                    font-size: 12px;
                  "
                  >Select Numbers</span
                ></span
              >
            </button>

            <!-- <q-btn flat color="red-10" icon="delete" /> -->
          </q-btn-group>
        </div>
      </q-card-section>
      <!-- <q-separator color="grey" inset /> -->

      <q-card-actions>
        <q-btn
          icon="fas fa-plane-departure"
          stack
          push
          padding="lg"
          :disable="CommonNumberArr.length < 5 || !GoldNumber"
          :color="[CommonNumberArr.length == 5 && GoldNumber ? 'indigo-10' : 'indigo-5']"
          class="full-width fa-beat"
          label="Participate in the lottery"
          style="
            --fa-beat-scale: 1.009;
            font-family: monospace;
            border-bottom-left-radius: 30%;
            border-bottom-right-radius: 30%;
          "
        />
      </q-card-actions>
    </q-card>
  </div>

  <template>
    <q-dialog
      v-model="CommonNumberDialog"
      backdrop-filter="blur(2px)"
      persistent
      position="bottom"
    >
      <q-card class="CommonNumberDialogClass flat bordered">
        <q-card-section
          class="text-grey-4 bg-indigo-13 text-center"
          style="font-family: cursive"
        >
          <!-- <div>Selected Numbers</div> -->

          <q-avatar color="white" size="28px" text-color="dark"
            >{{ CommonNumberArr[0] }} </q-avatar
          ><span class="q-mx-xs">-</span>
          <q-avatar color="white" size="28px" text-color="dark">{{
            CommonNumberArr[1]
          }}</q-avatar>
          <span class="q-mx-xs">-</span>
          <q-avatar color="white" size="28px" text-color="dark">{{
            CommonNumberArr[2]
          }}</q-avatar>
          <span class="q-mx-xs">-</span>
          <q-avatar color="white" size="28px" text-color="dark">{{
            CommonNumberArr[3]
          }}</q-avatar>
          <span class="q-mx-xs">-</span>
          <q-avatar color="white" size="28px" text-color="dark">{{
            CommonNumberArr[4]
          }}</q-avatar>
          <span class="q-mx-xs">-</span>
          <q-avatar color="yellow-14" size="28px" text-color="dark">{{
            GoldNumber
          }}</q-avatar>
        </q-card-section>

        <q-card-section>
          <div class="q-mt-sm text-center q-gutter-xs">
            <!-- ******** -->
            <div>
              <!--********************************************* -->

              <!--********************************************* -->
            </div>
            <input type="checkbox" id="num_1" value="num_1" name="num_1" />
            <label for="num_1" class="cnum" @click="SelectCommonNum(1)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                1
              </div>
            </label>
            <!-- ******* -->
            <input type="checkbox" id="num_2" value="num_2" name="num_2" />
            <label for="num_2" class="cnum" @click="SelectCommonNum(2)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                2
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_3" value="num_3" name="num_3" />
            <label for="num_3" class="cnum" @click="SelectCommonNum(3)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                3
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_4" value="num_4" name="num_4" />
            <label for="num_4" class="cnum" @click="SelectCommonNum(4)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                4
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_5" value="num_5" name="num_5" />
            <label for="num_5" class="cnum" @click="SelectCommonNum(5)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                5
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_6" value="num_6" name="num_6" />
            <label for="num_6" class="cnum" @click="SelectCommonNum(6)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                6
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_7" value="num_7" name="num_7" />
            <label for="num_7" class="cnum" @click="SelectCommonNum(7)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                7
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_8" value="num_8" name="num_8" />
            <label for="num_8" class="cnum" @click="SelectCommonNum(8)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                8
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_9" value="num_9" name="num_9" />
            <label for="num_9" class="cnum" @click="SelectCommonNum(9)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                9
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_10" value="num_10" name="num_10" />
            <label for="num_10" class="cnum" @click="SelectCommonNum(10)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                10
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_11" value="num_11" name="num_11" />
            <label for="num_11" class="cnum" @click="SelectCommonNum(11)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                11
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_12" value="num_12" name="num_12" />
            <label for="num_12" class="cnum" @click="SelectCommonNum(12)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                12
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_13" value="num_13" name="num_13" />
            <label for="num_13" class="cnum" @click="SelectCommonNum(13)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                13
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_14" value="num_14" name="num_14" />
            <label for="num_14" class="cnum" @click="SelectCommonNum(14)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                14
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_15" value="num_15" name="num_15" />
            <label for="num_15" class="cnum" @click="SelectCommonNum(15)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                15
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_16" value="num_16" name="num_16" />
            <label for="num_16" class="cnum" @click="SelectCommonNum(16)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                16
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_17" value="num_17" name="num_17" />
            <label for="num_17" class="cnum" @click="SelectCommonNum(17)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                17
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_18" value="num_18" name="num_18" />
            <label for="num_18" class="cnum" @click="SelectCommonNum(18)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                18
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_19" value="num_19" name="num_19" />
            <label for="num_19" class="cnum" @click="SelectCommonNum(19)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                19
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_20" value="num_20" name="num_20" />
            <label for="num_20" class="cnum" @click="SelectCommonNum(20)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                20
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_21" value="num_21" name="num_21" />
            <label for="num_21" class="cnum" @click="SelectCommonNum(21)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                21
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_22" value="num_22" name="num_22" />
            <label for="num_22" class="cnum" @click="SelectCommonNum(22)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                22
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_23" value="num_23" name="num_23" />
            <label for="num_23" class="cnum" @click="SelectCommonNum(23)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                23
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_24" value="num_24" name="num_24" />
            <label for="num_24" class="cnum" @click="SelectCommonNum(24)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                24
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_25" value="num_25" name="num_25" />
            <label for="num_25" class="cnum" @click="SelectCommonNum(25)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                25
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_26" value="num_26" name="num_26" />
            <label for="num_26" class="cnum" @click="SelectCommonNum(26)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                26
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_27" value="num_27" name="num_27" />
            <label for="num_27" class="cnum" @click="SelectCommonNum(27)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                27
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_28" value="num_28" name="num_28" />
            <label for="num_28" class="cnum" @click="SelectCommonNum(28)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                28
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_29" value="num_29" name="num_29" />
            <label for="num_29" class="cnum" @click="SelectCommonNum(29)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                29
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_30" value="num_30" name="num_30" />
            <label for="num_30" class="cnum" @click="SelectCommonNum(30)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                30
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_31" value="num_31" name="num_31" />
            <label for="num_31" class="cnum" @click="SelectCommonNum(31)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                31
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_32" value="num_32" name="num_32" />
            <label for="num_32" class="cnum" @click="SelectCommonNum(32)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                32
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_33" value="num_33" name="num_33" />
            <label for="num_33" class="cnum" @click="SelectCommonNum(33)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                33
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_34" value="num_34" name="num_34" />
            <label for="num_34" class="cnum" @click="SelectCommonNum(34)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                34
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_35" value="num_35" name="num_35" />
            <label for="num_35" class="cnum" @click="SelectCommonNum(35)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                35
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_36" value="num_36" name="num_36" />
            <label for="num_36" class="cnum" @click="SelectCommonNum(36)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                36
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_37" value="num_37" name="num_37" />
            <label for="num_37" class="cnum" @click="SelectCommonNum(37)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                37
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_38" value="num_38" name="num_38" />
            <label for="num_38" class="cnum" @click="SelectCommonNum(38)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                38
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_39" value="num_39" name="num_39" />
            <label for="num_39" class="cnum" @click="SelectCommonNum(39)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                39
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_40" value="num_40" name="num_40" />
            <label for="num_40" class="cnum" @click="SelectCommonNum(40)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                40
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_41" value="num_41" name="num_41" />
            <label for="num_41" class="cnum" @click="SelectCommonNum(41)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                41
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_42" value="num_42" name="num_42" />
            <label for="num_42" class="cnum" @click="SelectCommonNum(42)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                42
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_43" value="num_43" name="num_43" />
            <label for="num_43" class="cnum" @click="SelectCommonNum(43)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                43
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_44" value="num_44" name="num_44" />
            <label for="num_44" class="cnum" @click="SelectCommonNum(44)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                44
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_45" value="num_45" name="num_45" />
            <label for="num_45" class="cnum" @click="SelectCommonNum(45)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                45
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_46" value="num_46" name="num_46" />
            <label for="num_46" class="cnum" @click="SelectCommonNum(46)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                46
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_47" value="num_47" name="num_47" />
            <label for="num_47" class="cnum" @click="SelectCommonNum(47)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                47
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_48" value="num_48" name="num_48" />
            <label for="num_48" class="cnum" @click="SelectCommonNum(48)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                48
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_49" value="num_49" name="num_49" />
            <label for="num_49" class="cnum" @click="SelectCommonNum(49)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                49
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_50" value="num_50" name="num_50" />
            <label for="num_50" class="cnum" @click="SelectCommonNum(50)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                50
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_51" value="num_51" name="num_51" />
            <label for="num_51" class="cnum" @click="SelectCommonNum(51)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                51
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_52" value="num_52" name="num_52" />
            <label for="num_52" class="cnum" @click="SelectCommonNum(52)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                52
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_53" value="num_53" name="num_53" />
            <label for="num_53" class="cnum" @click="SelectCommonNum(53)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                53
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_54" value="num_54" name="num_54" />
            <label for="num_54" class="cnum" @click="SelectCommonNum(54)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                54
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_55" value="num_55" name="num_55" />
            <label for="num_55" class="cnum" @click="SelectCommonNum(55)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                55
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_56" value="num_56" name="num_56" />
            <label for="num_56" class="cnum" @click="SelectCommonNum(56)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                56
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_57" value="num_57" name="num_57" />
            <label for="num_57" class="cnum" @click="SelectCommonNum(57)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                57
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_58" value="num_58" name="num_58" />
            <label for="num_58" class="cnum" @click="SelectCommonNum(58)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                58
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_59" value="num_59" name="num_59" />
            <label for="num_59" class="cnum" @click="SelectCommonNum(59)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                59
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_60" value="num_60" name="num_60" />
            <label for="num_60" class="cnum" @click="SelectCommonNum(60)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                60
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_61" value="num_61" name="num_61" />
            <label for="num_61" class="cnum" @click="SelectCommonNum(61)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                61
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_62" value="num_62" name="num_62" />
            <label for="num_62" class="cnum" @click="SelectCommonNum(62)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                62
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_63" value="num_63" name="num_63" />
            <label for="num_63" class="cnum" @click="SelectCommonNum(63)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                63
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_64" value="num_64" name="num_64" />
            <label for="num_64" class="cnum" @click="SelectCommonNum(64)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                64
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_65" value="num_65" name="num_65" />
            <label for="num_65" class="cnum" @click="SelectCommonNum(65)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                65
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_66" value="num_66" name="num_66" />
            <label for="num_66" class="cnum" @click="SelectCommonNum(66)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                66
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_67" value="num_67" name="num_67" />
            <label for="num_67" class="cnum" @click="SelectCommonNum(67)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                67
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_68" value="num_68" name="num_68" />
            <label for="num_68" class="cnum" @click="SelectCommonNum(68)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                68
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_69" value="num_69" name="num_69" />
            <label for="num_69" class="cnum" @click="SelectCommonNum(69)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                69
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="num_70" value="num_70" name="num_70" />
            <label for="num_70" class="cnum" @click="SelectCommonNum(70)">
              <div
                class="flex inline choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                70
              </div>
            </label>
            <!-- ****** -->
          </div>
        </q-card-section>
        <!-- <q-separator color="dark" /> -->
        <q-card-section
          class="text-yellow-14 bg-grey-10 text-center"
          style="font-family: cursive"
        >
          Select Gold Number
        </q-card-section>
        <q-card-section>
          <div class="q-mt-xs text-center q-gutter-xs">
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_1" value="Goldnum_1" name="Goldnum_1" />
            <label for="Goldnum_1" class="gnum" @click="SelectGoldNum(1)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                1
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_2" value="Goldnum_2" name="Goldnum_2" />
            <label for="Goldnum_2" class="gnum" @click="SelectGoldNum(2)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                2
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_3" value="Goldnum_3" name="Goldnum_3" />
            <label for="Goldnum_3" class="gnum" @click="SelectGoldNum(3)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                3
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_4" value="Goldnum_4" name="Goldnum_4" />
            <label for="Goldnum_4" class="gnum" @click="SelectGoldNum(4)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                4
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_5" value="Goldnum_5" name="Goldnum_5" />
            <label for="Goldnum_5" class="gnum" @click="SelectGoldNum(5)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                5
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_6" value="Goldnum_6" name="Goldnum_6" />
            <label for="Goldnum_6" class="gnum" @click="SelectGoldNum(6)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                6
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_7" value="Goldnum_7" name="Goldnum_7" />
            <label for="Goldnum_7" class="gnum" @click="SelectGoldNum(7)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                7
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_8" value="Goldnum_8" name="Goldnum_8" />
            <label for="Goldnum_8" class="gnum" @click="SelectGoldNum(8)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                8
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_9" value="Goldnum_9" name="Goldnum_9" />
            <label for="Goldnum_9" class="gnum" @click="SelectGoldNum(9)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                9
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_10" value="Goldnum_10" name="Goldnum_10" />
            <label for="Goldnum_10" class="gnum" @click="SelectGoldNum(10)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                10
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_11" value="Goldnum_11" name="Goldnum_11" />
            <label for="Goldnum_11" class="gnum" @click="SelectGoldNum(11)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                11
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_12" value="Goldnum_12" name="Goldnum_12" />
            <label for="Goldnum_12" class="gnum" @click="SelectGoldNum(12)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                12
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_13" value="Goldnum_13" name="Goldnum_13" />
            <label for="Goldnum_13" class="gnum" @click="SelectGoldNum(13)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                13
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_14" value="Goldnum_14" name="Goldnum_14" />
            <label for="Goldnum_14" class="gnum" @click="SelectGoldNum(14)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                14
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_15" value="Goldnum_15" name="Goldnum_15" />
            <label for="Goldnum_15" class="gnum" @click="SelectGoldNum(15)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                15
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_16" value="Goldnum_16" name="Goldnum_16" />
            <label for="Goldnum_16" class="gnum" @click="SelectGoldNum(16)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                16
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_17" value="Goldnum_17" name="Goldnum_17" />
            <label for="Goldnum_17" class="gnum" @click="SelectGoldNum(17)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                17
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_18" value="Goldnum_18" name="Goldnum_18" />
            <label for="Goldnum_18" class="gnum" @click="SelectGoldNum(18)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                18
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_19" value="Goldnum_19" name="Goldnum_19" />
            <label for="Goldnum_19" class="gnum" @click="SelectGoldNum(19)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                19
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_20" value="Goldnum_20" name="Goldnum_20" />
            <label for="Goldnum_20" class="gnum" @click="SelectGoldNum(20)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                20
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_21" value="Goldnum_21" name="Goldnum_21" />
            <label for="Goldnum_21" class="gnum" @click="SelectGoldNum(21)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                21
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_22" value="Goldnum_22" name="Goldnum_22" />
            <label for="Goldnum_22" class="gnum" @click="SelectGoldNum(22)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                22
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_23" value="Goldnum_23" name="Goldnum_23" />
            <label for="Goldnum_23" class="gnum" @click="SelectGoldNum(23)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                23
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_24" value="Goldnum_24" name="Goldnum_24" />
            <label for="Goldnum_24" class="gnum" @click="SelectGoldNum(24)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                24
              </div>
            </label>
            <!-- ****** -->
            <!-- ******* -->
            <input type="checkbox" id="Goldnum_25" value="Goldnum_25" name="Goldnum_25" />
            <label for="Goldnum_25" class="gnum" @click="SelectGoldNum(25)">
              <div
                class="flex inline gold_choices flex-center text-bold shadow-6 text-grey-10 text-caption"
              >
                25
              </div>
            </label>
            <!-- ****** -->
          </div></q-card-section
        >
        <div>
          <q-btn-group spread>
            <q-btn
              class="glossy"
              label="Confirm"
              color="grey-10"
              icon="done_outline"
              text-color="light-green-13"
              v-close-popup
            />
            <q-btn
              padding="md"
              class="glossy"
              label="Cancel"
              color="grey-10"
              icon="delete_outline"
              text-color="deep-orange-6"
              v-close-popup
              @click="(CommonNumberArr = []), (GoldNumber = '')"
            />
          </q-btn-group>
        </div>
      </q-card>
    </q-dialog>
  </template>
</template>

<script setup>
import { ref } from "vue";
import { useSound } from "@vueuse/sound";
import buttonSfx from "../assets/sounds/button.mp3";

const CommonNumberDialog = ref(false);
const CommonNumberArr = ref([]);
const { play } = useSound(buttonSfx);
const commonNumberCheckSelected = ref(false);
const GoldNumber = ref();
const SelectedBtnNum = ref();
const items = document.getElementsByClassName("cnum");
const Golditems = document.getElementsByClassName("gnum");

const SelectCommonNum = async (num) => {
  play();
  const index = CommonNumberArr.value.indexOf(num);
  console.log(index);
  if (index > -1) {
    CommonNumberArr.value.splice(index, 1);
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("common_selected_full");
    }
  } else {
    if (CommonNumberArr.value.length <= 5) {
      CommonNumberArr.value.push(num);

      if (CommonNumberArr.value.length == 5) {
        for (var i = 0; i < items.length; i++) {
          // console.log(items[i].id);
          items[i].classList.add("common_selected_full");
          // if (items[i].id != "num_" + (i + 1)) {
          //   items[i].classList.add("common_selected_full");
          //   console.log(CommonNumberArr.value[0]);
          // }
          // for (var j = 1; j <= CommonNumberArr.value.length; j++) {
          //   if (items[i].id != "num_" + j) {
          //     items[i].classList.add("common_selected_full");
          //     console.log("num_" + j);
          //   }
          // }
        }

        for (const cn of CommonNumberArr.value) {
          // document.getElementById("num_" + cn).classList.remove("common_selected_full");
          document
            .getElementById("num_" + cn)
            .nextElementSibling.classList.remove("common_selected_full");

          // if (document.getElementById == "num_" + cn) {
          //   items[j].classList.remove("common_selected_full");
          // }
          // items[j].classList.remove("common_selected_full");
        }
      }

      // const item = document.getElementsByClassName("num_" + num);
    }
  }
};
const SelectGoldNum = async (num) => {
  play();
  if (GoldNumber.value > 0) {
    GoldNumber.value = "";
    for (var i = 0; i < Golditems.length; i++) {
      Golditems[i].classList.remove("gold_selected_full");
    }
  } else {
    if (!GoldNumber.value) {
      GoldNumber.value = num;
      console.log(GoldNumber.value);
      if (GoldNumber.value >= 1) {
        for (var i = 0; i < Golditems.length; i++) {
          Golditems[i].classList.add("gold_selected_full");
        }

        document
          .getElementById("Goldnum_" + num)
          .nextElementSibling.classList.remove("gold_selected_full");
      }
    }
  }
};
</script>

<style scoped>
.common_selected_full {
  pointer-events: none;
  opacity: 0.6;
}
.gold_selected_full {
  pointer-events: none;
  opacity: 0.6;
}
.main_page {
  margin-top: 25px;
  height: 81vh;
  background-color: rgb(0, 0, 0);
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: rgba(92, 247, 3, 0.9) 0px 0px 0px, rgba(92, 247, 3, 0.7) 0px -8px 8px,
    rgba(92, 247, 3, 0.9) 0px 0px 0px, rgba(92, 247, 3, 0.9) 0px 0px 0px,
    rgba(92, 247, 3, 0.9) 0px -3px 4px;
}
.q-expansion-item:hover {
  background-color: transparent;
  border-radius: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.q-expansion-item__container.q-focus-helper:hover {
  background-color: transparent;
  border-radius: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.CommonNumberDialogClass {
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  box-shadow: rgba(92, 247, 3, 0.9) 0px 0px 0px, rgba(92, 247, 3, 0.7) 0px -8px 8px,
    rgba(92, 247, 3, 0.9) 0px 0px 0px, rgba(92, 247, 3, 0.9) 0px 0px 0px,
    rgba(92, 247, 3, 0.9) 0px -3px 4px;
  opacity: 1;
  /* background: linear-gradient(315deg, transparent 75%, #000000 0)-5px 0,
    linear-gradient(45deg, transparent 75%, #000000 0) 5px 0,
    linear-gradient(135deg, #333 50%, transparent 0) 0 0,
    linear-gradient(45deg, #4d4d4d 50%, #666 0) 0 0 #666;
  background-size: 10px 10px; */
  background-color: #070607;
  /* background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23786f84' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E"); */
}
/* ***************** */
.choices {
  background-color: #fffcfc;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 10px;
  margin-bottom: 5px;

  /* border: 2px solid #5d6d7e; */
}
.gold_choices {
  background-color: #fffcfc;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: 10px;
  margin-bottom: 5px;

  /* border: 2px solid #5d6d7e; */
}

.gold_choices:hover {
  background: #ffff8d;
}
.choices:hover {
  background: #00e676;
}

input {
  display: none;
}
input:checked + label > .gold_choices {
  background-color: #e4bc0b !important;
  border-color: #f1bb09;
  color: rgb(0, 0, 0) !important;

  animation: gold_choices 0.5s ease-in-out;
  outline: 2px solid #ebb505;
  outline-offset: 2px;
  transition: all 0.2s ease-in-out;
}
input:checked + label > .choices {
  background-color: #2bf104 !important;
  border-color: #2bf104;
  color: rgb(0, 0, 0) !important;

  animation: choices 0.5s ease-in-out;
  outline: 2px solid #2bf104;
  outline-offset: 2px;
  transition: all 0.2s ease-in-out;
}
.ticket {
  background-image: url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
}

/* ******************* */
</style>
