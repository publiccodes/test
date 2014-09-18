$(function () {
    var canvas = document.getElementById("image_panel");
    if (typeof G_vmlCanvasManager != "undefined") {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    if (!canvas || !canvas.getContext) { return false; }
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "Content/Images/images.gif";
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 600, 500, 0, 0, 600, 500);
    }
    canvas.width = 600;
    canvas.height = 500;
    events(ctx, img);
});

function events(ctx, img) {
    // -------------------------------------------------------
    // game_play_button
    $("#game_play_button").hover(function () {
        ctx.drawImage(img, 0, 1000, 600, 500, 0, 0, 600, 500);
    }, function () {
        ctx.drawImage(img, 0, 0, 600, 500, 0, 0, 600, 500);
    });

    // -------------------------------------------------------
    // sound_stop_button
    $("#sound_stop_button").hover(function () {
        ctx.drawImage(img, 0, 500, 600, 500, 0, 0, 600, 500);
    }, function () {
        ctx.drawImage(img, 0, 0, 600, 500, 0, 0, 600, 500);
    });
}