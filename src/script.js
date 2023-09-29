setInterval(function () {
  let newYorkElement = document.querySelector("#newYork");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/Moncton");
  newYorkDateElement.innerHTML = newYorkTime.format("dddd, Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd, Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd, Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);
