<template>
  <main v-if="ready">
    <h3 class="flights-heading">Flights to {{ name }}</h3>
    <section class="flights-all">
      <router-link
        v-for="(flight, index) in sortedFlights"
        :key="index"
        :to="`/flights/${flight.id}`"
        class="flight"
        :style="{
          border: `2px solid ${themeColor}`,
          animation: `flight-appear ${200 * (index / 2 + 1)}ms`,
        }"
      >
        <div class="flight-info">
          <h5>From:</h5>
          <h4 class="flight-from">{{ flight.from }}</h4>
          <span class="flight-date" :style="{ color: themeColor }">{{
            parseDating(flight.departure)
          }}</span>
          <span class="seats">{{ flight.seatsAvailable }} seats left</span>
        </div>
        <div class="flight-price">
          <div class="flight-price-content">
            ${{ parsePrice(flight.ticketPrice) }}
          </div>
          <div class="class-marker-container">
            <div
              class="class-marker"
              :style="{
                backgroundColor:
                  flight.category === 'Economy' ? '#4141c9' : '#267826',
              }"
            >
              {{ flight.category }}
            </div>
          </div>
        </div>
      </router-link>
    </section>
  </main>
</template>

<script>
import "./animations.css";
export default {
  name: "Flights",
  props: {
    planetID: String,
  },
  data() {
    return {
      name: "",
      themeColor: "var(--themeColor)",
      ready: false,
      flights: [],
    };
  },
  methods: {
    parsePrice: (price = 0.0) => {
      let str = price.toString();
      let returnedString = "",
        counter = 0;
      for (let i = str.length - 1; i > -1; i--) {
        if (str[i] === ".") {
          counter = 0;
        } else if (counter === 3) {
          (returnedString = "," + returnedString), (counter = 1);
        } else {
          counter++;
        }
        returnedString = str[i] + returnedString;
      }
      return returnedString;
    },
    parseDating(
      timeObj = {
        time: {
          hours: 0,
          min: 0,
        },
        day: 1,
        month: "November",
        year: 2000,
      }
    ) {
      return (
        timeObj.time.hours +
        ":" +
        (parseInt(timeObj.time.min / 10) < 1 ? "0" : "") +
        timeObj.time.min +
        " on " +
        timeObj.day +
        (timeObj.day % 10 === 3 && parseInt(timeObj.day / 10) !== 1
          ? "rd"
          : timeObj.day % 10 === 2 && parseInt(timeObj.day / 10) !== 1
          ? "nd"
          : timeObj.day % 10 === 2 && parseInt(timeObj.day / 10) !== 1
          ? "st"
          : "th") +
        ", " +
        timeObj.month +
        ", " +
        timeObj.year
      );
    },
    sortFlightsbyDate(
      flights = [
        {
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
          category: "",
          ticketPrice: 0.0,
        },
      ]
    ) {
      for (let i = 0; i < flights.length; i++) {
        switch (flights[i].departure.month) {
          case "January":
            flights[i].monthofDeparture = 1;
            break;
          case "February":
            flights[i].monthofDeparture = 2;
            break;
          case "March":
            flights[i].monthofDeparture = 3;
            break;
          case "April":
            flights[i].monthofDeparture = 4;
            break;
          case "May":
            flights[i].monthofDeparture = 5;
            break;
          case "June":
            flights[i].monthofDeparture = 6;
            break;
          case "July":
            flights[i].monthofDeparture = 7;
            break;
          case "August":
            flights[i].monthofDeparture = 8;
            break;
          case "September":
            flights[i].monthofDeparture = 9;
            break;
          case "October":
            flights[i].monthofDeparture = 10;
            break;
          case "November":
            flights[i].monthofDeparture = 11;
            break;
          case "December":
            flights[i].monthofDeparture = 12;
            break;
          default:
            flights[i].monthofDeparture = 0;
            break;
        }
      }
      return flights
        .sort((a, b) => {
          return a.departure.day - b.departure.day;
        })
        .sort((a, b) => {
          return a.monthofDeparture - b.monthofDeparture;
        })
        .sort((a, b) => {
          return a.departure.year - b.departure.year;
        });
    },
  },
  created() {
    fetch(`/api/destinations/${this.planetID}`)
      .then((res) => res.json())
      .then((data) => {
        this.flights = data.flights;
        this.sortedFlights = this.sortFlightsbyDate(data.flights);
        this.name = data.name;
        this.themeColor = data.themeColor;
        document.title = `${data.name} - Flights`;
        this.ready = true;
      });
  },
};
</script>

<style lang="css" scoped>
main {
  width: 94%;
  padding: 0 3%;
}
.flights-heading {
  text-align: center;
}
.flights-all {
  margin-bottom: 40px;
}
.flight {
  display: flex;
  height: 150px;
  width: 94%;
  margin-bottom: 10px;
  padding: 0 3%;
  border: 2px solid var(--themeColor);
  border-radius: 10px;
  color: white;
  text-decoration: none;
}
.flight-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.flight-info > h5 {
  margin: 0;
  margin-bottom: 10px;
}
.flight-from {
  margin: 0;
  font-size: 14pt;
}
.flight-date {
  margin-top: 7px;
}
.flight-date,
.seats {
  font-size: 10pt;
  color: grey;
}
.flight-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  padding-left: 3%;
  height: 100%;
  font-size: 14pt;
}
.class-marker-container {
  height: 0;
  width: fit-content;
  margin-bottom: auto;
}
.class-marker {
  flex-wrap: no-wrap;
  padding: 2px 5px;
  white-space: nowrap;
  font-size: 9pt;
  border-radius: 5px;
}
.flight-price-content {
  margin: auto 0;
}
</style>
