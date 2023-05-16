$(document).ready(function() {
    $("#bday").datepicker();
});
var codingLanguages = ["Python", "Java", "C#", "JavaScript"];

$(document).ready(function() {
    $("#bday").datepicker();
    $("#programmingKnowledge").autocomplete({
        source: codingLanguages
    });
});
