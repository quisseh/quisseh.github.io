window.onload = function () {
    var from = new Date();
    var to = new Date(2018, 5, 1);
    document.getElementById("current-year").innerHTML = "-"
        + from.getFullYear();
    document.getElementById("currently").innerHTML = '<small>'
        + Math.floor(Math.round(Math.max((to.getTime() - new Date(from.setHours(0, 0,
                    0, 0)).getTime())
                / (24 * 60 * 60 * 1000), 0)) / 7) + '</small>';
}
