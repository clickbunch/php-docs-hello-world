$('a[href*="#b-form"]').not('.ac_footer a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:
            $('#b-form').offset().top
    }, 500);
});

// переменные для слайдера
var b_position_0 = "b-position-0";
var b_position_1 = "b-position-1";
var b_position_2 = "b-position-2";
var b_position_3 = "b-position-3";
var b_position_4 = "b-position-4";
var b_active = "b-active";

// slider
function B_sliders(block, btns) {
    Array.prototype.forEach.call(btns, function (btn) {
        btn.addEventListener('click', function () {
            var b_numb_0 = Number(btn.id) - 1;
            var b_numb_1 = Number(btn.id);
            var b_numb_2 = Number(btn.id) + 1;
            var b_numb_3 = Number(btn.id) + 2;
            var b_numb_4 = Number(btn.id) + 3;

            for (var y = 0; y < block.length; y++) {
                block[y].classList.remove("b-position-0");
                block[y].classList.remove("b-position-1");
                block[y].classList.remove("b-position-2");
                block[y].classList.remove("b-position-3");
                block[y].classList.remove("b-position-4");
                btns[y].classList.remove("b-active");
            }

            function B_addClass2(item, numb, name) {
                var maxLength = item.length - 1;
                if (numb == item.length) {
                    item[0].classList.add(name);
                } else if (numb < 0) {
                    item[maxLength].classList.add(name);
                } else if (numb == (item.length + 1)) {
                    item[1].classList.add(name);
                } else if (numb == (item.length + 2)) {
                    item[2].classList.add(name);
                } else {
                    item[numb].classList.add(name);
                }
            }

            B_addClass2(block, b_numb_0, b_position_0);
            B_addClass2(block, b_numb_1, b_position_1);
            B_addClass2(block, b_numb_2, b_position_2);
            B_addClass2(block, b_numb_3, b_position_3);
            B_addClass2(block, b_numb_4, b_position_4);
            B_addClass2(btns, b_numb_1, b_active);
        });
    })
}

var b_reviewsSlider = document.querySelectorAll('.b-reviews-slider');
var b_reviewsBtn = document.querySelectorAll('.b-btn');

B_sliders(b_reviewsSlider, b_reviewsBtn);


