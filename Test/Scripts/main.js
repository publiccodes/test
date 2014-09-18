$(function () {
    var canvas = document.getElementById('c1');
    if (!canvas || !canvas.getContext) { return false; }
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = "Content/Images/images.gif";
    img.onload = function () {
        ctx.drawImage(img, 5400, 0, 600, 500, 0, 0, 600, 500);
    }
    canvas.width = 600;
    canvas.height = 500;

    $(canvas).mousemove(function (e) {
        var x = e.pageX - $(this).offset().left;
        //Debug.writeln(x);
        if (x > 500) {
            ctx.drawImage(img, 0, 500, 600, 500, 0, 0, 600, 500);
            document.body.style.cursor = "pointer";
        } else if (x > 400) {
            ctx.drawImage(img, 0, 1000, 600, 500, 0, 0, 600, 500);
            document.body.style.cursor = "move";
        } else if (x > 300) {
            ctx.drawImage(img, 0, 1500, 600, 500, 0, 0, 600, 500);
            document.body.style.cursor = "wait";
        } else if (x > 200) {
            ctx.drawImage(img, 5400, 500, 600, 500, 0, 0, 600, 500);
        } else if (x > 100) {
            ctx.drawImage(img, 5400, 1000, 600, 500, 0, 0, 600, 500);
        } else if (x > 0) {
            ctx.drawImage(img, 5400, 1500, 600, 500, 0, 0, 600, 500);
        }
    });
    $(canvas).mouseout(function () {
        ctx.drawImage(img, 0, 0, 600, 500, 0, 0, 600, 500);
        document.body.style.cursor = "auto";
    });
});
