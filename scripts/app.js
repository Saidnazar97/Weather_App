$(document).ready(function () {
  var inputText = "";
  $("#submitbtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#listSearch").val();
    $("#listSearch").val("");
    console.log(inputText);
    $(".container").prepend(`<p>${inputText}</p>`);

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?zip=${inputText}&appid=c1dc5cf44c3a5ebaadb89b904175bcca`,
      dataType: "json",
    }).then(function (response) {
      console.log(response.main.temp);
      var cityName = response.name;
      var temp = response.main.temp;
      var tempC = temp - 273.15;
      var tempF = 1.8 * tempC + 32;
      var tempC2 = tempC.toFixed(2);
      var tempF2 = tempF.toFixed(2);

      $("body").prepend(`<div>city name: ${cityName}</div>`)
      $("body").prepend(`<div>temperature in celcius: ${tempC2} °C</div>`)
      $("body").prepend(`<div>temperature in F: ${tempF2} °F</div>`)

    });
  });
});
// /Filter list

$(document).ready(function () {
  $("#listSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});