<template>
  <div
    ref="filterpage"
    :style="{ transform: `translateY(${open ? '0%' : '110%'})` }"
    class="filter-page"
  >
    <div class="x">
      <button @click="close">Close</button>
    </div>
    <form ref="form" @submit="handleSubmit">
      <label for="sorting" class="sort-flight-heading">Sort By</label>
      <select
        v-model="sortFlightsBy"
        name="sort-types"
        id="sort-flight"
        class="sort-types"
      >
        <option value="Earliest">Earliest</option>
        <option value="Price (Lowest to Highest)">
          Price (Lowest to Highest)
        </option>
        <option value="Seats Available">Seats Available</option>
      </select>
      <br />
      <label for="sorting">Country</label>
      <select
        v-model="countrySelected"
        name="country"
        id="filter-country"
        class="sort-types"
      >
        <option value="All">All</option>
        <option
          v-for="(country, index) in countries"
          :value="country"
          :key="index"
        >
          {{ country }}
        </option>
      </select>
      <h4 for="price-range" class="price-range-heading">Price Range</h4>
      <div class="price-range">
        <input
          v-model="lowerPriceLimit"
          type="number"
          class="price-limit lowest-price"
          :placeholder="priceBoundaries.lowestPrice"
        />
        <hr />
        <input
          v-model="upperPriceLimit"
          type="number"
          class="price-limit highest-price"
          :placeholder="priceBoundaries.highestPrice"
        />
      </div>
      <h4 for="Category" class="heading">Category</h4>
      <div class="radio-option" id="first-class-radio">
        <label for="First Class"></label>First Class
        <input
          type="radio"
          v-model="category"
          name="category"
          id="category"
          value="First Class"
        />
        <br />
      </div>
      <div class="radio-option" id="economy-radio">
        <label for="Economy"></label>Economy
        <input
          type="radio"
          v-model="category"
          name="category"
          id="category"
          value="Economy"
        />
      </div>
      <div class="action-space">
        <button @click="clearAllFilters" class="clear-btn">Clear</button>
        <input type="submit" :style="{ color: secColor }" value="Apply" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  props: {
    open: Boolean,
    color: {
      type: String,
      default: "var(--themeColor)",
    },
    secColor: {
      type: String,
      default: "black",
    },
    countries: Array,
    priceBoundaries: Object,
  },
  data() {
    return {
      sortFlightsBy: "",
      countrySelected: "",
      lowerPriceLimit: 0,
      upperPriceLimit: 0,
      category: "",
      filterParams: {},
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("apply", this.setAllParams());
    },
    setAllParams() {
      this.filterParams = {
        sortFlightsBy: this.sortFlightsBy,
        countrySelected: this.countrySelected,
        lowerPriceLimit: this.lowerPriceLimit,
        upperPriceLimit: this.upperPriceLimit,
        category: this.category,
      };
      return this.filterParams;
    },
    clearAllFilters() {
      this.sortFlightsBy = "";
      this.countrySelected = "";
      this.lowerPriceLimit = 0;
      this.upperPriceLimit = 0;
      this.category = "";
      this.filterParams = {};
      this.$emit("clear-filters");
    },
  },
  mounted() {
    this.$refs.filterpage.style.setProperty("--thColor", this.color);
  },
};
</script>

<style scoped>
.filter-page {
  --thColor: var(--themeColor);
  position: fixed;
  bottom: 0;
  z-index: 4;
  height: fit-content;
  width: 94%;
  padding: 5% 4% 3% 4%;
  box-shadow: 0 0 8px 0 var(--thColor);
  background: black;
  transition-duration: 300ms;
}
.x {
  width: 97%;
  margin: 0;
  padding-right: 3%;
  text-align: end;
}
.x > button {
  width: fit-content;
  padding: 0;
  font-size: 12pt;
  background: transparent;
  color: var(--thColor);
}
.sort-flight-heading {
  margin-top: 10px;
}
label {
  display: block;
  margin-bottom: 3px;
}
.sort-types {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 1.5%;
  font-size: 12pt;
  background-color: #000;
  color: white;
  border-radius: 10px;
  border: 2px solid var(--thColor);
}
option {
  height: 20px;
}
.price-range {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}
.price-range-heading {
  margin-top: 0;
}
.price-limit {
  height: 37px;
  width: 50px;
  padding-left: 2%;
  background-color: black;
  color: white;
  border: 2px solid var(--thColor);
  border-radius: 8px;
}
.price-range > hr {
  width: 50%;
  margin: 0;
  background-color: var(--thColor);
}
.radio-option {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
.radio-option > input {
  height: 0;
  margin-left: auto;
}
.radio-option > input::after {
  display: inline-block;
  content: "";
  height: 13px;
  width: 13px;
  border: 2px solid white;
  border-radius: 50%;
}
.radio-option > input:checked::after {
  display: inline-block;
  content: "";
  height: 13px;
  width: 13px;
  background-color: var(--thColor);
  border: 2px solid white;
  border-radius: 50%;
}
.action-space {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.clear-btn {
  margin-bottom: 10px;
  background-color: black;
  color: white;
  border: 2px solid var(--thColor);
}
button,
input[type="submit"] {
  height: 40px;
  width: 150px;
  border: none;
  background: var(--thColor);
  border-radius: 10px;
  cursor: pointer;
}
</style>
