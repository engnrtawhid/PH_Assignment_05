// get the  ID
const mainDay = document.getElementById('main-day');
const mainDate = document.getElementById('main-date');

// setup the date and formate
const date = new Date();
const options = {
  weekday: "long",
};
const options2 = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

// update the values
const formattedWeekday = date.toLocaleDateString("en-US", options);
const formattedDate = date.toLocaleDateString("en-US", options2);

// update the DOM
mainDay.innerText = formattedWeekday;
mainDate.innerText = formattedDate;