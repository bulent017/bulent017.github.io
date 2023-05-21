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






