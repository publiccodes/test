var _isMute = false;

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
    var x = 0, y = 0;
    // -------------------------------------------------------
    // game_play_button
    $("#game_play_button").click(function () {
        playSound("click_sound");
        alert("準備中です");
    });
    $("#game_play_button").mouseover(function () {
        playSound("hover_sound");
    });
    $("#game_play_button").hover(function () {
        if (_isMute) {
            x = 0; y = 1500;
        } else {
            x = 0; y = 1000;
        }
        ctx.drawImage(img, x, y, 600, 500, 0, 0, 600, 500);
    }, function () {
        if (_isMute) {
            x = 0; y = 500;
        } else {
            x = 0; y = 0;
        }
        ctx.drawImage(img, x, y, 600, 500, 0, 0, 600, 500);
    });

    // -------------------------------------------------------
    // sound_stop_button
    $("#sound_stop_button").click(function () {
        if (!_isMute) {
            pauseBgm();
        } else {
            playBgm();
        }
        playSound("click_sound");
    });
    $("#sound_stop_button").hover(function () {
        x = 0;
        y = 500;
        playSound("hover_sound");
        ctx.drawImage(img, x, y, 600, 500, 0, 0, 600, 500);
    }, function () {
        if (_isMute) {
            x = 0; y = 500;
        } else {
            x = 0; y = 0;
        }
        ctx.drawImage(img, x, y, 600, 500, 0, 0, 600, 500);
    });
}

/* ---------------------------------------------------
 * 共通部分
 */
function playSound(id) {
    if (!_isMute) {
        document.getElementById(id).load();
        document.getElementById(id).play();
    }
}
function pauseBgm() {
    document.getElementById("main_bgm").pause();
    _isMute = true;
}

function playBgm() {
    document.getElementById("main_bgm").play();
    _isMute = false;
}