// в лево
function b_sliderLeft(block, btn) {

    function B_addClass(item, name) {
        var b_lenghtClassList = 0;
        var b_maxItem = item.length - 1;
        for (var y = 0; y < item.length; y++) {
            var b_next = y - 1;
            b_lenghtClassList = item[y].classList.length;
            for (var i = 0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
                    if (b_next < 0) {
                        item[b_maxItem].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }
        }
    }
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
    B_addClass(block, b_position_4);
    B_addClass(btn, b_active);
}
// в право
function b_sliderRight(block, btn) {

    function B_addClass(item, name) {
        var b_lenghtClassList = 0;
        for (var y = 0; y < item.length; y++) {
            var b_next = y + 1;
            b_lenghtClassList = item[y].classList.length;
            for (var i = 0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
                    if (b_next > (item.length - 1)) {
                        item[0].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }
        }
    }
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
    B_addClass(block, b_position_4);
    B_addClass(btn, b_active);
}
// нажатие на кнопку в лево/право
var b_btnLeft = document.querySelector('#b-left');
b_btnLeft.addEventListener('click', function () {
    b_sliderLeft(b_reviewsSlider, b_reviewsBtn);
});
var b_btnRight = document.querySelector('#b-right');
b_btnRight.addEventListener('click', function () {
    b_sliderRight(b_reviewsSlider, b_reviewsBtn);
});

// перелистывания пальцем
function B_touchSlider(box, slider, btn) {

    var touchStartX = null; //Точка начала касания
    var touchPositionX = null; //Текущая позиция
    var sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", function (e) { TouchStart(e) }); //Начало касания
    box.addEventListener("touchmove", function (e) { TouchMove(e) }); //Движение пальцем по экрану
    box.addEventListener("touchend", function (e) { TouchEnd(e) }); //Пользователь отпустил экран

    function TouchStart(e) {
        //Получаем текущую позицию касания
        touchStartX = e.changedTouches[0].pageX;
    }

    function TouchMove(e) {
        //Получаем новую позицию
        touchPositionX = e.changedTouches[0].pageX;
    }

    function TouchEnd(e) {
        if (touchPositionX < (touchStartX - sensitivity)) {
            b_sliderRight(slider, btn);
        } else if (touchPositionX > (touchStartX + sensitivity)) {
            b_sliderLeft(slider, btn);
        }
    }

}
// 
var b_reviews = document.querySelector('.b-reviews-boxsliders');
B_touchSlider(b_reviews, b_reviewsSlider, b_reviewsBtn);

// -------------------------
// -------------------------
// сбрасывает позици листьев/еды (для ресайза ширены экрана)
function b_itemResize(layer, startX) {
    for (var i = 0; i < layer.length; i++) {
        layer[i].style.left = '';
        b_windowWidth = screen.width / 2;
        for (var i = 0; i < layer.length; i++) {
            startX[i] = layer[i].offsetLeft;
        }
    }
}
// при изменении ширены окна
window.addEventListener('resize', function (event) {
    b_itemResize(b_layer_1, b_startItemX_1);
    b_itemResize(b_layer_2, b_startItemX_2);
    b_itemResize(b_layer_3, b_startItemX_3);
    b_itemResize(b_layer_4, b_startItemX_4);
});

// собыите движения мыши и движения листьев/еды по слоям

var b_windowWidth = screen.width / 2;
var b_windowHeaght = screen.height / 2;
var b_layer_1 = document.querySelectorAll('.b-layer-1');
var b_layer_2 = document.querySelectorAll('.b-layer-2');
var b_layer_3 = document.querySelectorAll('.b-layer-3');
var b_layer_4 = document.querySelectorAll('.b-layer-4');
var b_mausX = b_windowWidth;
var b_mausY = b_windowHeaght;
// на сколько смешаються
var b_index_1 = 1;
var b_index_2 = 3;
var b_index_3 = 5;
var b_index_4 = 7;
// записываю стартовы позиции вирусов
var b_startItemX_1 = [];
for (var i = 0; i < b_layer_1.length; i++) {
    b_startItemX_1[i] = b_layer_1[i].offsetLeft;
}

var b_startItemX_2 = [];
for (var i = 0; i < b_layer_2.length; i++) {
    b_startItemX_2[i] = b_layer_2[i].offsetLeft;
}

var b_startItemX_3 = [];
for (var i = 0; i < b_layer_3.length; i++) {
    b_startItemX_3[i] = b_layer_3[i].offsetLeft;
}

var b_startItemX_4 = [];
for (var i = 0; i < b_layer_4.length; i++) {
    b_startItemX_4[i] = b_layer_4[i].offsetLeft;
}

// 
function B_layerShift_plusLeft(layer, start, maxindex, index) {
    if (layer[0].offsetLeft <= (start[0] + maxindex)) {
        for (var i = 0; i < layer.length; i++) {
            layer[i].style.left = layer[i].offsetLeft + index + 'px';
        }
    }
}

function B_layerShift_minusLeft(layer, start, maxindex, index) {
    if (layer[0].offsetLeft >= (start[0] - maxindex)) {
        for (var i = 0; i < layer.length; i++) {
            layer[i].style.left = layer[i].offsetLeft - index + 'px';
        }
    }
}
// 
function b_mausEventXY(maxIndex_x1, maxIndex_x2, maxIndex_x3, maxIndex_x4) {
    // maxIndex шаг движения
    // X
    if (event.clientX < b_mausX) {
        b_mausX = event.clientX;
        B_layerShift_minusLeft(b_layer_1, b_startItemX_1, maxIndex_x1, b_index_1);
        B_layerShift_minusLeft(b_layer_2, b_startItemX_2, maxIndex_x2, b_index_2);
        B_layerShift_minusLeft(b_layer_3, b_startItemX_3, maxIndex_x3, b_index_3);
        B_layerShift_minusLeft(b_layer_4, b_startItemX_4, maxIndex_x4, b_index_4);
    } else if (event.clientX > b_mausX) {
        b_mausX = event.clientX;
        B_layerShift_plusLeft(b_layer_1, b_startItemX_1, maxIndex_x1, b_index_1);
        B_layerShift_plusLeft(b_layer_2, b_startItemX_2, maxIndex_x2, b_index_2);
        B_layerShift_plusLeft(b_layer_3, b_startItemX_3, maxIndex_x3, b_index_3);
        B_layerShift_plusLeft(b_layer_4, b_startItemX_4, maxIndex_x4, b_index_4);
    }
    return;
}

window.addEventListener('mousemove', function () {
    if (window.screen.width < 994) {
        b_mausEventXY(3, 6, 9, 12);
    } else {
        b_mausEventXY(10, 30, 50, 70);
    }
});

// прокрутка до secret и его анимация
var b_secret = document.querySelector('.b-secret');
var b_secretItem = document.querySelectorAll('.b-secret-item');
var b_secretScroll = b_secret.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.2);
var b_secretScroll_b = b_secret.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * 0.1);
function B_secretAnim() {

    if ((window.pageYOffset > b_secretScroll) && (window.pageYOffset < b_secretScroll_b)) {
        setTimeout(function () {
            b_secretItem[0].classList.add("scale-in-center1");
            b_secretItem[1].classList.add("scale-in-center2");
        }, 100);
    } else {
        window.addEventListener('scroll', function () {
            if ((window.pageYOffset > b_secretScroll) && (window.pageYOffset < b_secretScroll_b)) {
                setTimeout(function () {
                    b_secretItem[0].classList.add("scale-in-center1");
                    b_secretItem[1].classList.add("scale-in-center2");
                }, 100);
            }
        });
    }
}
B_secretAnim();


