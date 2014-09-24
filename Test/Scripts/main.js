var _context = null;
var _progress = 0;
var _images = new Array();

$(function () {
    $("#ver").text("11");

    var canvas = document.getElementById("image_panel");
    if (!canvas || !canvas.getContext) { return false; }
    _context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 500;

    for (var i = 0; i < 10; i++) {
        var img = new Image();
        img.src = "Content/Images/0" + i + ".gif";
        img.onload = function () {
            setProgress();
        }
        img.onerror = function () {
            alert("ng");
        }
        _images.push(img);
    }
});

function setProgress() {
    $("#progress").text(_progress);
    if (_progress == 10) {
        alert("in");
        setBackgroundImage(1, 1);
    }
}

function setBackgroundImage(column, row) {
    row = row * 500;
    _context.drawImage(_images[column], 0, row, 600, 500, 0, 0, 600, 500);
}

