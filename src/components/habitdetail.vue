<template>
  <div class="small">
    <div class="section mt-40">
      <!-- container -->
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-md-push-2">
            <div id="product-main-img">
              <div class="product-preview">
                <chart ref="chart" v-if="datacollection.labels.length" :chartData="datacollection" />
              </div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="product-details">
              <h1 class>{{this.habit.title}}</h1>
              <p class>Started date {{this.habit.startdate}}</p>
              <h4>Select the dates you completed the work</h4>
              <DatePicker
                v-model="date"
                lang="en"
                type="date"
                format="DD/MM"
                width="500"
                placeholder="select date to see progress"
                multiple
                confirm
                @click="update"
              />

              <div v-for="times in this.habit.streak">
                <div class="product-rating">
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
              <p>Current streak {{this.habit.streak}}</p>
              <h4>Select the time</h4>
              <DatePicker
                v-model="time"
                lang="en"
                type="time"
                format="HH-mm "
                width="500"
                placeholder="Remenber to complete"
                multiple
                confirm
                @click="update"
              />
              <input
                type="text"
                class="togetinline"
                v-model="frequency"
                placeholder="Enter frequency in week"
              />
              <button @click="adddata()" class="primary">save</button>
              <div class="product-options"></div>
              <h3>Explation</h3>
              <ul>
                <li>Based on how many continuous days you follow your habits your rewards increse exponentially</li>
                <li>Missing days will decrease your rewards</li>
                <li>frequency will take care of the dates you enter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-if="added">
        <h2>Smart Graph</h2>
        <p>will calculate your rewards</p>

        <line-chart width="800px" height="500px" v-if="added" :data="chartData1"></line-chart>
        <h2>Your Streak graph</h2>
        <p>will calculate your mantained streak</p>

        <column-chart width="800px" height="500px" v-if="added" :data="chartData2"></column-chart>
      </div>
      <button flat @click="goback()" class="back white--text">Back</button>
    </div>
  </div>
</template>

  </div>
</template>
<script>
import Chart from "./Linechat.js";
import { line } from "vue-chartjs";
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { fb, db } from "../firebase";

export default {
  components: {
    Chart,
    DatePicker
  },
  name: "habits",

  data() {
    return {
      momentFormat: {
        // Date to String
        stringify: date => {
          return date ? moment(date).format("LL") : "";
        },
        // String to Date
        parse: value => {
          return value ? moment(value, "LL").toDate() : null;
        }
      },
      chartData1: [],
      date: "",
      dl: 0,

      time: "",
      datetime: "",
      chartData2: [],
      frequency: 2,
      datesused: [],
      streak: [],
      trial: [],
      bonus: 0,
      habit: {},

      added: false,

      datacollection: {
        labels: [],
        datasets: [
          {
            label: "Target",
            backgroundColor: "#f87979",
            data: [10, 20, 33, 44, 60, 75, 88, 99, 120, 140, 165]
          }
        ]
      }
    };
  },
  watch: {
    date() {
      if (this.date.length != 0) {
        this.date.forEach(el => {
          el = moment(el).format("DD-MM");
          this.trial.push(el);

          let value = el.split("-");

          let tv = parseInt(value[1]) * 31;
          tv = tv + parseInt(value[0]);
          this.datesused.push(tv);
        });
        this.trial = this.trial.sort();
        console.log(this.trial);

        this.update();
      }
    }
  },
  methods: {
    adddata() {
      //this.$firestore.habits.doc(this.product.id).update(this.product);
      // Toast.fire({
      //   type: "success",
      //  title: "Updated  successfully"
      // });
    },
    update() {
      this.added = true;
      var results = [];
      var limit = this.datesused.length - 1;
      var sequence = 0;
      var re = 0;
      var streak = 0;
      for (var i = 0; i < limit; ++i) {
        if (this.datesused[i] + 1 == this.datesused[i + 1]) {
          sequence = sequence + 3;
          re = re + 1;
          streak = streak + 1;
          if (re > 3) {
            sequence = sequence + 3;
            re = 0;
            this.bonus = this.bonus + 3;
          }
        } else {
          this.streak.push(streak);
          var streak = 0;
          sequence = sequence - 1;
          if (sequence < 0) {
            sequence = 0;
          }

          parseInt(
            (this.datesused[i + 1] - this.datesused[i]) / this.frequency
          );
        }
        console.log(sequence);
        this.chartData1.push([this.trial[i], sequence]);
      }
      if (this.datesused[i - 1] + 1 == this.datesused[i]) {
        sequence = sequence + 3;
        re = re + 1;
        streak = streak + 1;
        if (re > 3) {
          sequence = sequence + 3;
          re = 0;
        }
      } else {
        var streak = 0;
        sequence =
          sequence - parseInt((this.datesused[i + 1] - this.datesused[i]) / 2);
      }
      console.log(sequence);
      this.chartData1.push([this.trial[i], sequence]);
      this.habit.rewards = sequence;
      console.log(this.habit.rewards);
      this.habit.streak = streak;
      console.log(this.chartData1);
      this.trial = [];
      this.datesused = [];
      this.date = [];
      this.nextgrp();
    },

    getListData() {
      let dates = getDates(this.habit.startDate, moment().add(10, "days"));
      dates.forEach(el => {
        console.log(el);
        this.datacollection["labels"].push(el);
      });

      function getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
          dateArray.push(moment(currentDate).format("DD-MM"));
          currentDate = moment(currentDate).add(1, "days");
        }

        return dateArray;
      }
    },
    goback() {
      this.$router.go(-1);
    },
    nextgrp() {
      console.log(this.streak);
      for (var i = 0; i < this.streak.length; i++) {
        this.chartData2.push([i.toString(), this.streak[i]]);
      }
    }
  },
  compute() {
    console.log(this.date);
    if (this.date.length != dl) {
      this.update();
    }
  },
  mounted() {
    this.getListData();
  },
  created() {
    let ref = db.collection("habits");

    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.habit = user.data();
        this.habit.pId = user.id;
      });
  }
};
</script>
<style>
.zoom:hover {
  -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari 3-8 */
  transform: scale(1.3);
}
@media screen and (min-width: 600px) {
  .product-details {
    margin-left: 50px;
  }
  .product {
    margin-top: 5px;
  }
}

@media screen and (max-width: 600px) {
  .product-details {
  }
  .product {
  }
}
.product {
  margin-top: 20px;
}
.rating_stars {
  display: inline;
}
.product-name {
  padding-top: 5vmin;
  padding-bottom: 0.1em;
  font-family: "Rubik", cursive;
  height: 60px;
}
.product-name1 {
  padding-top: 5vmin;
  padding-bottom: 0.1em;
  font-family: "Rubik", cursive;
}
.loader_space {
  position: relative;
  height: 300px;
}
.section_display {
  margin-top: 60px;
}
.loader {
  position: absolute;

  left: 50%;
  margin-left: -50px;
}
@media screen and (min-width: 600px) {
  .product {
    margin: 30px 20px;
  }
}
</style>