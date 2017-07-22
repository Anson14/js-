function draw() {
    var canvas = document.getElementById("draw-in-me");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.moveTo(120.0,32.0);
        ctx.bezierCurveTo()
    }
}
