<template>
  <div>
    <vs-row>
      <vs-col lg="6" sm="12">
        <vs-card>
          <template #text>
            <v-tabs>
              <v-tab name="ລາຍລະອຽດ">
                <section id="wtdetail pg-t3">
                  <div class="input__control">
                    <vs-input type="text" disabled :label="$t('_acc_no')" />
                  </div>
                  <div class="input__control">
                    <vs-input type="text" disabled :label="$t('_fullname')" />
                  </div>
                  <div class="input__control">
                    <vs-input type="text" disabled :label="$t('_village')" />
                  </div>
                  <div class="input__control">
                    <vs-input type="text" disabled :label="$t('_district')" />
                  </div>
                  <div class="input__control">
                    <vs-select
                      filter
                      placeholder="Filter"
                      v-model="value"
                      :label="$t('_province')"
                    >
                      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
                      <vs-option label="Vue" value="2"> Vue </vs-option>
                      <vs-option label="Javascript" value="3">
                        Javascript
                      </vs-option>
                      <vs-option label="Sass" value="4"> Sass </vs-option>
                      <vs-option label="Typescript" value="5">
                        Typescript
                      </vs-option>
                      <vs-option label="Webpack" value="6"> Webpack </vs-option>
                      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
                    </vs-select>
                  </div>
                </section>
              </v-tab>
              <v-tab name="ປະຫວັດຊຳລະ">
                <section id="paidhist">
                  <vs-table>
                    <template #thead>
                      <vs-tr>
                        <vs-th> Name </vs-th>
                        <vs-th> Email </vs-th>
                        <vs-th> Id </vs-th>
                      </vs-tr>
                    </template>
                    <template #tbody>
                      <vs-tr
                        :key="i"
                        v-for="(tr, i) in users"
                        :data="tr"
                        :danger="tr.id == 3"
                        :success="tr.id == 5"
                        :primary="tr.id == 8"
                        :warn="tr.id == 9"
                      >
                        <vs-td>
                          {{ tr.name }}
                        </vs-td>
                        <vs-td>
                          {{ tr.email }}
                        </vs-td>
                        <vs-td>
                          {{ tr.id }}
                        </vs-td>
                        <vs-td>
                          {{ tr.id }}
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
                </section>
              </v-tab>
            </v-tabs>
          </template>
        </vs-card>
      </vs-col>
      <vs-col lg="6" sm="12">
        <vs-card>
          <template #text>
            <v-steps>
              <v-step name="ລາຍລະອຽດບິນ">
                <vs-row>
                  <vs-col w="3"
                    ><h3 style="line-height: 2.5">ເລກທີໃບບິນ</h3></vs-col
                  >
                  <vs-col w="9"
                    ><vs-select multiple placeholder="ເລກບິນ" v-model="value">
                      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
                    </vs-select></vs-col
                  >
                </vs-row>
                <br />
                <vs-table>
                  <template #thead>
                    <vs-tr>
                      <vs-th></vs-th>
                      <vs-th> ປະຈຳເດືອນ </vs-th>
                      <vs-th> ຈຳນວນເງິນ </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr>
                      <vs-td> 10314-66216 </vs-td>
                      <vs-td> 07/2021 </vs-td>
                      <vs-td> 6.034,00 ກີບ </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
                <div class="bot-con">
                  <h3>ລວມຍອດເງິນຍົກມາໃນເດືອນ <strong>44444 ກີບ</strong></h3>
                  <h3>ຈຳນວນເງິນຊຳລະບິນ <strong>44444 ກີບ</strong></h3>
                  <h3>ໜີ້ຄ້າງຈ່າຍໃນອານາຄົດ <strong>44444 ກີບ</strong></h3>
                </div>
              </v-step>
              <v-step name="ເລືອກຊ່ອງທາງຊຳລະ">
                <div>
                  <vs-row>
                    <vs-col w="4">
                      <vs-radio v-model="typay" val="ACUP">
                        ຈ່າຍຜ່ານເງິນສົດ
                        <template #icon>
                          <i class="bx bx-yen"></i>
                        </template>
                      </vs-radio>
                    </vs-col>
                    <vs-col w="4"
                      ><vs-radio v-model="typay" val="ACFT">
                        ຈ່າຍຜ່ານບັນຊີລູກຄ້າ
                        <template #icon>
                          <i class="bx bx-won"></i>
                        </template> </vs-radio
                    ></vs-col>
                  </vs-row>
                  <div style="margin-top: 15px; padding-bottom: 20px">
                    <template v-if="typay == 'ACUP'">
                      <vs-select
                        placeholder="ເລືອກບັນຊີ Walk In"
                        v-model="value"
                      >
                        <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
                      </vs-select>
                    </template>
                    <template v-if="typay == 'ACFT'">
                      <vs-input
                        type="text"
                        placeholder="ກາລຸນາປ້ອນເລກບັນຊີລູກຄ້າ"
                      />
                    </template>
                  </div>
                </div>
                <div class="bot-con">
                  <h3>ລາຍລະອຽດການຊຳລະໃບບິນ</h3>
                  <h3>ເລກບັນຊີຜູ້ໃຊ້ນ້ຳ <strong>44444 ກີບ</strong></h3>
                  <h3>ຊື່ ແລະ ນາມສະກຸນ <strong>44444 ກີບ</strong></h3>
                  <h3>ບິນເລກທີ <strong>44444 ກີບ</strong></h3>
                  <h3>ລວມຈຳນວນເງິນ <strong>44444 ກີບ</strong></h3>
                  <h3>ເລືອກປ້ອນຈຳນວນເງິນໃໝ່ <strong>44444 ກີບ</strong></h3>
                </div>
              </v-step>
              <v-step name="ສະຖານະ"></v-step>
            </v-steps>
          </template>
          <template #buttons>
            <vs-row>
              <vs-col w="6"
                ><vs-button danger
                  ><i class="bx bx-back"></i> ກັບຄືນ
                </vs-button></vs-col
              >
              <vs-col w="6"
                ><vs-button style="width: 100%"> ຊຳລະ </vs-button></vs-col
              >
            </vs-row>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "",
    typay: "ACUP",
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
  }),
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert("end");
    },
  },
};
</script>

<style lang="scss">
.vs-card {
  background: rgb(255 255 255 / 95%);
}
.vs-select-content {
  max-width: 100%;
}
.input__control {
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
  padding-top: 30px;
  .vs-input-parent {
    width: 100%;
  }
  .vs-select-content {
    max-width: 100%;
  }
}

.progressbar {
  counter-reset: step;
}
.progressbar li {
  list-style-type: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
  font-weight: 600;
}
.progressbar li:before {
  /* CSS for creating steper block before the li item*/
  content: counter(step);
  counter-increment: step;
  height: 30px;
  width: 30px;
  line-height: 30px;
  border: 2px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}
.progressbar li:after {
  /* CSS for creating horizontal line*/
  content: ’’;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: var(--vs-primary);
}
.progressbar li.active:before {
  border-color: var(--vs-primary);
}
.progressbar li.active + li:after {
  background-color: var(--vs-primary);
}
.bot-con {
  h3 {
    line-height: 2;
    border-bottom: 1px solid #ddd;
    strong {
      right: 15px;
      position: absolute;
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>