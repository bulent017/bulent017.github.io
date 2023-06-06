$(document).ready(function() {
    $('#nav_list a').on('click', function(e) {
        e.preventDefault();

        let title_atr = $(this).attr('title');
        let f_name = `json_files/${title_atr}.json`;


        $.getJSON(f_name, function(data) {
            $('main').empty();

            data.speakers.forEach(speaker => {
                let speakerInfo = `
                    <h1>${speaker.title}</h1>
                    <img src="${speaker.image}" />
                    <h2>${speaker.month}<br>${speaker.speaker}</h2>
                    <p>${speaker.text}</p>
                    //sirayi bu şekilde ver
                `;

                $('main').append(speakerInfo);
            });
        });
    });
});
