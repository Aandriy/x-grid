function setHeight(frame) {
    var height = frame.contentWindow.document.body.scrollHeight;
    $(frame).height(height + 'px');
}

function initAutoheight() {
    var frame = this;
    
    $(frame.contentWindow).on('resize', function () {
        setHeight(frame);
    });
    setHeight(frame);
}

$(function () {
    $('iframe').on('load', initAutoheight)
});