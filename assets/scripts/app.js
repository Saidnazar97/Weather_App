$(document).ready(function () {


  $("#submitbtn").on("click", function (e) {
    e.preventDefault();
    var city = "";
    city = $("#city").val();

    if (city != ``) {

    } else {
      $("#error").html(`Field can not be empty`);
    }

    console.log(city);
    $("#city").val("");
    var key = moment().format("MM/DD/YY");
    localStorage.setItem(key, city);

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1dc5cf44c3a5ebaadb89b904175bcca`,
      dataType: "JSON",
    }).then(function (response) {
      console.log(response.main.temp);
      var cityName = response.name;

      var temp = response.main.temp;
      var tempC = temp - 273.15;
      var tempF = 1.8 * tempC + 32;
      var tempC2 = tempC.toFixed(2);
      var tempF2 = tempF.toFixed(2);

      $(".body2").append(`<h3><strong>${cityName}(${key})</strong></h3> <br/>`)
      // $(".body2").append(`<div>Temperature in celcius: ${tempC2} °C</div>`)
      $(".body2").append(`<div><h5 class="text-muted">Temperature: ${tempF2} °F</h5></div> <br/>`)
      $(".body2").append(`<div><h5 class="text-muted">Humidity: ${response.main.humidity}% </h5></div><br/>`)
      $(".body2").append(`<div><h5 class="text-muted">Wind Speed: ${response.wind.speed}MPH </h5></div><br/>`)
      $(".body2").append(`<div><h5 class="text-muted">UV Index: ${response}</h5></div>`)
    });
  });
});
// // /Filter list

$(document).ready(function () {
  $("#city").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function getWeather(cityName) {
  console.log("cityName=" + cityName);

  //Basic ajax request
  var today = moment().format("MM/DD/YYYY");
  var today1 = moment(today).add(1, "days").format("MM/DD/YYYY");
  var today2 = moment(today).add(2, "days").format("MM/DD/YYYY");
  var today3 = moment(today).add(3, "days").format("MM/DD/YYYY");
  var today4 = moment(today).add(4, "days").format("MM/DD/YYYY");
  var today5 = moment(today).add(5, "days").format("MM/DD/YYYY");
  //var cityName = "";

  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${c1dc5cf44c3a5ebaadb89b904175bcca}${units}`,
    datatype: "JSON",
  }).then(function (response) {
    console.log(response);
    lat = response.coord.lat;
    lon = response.coord.lon;
    // API call to get UV index requires lat & lon
    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely${c1dc5cf44c3a5ebaadb89b904175bcca}${units}`,
      datatype: "JSON",
    }).then(function (res) {
      console.log(res);
      cityName = response.name;
      var icon0 = res.daily[0].weather[0].icon;
      var temp0 = res.daily[0].temp.day;
      var hum0 = res.daily[0].humidity;
      var wind0 = res.daily[0].wind_speed;
      var uv0 = res.daily[0].uvi;
      var icon1 = res.daily[1].weather[0].icon;
      var temp1 = res.daily[1].temp.day;
      var hum1 = res.daily[1].humidity;
      var icon2 = res.daily[2].weather[0].icon;
      var temp2 = res.daily[2].temp.day;
      var hum2 = res.daily[2].humidity;
      console.log(hum2);
      var icon3 = res.daily[3].weather[0].icon;
      var temp3 = res.daily[3].temp.day;
      var hum3 = res.daily[3].humidity;
      var icon4 = res.daily[4].weather[0].icon;
      var temp4 = res.daily[4].temp.day;
      var hum4 = res.daily[4].humidity;
      var icon5 = res.daily[5].weather[0].icon;
      var temp5 = res.daily[5].temp.day;
      var hum5 = res.daily[5].humidity;
      console.log([temp1, temp2, temp3, temp4, temp5]);
      $("#daily").empty();
      $("#daily").append(
        `<h3>${cityName} (${today})</h3><img src=http://openweathermap.org/img/w/${icon0}.png />`
      );
      $("#daily").append(`<p>Temperature: ${temp0}&#8457;</p>`);
      $("#daily").append(`<p>Humidity: ${hum0}%</p>`);
      $("#daily").append(`<p>Wind Speed: ${wind0} MPH</p>`);
      $("#daily").append(`<p>UV Index: ${uv0} </p>`);
      $("#fiveDay").html(`<h4>5-Day Forecast:</h4>`);
      $("#forecast1").empty();
      $("#forecast2").empty();
      $("#forecast3").empty();
      $("#forecast4").empty();
      $("#forecast5").empty();
      $("#forecast1").append(`<h5>${today1}</h5>`);
      $("#forecast1").append(
        `<img src=http://openweathermap.org/img/w/${icon1}.png />`
      );
      $("#forecast1").append(`<p>Temp: ${temp1}&#8457;</p>`);
      $("#forecast1").append(`<p>Humidity: ${hum1}%</p>`);
      $("#forecast2").append(`<h5>${today2}</h5>`);
      $("#forecast2").append(
        `<img src=http://openweathermap.org/img/w/${icon2}.png />`
      );
      $("#forecast2").append(`<p>Temp: ${temp2}&#8457;</p>`);
      $("#forecast2").append(`<p>Humidity: ${hum2}%</p>`);
      $("#forecast3").append(`<h5>${today3}</h5>`);
      $("#forecast3").append(
        `<img src=http://openweathermap.org/img/w/${icon3}.png />`
      );
      $("#forecast3").append(`<p>Temp: ${temp3}&#8457;</p>`);
      $("#forecast3").append(`<p>Humidity: ${hum3}%</p>`);
      $("#forecast4").append(`<h5>${today4}</h5>`);
      $("#forecast4").append(
        `<img src=http://openweathermap.org/img/w/${icon4}.png />`
      );
      $("#forecast4").append(`<p>Temp: ${temp4}&#8457;</p>`);
      $("#forecast4").append(`<p>Humidity: ${hum4}%</p>`);
      $("#forecast5").append(`<h5>${today5}</h5>`);
      $("#forecast5").append(
        `<img src=http://openweathermap.org/img/w/${icon5}.png />`
      );
      $("#forecast5").append(`<p>Temp: ${temp5}&#8457;</p>`);
      $("#forecast5").append(`<p>Humidity: ${hum5}%</p>`);
    });
  });
}