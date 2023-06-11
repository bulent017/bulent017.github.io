var navLinks = document.getElementById("navLinks"); //navigation için
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


/*

$(document).ready(function() {  // bu kısımda Autocomplete widgetini , ülke adlarını API ile almaya çalıştım fakat çalışmadı
  $("#country").autocomplete({
      source: function(request, response) {
          $.ajax({
              url: "https://api.openweathermap.org/data/2.5/find",
              method: "GET",
              dataType: "json",
              data: {
                  q: request.term,
                  type: "like",
                  sort: "population",
                  cnt: 5, // İstenen şehir sayısı
                  appid: "bcf9259dbb2fa5b3f13ff4c4128901b2" // OpenWeatherMap API anahtarı
              },
              success: function(data) {
                console.log("AJAX isteği başarılı bir şekilde tamamlandı");
                  var cities = [];
                  $.each(data.list, function(index, item) {
                      cities.push(item.name + ", " + item.sys.country);
                  });
                  response(cities);
              }
          });
      }
  });
});
*/

// hava durumunu çekme işlemini AJAX kullanarak yaptık.

const apiKey = '6e3870f76d3238f42f8b0a1191e4b833';

const lat = '39.979691';
const lon = '32.822800';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

let xhr = new XMLHttpRequest();

xhr.open('GET', apiUrl);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    let response = JSON.parse(xhr.responseText);
    
    let weatherInfo = response.weather[0].main;

    let iconCode = response.weather[0].icon;

    let temperatureInfo = response.main.temp;
    
    document.getElementById('weather-info').textContent = weatherInfo;

    let imgURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById('weather-icon').src = imgURL;

    document.getElementById('location-info').textContent = temperatureInfo + "°C";
  }
}


//index.html sayfasında Course bölümünün altında  paragrafları txt dosyasundan AJAX kullanarak çektik.

let course1 = new XMLHttpRequest();
course1.open("GET", "course1.txt");
course1.onreadystatechange = function() {
    if(course1.readyState == 4 && course1.status == 200) {
        document.getElementById("para1").innerHTML = course1.responseText;
    }
}
course1.send();

let course2 = new XMLHttpRequest();
course2.open("GET", "course2.txt");
course2.onreadystatechange = function() {
    if(course2.readyState == 4 && course2.status == 200) {
        document.getElementById("para2").innerHTML = course2.responseText;
    }
}
course2.send();

let course3 = new XMLHttpRequest();
course3.open("GET", "course3.txt");
course3.onreadystatechange = function() {
    if(course3.readyState == 4 && course3.status == 200) {
        document.getElementById("para3").innerHTML = course3.responseText;
    }
}
course3.send();







