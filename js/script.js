$(function () {
  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }
  function refreshSwatch() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch").css("background-color", "#" + hex);
  }

  function refreshSwatchText() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch-text").css("color", "#" + hex);
    console.log(red, green, blue);
  }

  function slide(func) {
    $("#red, #green, #blue").slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      // value: 127,
      slide: func,
      change: func,
    });

    $("#red").slider("value", $("#red").slider("value"));
    $("#green").slider("value", $("#green").slider("value"));
    $("#blue").slider("value", $("#blue").slider("value"));
  }

  $(".widget button").button();
  $("#back-button").click(function () {
    event.preventDefault();
    slide(refreshSwatch);
  });

  $(".widget button").button();
  $("#color-button").click(function () {
    event.preventDefault();
    slide(refreshSwatchText);
  });

  slide(refreshSwatch);
});
