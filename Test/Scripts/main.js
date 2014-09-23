var _img = new Image();
var _context = null;

$(function () {
    $("#ver").text("2");
    $("button").click(function () {
        _img.src = "Content/Images/images2.gif";
        _img.onload = function () {
            var canvas = document.getElementById("image_panel");
            if (!canvas || !canvas.getContext) { return false; }
            _context = canvas.getContext("2d");
            canvas.width = 600;
            canvas.height = 500;
            alert("in");
            setBackgroundImage(0, 0);

        }
    });
});

function setBackgroundImage(x, y) {
    _context.drawImage(_img, x, y, 600, 500, 0, 0, 600, 500);
}

