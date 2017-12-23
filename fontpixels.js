(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.fontpixels = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    var fontpixels = {}
    fontpixels.generatepixels = function(txt, resolution, fontFamily, width, lines) {
        if (!resolution) {
            resolution = 30;
        }
        if (!fontFamily) {
            fontFamily = "Times New Roman";
        }
        if (!width) {
            width = 0.3;
        }
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var i;
        var data32;
        var pixels = [];
        var fontstring = resolution + "px " + fontFamily;

        context.font = fontstring;
        canvas.width = context.measureText(txt).width;
        canvas.height = resolution;
        context.textBaseline = "hanging";
        context.font = fontstring;
        context.lineWidth = width;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (!lines || lines === false) {
            context.fillText(txt, 0, 0);
        } else {
            context.strokeText(txt, 0, 0);
        }

        data32 = new Uint32Array(context.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
        for (i = 0; i < data32.length; i++) {
            if (data32[i] & 0xff000000) { // check alpha mask
                pixels.push({
                    x: (i % canvas.width),
                    y: ((i / canvas.width) | 0)
                });
            }
        }
        return pixels;
    };
    return fontpixels;
}));
