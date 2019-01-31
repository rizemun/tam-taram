/*$(document).ready(function () {
        let params = {
            'id': 'KD7A16-v9b0',
            "part": 'snippet',
            "type": 'video',
            "key": 'AIzaSyDiaw_MaLTdUJ1d3M64ClGetDlLQWC8B-U'
        };
        let url = 'https://www.googleapis.com/youtube/v3/search';
        $.getJSON(url,params,function(c){
            c.items.forEach(item => {
                console.log(item.snippet.thumbnails.default.url)
            });



        })


    }
);
*/




$(document).ready(function() {

    $('.videos__content').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<svg class="videos__button videos__button_next"><use xlink:href="img/svg/ico_dropdown.svg#Layer_1"></svg>',
        prevArrow: '<svg class="videos__button videos__button_prev videos__button_inactive"><use xlink:href="img/svg/ico_dropdown.svg#Layer_1"></svg>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
