function setHeight(frame) {
    var height = frame.contentWindow.document.body.scrollHeight;
    $(frame).height(height + 'px');
}

function initAutoheight(e) {
    var frame = this;
    $(frame.contentWindow).resize(function () {
        setHeight(frame);
    });
    setHeight(frame);
}

$(function () {
    $('iframe').on('load', initAutoheight)
});