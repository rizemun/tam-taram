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


$(document).ready(function () {
    let slickLoaded = false;
    $(window).resize(function () {
        slick();
    });

    slick();

    function slick() {
        if (screen.width < 768) {
            slickLoaded = false;
            return;
        }
        if (slickLoaded) {
            return;
        }

        slickLoaded = true;
        let prevArrow = '<svg class="videos__button videos__button_next"><use xlink:href="img/svg/ico_dropdown.svg#Layer_1"></svg>';
        let nextArrow = '<svg class="videos__button videos__button_prev"><use xlink:href="img/svg/ico_dropdown.svg#Layer_1"></svg>';
        if (screen.width >= 768) {
            $('.videos__slick').slick({
                arrows: true,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: prevArrow,
                prevArrow: nextArrow,

                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            infinite: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 390,
                        settings: "unslick"
                    }
                ]
            });
        }
    };

    $('.videos__more').on('click', function (e) {
        this.style.height = 0;
        const className = "videos__mobile-hidden";
        const parent = $(this).parent();
        const videos = parent.children()[1].children;

        [].forEach.call(videos, function (video) {
            const $video = $(video);
            if ($video.hasClass(className)) {
                $video.removeClass(className);
            }
        });
    });

});

