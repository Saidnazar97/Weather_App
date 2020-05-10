$(document).ready(function () {
  var inputText = "";

  $("#submitbtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#listSearch").val();
    $("#listSearch").val("");
    console.log(inputText);
    // $("body").prepend(`<p>${inputText}</p>`);

    $.ajax({
      type: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=c1dc5cf44c3a5ebaadb89b904175bcca`,
      dataType: "JSON",
    }).then(function (response) {
      console.log(response.main.temp);
      var cityName = response.name;

      var temp = response.main.temp;
      var tempC = temp - 273.15;
      var tempF = 1.8 * tempC + 32;
      var tempC2 = tempC.toFixed(2);
      var tempF2 = tempF.toFixed(2);
      var humidity =
        $(".body2").append(`<div><strong>${cityName}</strong></div> </br>`)
      // $(".body2").append(`<div>Temperature in celcius: ${tempC2} °C</div>`)
      $(".body2").append(`<h5 class="text-muted">Temperature: ${tempF2} °F</h5>`)

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