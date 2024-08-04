$slickSolution = false;
var $win = $(window);
$win.load(function () {
    $('.ba-slider').beforeAfter();
})
function solSlider(){
    if($win.innerWidth() < 991){
        if(!$slickSolution){
            $(".b-features").slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
            });
            $(".b-reviews").slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            });

            $slickSolution = true;
        }
    } else if($win.innerWidth() >= 991){
        if($slickSolution){
            $('.b-features, .b-reviews').slick('unslick');
            $slickSolution = false;
        }
    }
}
function f_var(){
    $('.b-variant:not(.var-last)').not($(this)).removeClass("current")
    $(this).toggleClass("current");

}


$(function() {


    solSlider();
    $win.on('resize', function(){
        solSlider();
    });
    $('.b-variant:not(.var-last)').on('click', f_var);
    if ($win.width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });

    }
    $("a.btn").click(function(e){
        e.preventDefault();
        $(".b-overlay, .form-popup").show();
        $("body").addClass("b-overflow");
    });
    $(".b-overlay").click(function(){
        $(".b-overlay, .form-popup").hide();
        $("body").removeClass("b-overflow");
    });
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $win.height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };



});