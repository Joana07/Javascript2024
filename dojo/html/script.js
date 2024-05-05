function select_type() {
  var dropdown = document.getElementById("type");
  var selectedOption = dropdown.value;
  var tempSpans = document.querySelectorAll(".temperature span");

  tempSpans.forEach(function(span) {
      var currentTemp = parseFloat(span.innerText);

      if (selectedOption === "fahrenheit") {
          var fahrenheitTemp = celsiusToFahrenheit(currentTemp);
          span.innerText = fahrenheitTemp.toFixed(1) + "°F";
      } else {
          var celsiusTemp = fahrenheitToCelsius(currentTemp);
          span.innerText = celsiusTemp.toFixed(1) + "°C";
      }
  });
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


function acceptCookies() {
  var cookieMessage = document.getElementById("cookie-message");
  if (cookieMessage) {
      cookieMessage.style.display = "none";
  }
}



function select(element){
  alert('You Selected: '+ element.textContent);
}