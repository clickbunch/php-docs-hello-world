let data = [
    { town: "Mexico", title: "Isidora Mendoza", content: "Ordenó exitosamente 4 productos", time: "Hace 1 minuto" },
    { town: "Acapulco", title: "Esperanza Vega", content: "Pedido realizado con éxito", time: "Hace 5 minutos" },
    
];
function getRandomInt(t, n) {
    return (t = Math.ceil(t)), (n = Math.floor(n)), Math.floor(Math.random() * (n - t + 1)) + t;
}
function showNotify(t) {
    let n = getRandomInt(0, data.length - 1),
        e = data[n];
    (t.querySelector(".popup-title").innerHTML = e.title),
        (t.querySelector(".popup-town").innerHTML = e.town),
        (t.querySelector(".popup-time").innerHTML = e.time),
        (t.querySelector(".popup-prod").innerHTML = e.content),
        (t.style.opacity = "1"),
        (t.style.bottom = "10px"),
        setTimeout(function () {
            (t.style.opacity = "0"), (t.style.bottom = "-162px");
        }, 4500);
}
document.addEventListener("DOMContentLoaded", function () {
    let t = document.getElementById("popup");
    setInterval(function () {
        showNotify(t);
    }, 1e4);
});
