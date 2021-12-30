/**
 * Rewrite Ticket prices with commas.
 */
export const priceToString = (price = 0.0) => {
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
};

/**
 * Takes parts of a time stamp and converts it to a string.
 * @param {number} hours The hours given.
 * @param {number} mins The minutes given.
 * @returns string in the 24h format hh:mm.
 */
export const timeToString = (hours = 0, mins = 0) => {
  return hours.toString() + ":" + (mins / 10 < 1 ? "0" : "") + mins.toString();
};

/**
 * Takes parts of a date stamp and converts it to a string.
 * @param {number} day The day given.
 * @param {string} month The name of the month of the year.
 * @param {number} year The year given.
 * @returns string in the format d MMM, YYYY.
 */
export const dateToString = (day = 0, month = "", year = 2000) => {
  return (
    day.toString() +
    (day % 10 === 3 && parseInt(day / 10) !== 1
      ? "rd"
      : day % 10 === 2 && parseInt(day / 10) !== 1
      ? "nd"
      : day % 10 === 2 && parseInt(day / 10) !== 1
      ? "st"
      : "th") +
    " " +
    month.slice(0, 3) +
    ", " +
    year.toString()
  );
};
