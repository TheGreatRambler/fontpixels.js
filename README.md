# fontpixels.js
A javascript library for getting the pixel data of a charactor in a font based on this [stackoverflow answer](https://stackoverflow.com/questions/12700731/extract-path-from-text-html-canvas/30204783#30204783).
Check out [this page](https://thegreatrambler.github.io/fontpixels.js/demo.html) for a demo.

## API

```javascript
var pixelarray = fontpixels.generatepixels(text, resolution, fontFamily, lines);
```

### text

```javascript
// supports ascii...
text = "A";
// and unicode
text = "╫";
```
It is recommended to only insert a character for the text because the spacing between letters is a bit funky.

### resolution

```javascript
resolution = 30;
```
Resolution determines both the size of the output and the detail of the output. Larger resolutions output larger pixel arrays and more detail.

### fontFamily

```javascript
fontFamily = "Times New Romans";
```
Font of the text. Make sure font is loaded before you call `fontpixels.generatepixels()`. I would recommend [WebFont](https://github.com/typekit/webfontloader) for a font loader.

### lines

```javascript
lines = false;
```
Whether to draw the text as lines, like HTML5 canvas `ctx.strokeText()`.

### pixelarray

```javascript
console.log(pixelarray);
	//[{x: 2, y: 4}, {x: 5, y: 6} ...]
```
The output is an array of (x, y) values of the pixels. You can use the pixels by iterating over them.

```javascript
pixelarray.forEach(function(value) {
	console.log(value.x, value.y);
});
```
