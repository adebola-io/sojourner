<template>
  <main
    ref="flightpage"
    v-if="ready"
    :style="{
      '--thColor': this.themeColor,
      '--scColor': this.secColor,
    }"
  >
    <section class="price">
      <h6>Ticket Price</h6>
      ${{ stringifyPrice(flight.ticketPrice) }}
    </section>
    <section class="details">
      <h1 class="heading">
        <span>Earth</span>
        <hr />
        <span>{{ name }}</span>
      </h1>
      <div class="pair departure-arrival-time">
        <span class="pair-x">{{
          stringifyTime(flight.departure.time.hours, flight.departure.time.mins)
        }}</span>
        <span class="pair-y">{{
          stringifyTime(flight.arrival.time.hours, flight.arrival.time.min)
        }}</span>
      </div>
      <div class="pair departure-arrival-date">
        <span class="pair-x">{{
          stringifyDate(
            flight.departure.day,
            flight.departure.month,
            flight.departure.year
          )
        }}</span>
        <span class="pair-y">{{
          stringifyDate(
            flight.arrival.day,
            flight.arrival.month,
            flight.arrival.year
          )
        }}</span>
      </div>
      <div class="pair source-destination">
        <span class="pair-x">{{ flight.from }}</span>
        <span class="pair-y">{{ flight.to }}</span>
      </div>
      <hr />
      <div class="kv-pair seatsAvail">
        <label for="seats">Seats Left: </label>
        <span name="seats">{{ flight.seatsAvailable }}</span>
      </div>
      <div class="kv-pair carrier-space">
        <label for="carrier">Carrier: </label>
        <span name="carrier">{{ flight.carrier }}</span>
      </div>
      <div class="kv-pair category">
        <label for="category">Category: </label>
        <span name="category">{{ flight.category }}</span>
      </div>
    </section>
    <div class="btn-space">
      <router-link to="/error" class="book-btn">Book Flight</router-link>
    </div>
  </main>
</template>

<script>
import { priceToString } from "../../utils";
import { timeToString } from "../../utils";
import { dateToString } from "../../utils";
import "./animations.css";
export default {
  name: "Flight",
  props: {
    planetID: String,
    flightID: String,
  },
  data() {
    return {
      flight: {
        id: 0,
        from: "",
        city: "",
        country: "",
        to: "",
        carrier: "",
        seatsAvailable: 0,
        departure: {
          time: {
            hours: 0,
            min: 0,
          },
          day: 1,
          month: "January",
          year: 2000,
        },
        arrival: {
          time: {
            hours: 0,
            min: 0,
          },
          day: 0,
          month: "January",
          year: 2000,
        },
        durationInMonths: 0,
        category: "Economy",
        ticketPrice: 0.0,
      },
      name: "",
      background: "",
      height: window.innerHeight - 50,
      themeColor: "var(--themeColor)",
      secColor: "black",
      ready: false,
    };
  },
  methods: {
    stringifyPrice: function (price) {
      return priceToString(price);
    },
    stringifyTime: function (hours, mins) {
      return timeToString(hours, mins);
    },
    stringifyDate: function (day, month, year) {
      return dateToString(day, month, year);
    },
  },
  created() {
    fetch(`/api/destinations/${this.planetID}`)
      .then((res) => res.json())
      .then((data) => {
        this.name = data.name;
        this.flight = data.flights.filter((flight) => {
          return flight.id === parseInt(this.flightID);
        })[0];
        this.background = data.background;
        this.themeColor = data.themeColor;
        this.secColor = data.secColor;
        this.ready = true;
      });
  },
};
</script>

<style scoped>
main {
  --thColor: var(--themeColor);
  --scColor: black;
  animation: single-flight-page 600ms;
}
.flight-overlay {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4) blur(2px);
  animation: flight-page-bg 300ms;
}
.price {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  white-space: nowrap;
  font-size: 30pt;
}
.price > h6 {
  margin: 0;
  margin-bottom: 10px;
  color: var(--thColor);
}
.price > p {
  margin: 0;
  font-size: 11pt;
  color: #9c9c9c;
}
.details > h1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  padding: 0 3%;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20pt;
  color: var(--thColor);
}
hr {
  width: 94%;
  margin: 30px 3% 0 3%;
  background-color: var(--thColor);
}
.heading > hr {
  width: 100%;
  margin: 0 4%;
}
.pair,
.kv-pair {
  display: flex;
  justify-content: space-between;
  width: 94%;
  padding: 0 3%;
  margin-bottom: 15px;
  font-size: 11pt;
}
.pair-y {
  justify-content: flex-end;
  text-align: end;
}
.source-destination > span {
  display: flex;
  width: 40%;
}
.seatsAvail {
  margin-top: 35px;
}
.kv-pair > label {
  font-style: italic;
  color: var(--thColor);
}
.book-btn {
  margin-top: 15px;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  color: var(--scColor);
  font-weight: bold;
  font-size: 13pt;
  font-family: inherit;
  text-decoration: none;
  background-color: var(--thColor);
}
.btn-space {
  display: flex;
  justify-content: center;
  width: 94%;
  padding: 0 3%;
  margin-bottom: 45px;
}
</style>