// прокрутка до schedule и его анимация
var b_schedule = document.querySelector('.b-schedule-table');
var b_scheduleItem = document.querySelectorAll('.b-schedule-table__item');
var b_scheduleCircle = document.querySelector('.b-schedule-circle').children;
var b_scheduleScroll = b_schedule.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (innerHeight * 0.5);
var b_scheduleScroll_b = b_schedule.getBoundingClientRect().bottom - document.body.getBoundingClientRect().top - (innerHeight * 0.1);
function B_scheduleAnim() {

    if ((window.pageYOffset > b_scheduleScroll) && (window.pageYOffset < b_scheduleScroll_b)) {
        setTimeout(function () {
            b_scheduleItem[0].classList.add("scale-in-center11");
            b_scheduleItem[1].classList.add("scale-in-center22");
            b_scheduleItem[2].classList.add("scale-in-center33");
            b_scheduleItem[3].classList.add("scale-in-center44");

            b_scheduleCircle[0].classList.add("scale-in-center11");
            b_scheduleCircle[1].classList.add("scale-in-center22");
            b_scheduleCircle[2].classList.add("scale-in-center33");
            b_scheduleCircle[3].classList.add("scale-in-center44");
        }, 100);
    } else {
        window.addEventListener('scroll', function () {
            if ((window.pageYOffset > b_scheduleScroll) && (window.pageYOffset < b_scheduleScroll_b)) {
                setTimeout(function () {
                    b_scheduleItem[0].classList.add("scale-in-center11");
                    b_scheduleItem[1].classList.add("scale-in-center22");
                    b_scheduleItem[2].classList.add("scale-in-center33");
                    b_scheduleItem[3].classList.add("scale-in-center44");

                    b_scheduleCircle[0].classList.add("scale-in-center11");
                    b_scheduleCircle[1].classList.add("scale-in-center22");
                    b_scheduleCircle[2].classList.add("scale-in-center33");
                    b_scheduleCircle[3].classList.add("scale-in-center44");
                }, 100);
            }
        });
    }
}
B_scheduleAnim();