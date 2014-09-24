self.addEventListener('message', function (e) {
    var img = new Image();
    self.postMessage(img);

    //img.src = "Content/Images/images3.gif";
    //img.onload = function () {
    //    self.postMessage(img);
    //}
}, false);