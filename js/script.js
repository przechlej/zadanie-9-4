function drawTree(height) {
    for (var i = 0; i < height; i++) {
        var star = "";

        for (var j = 0; j <= i;
            j++) {
            star += "*";
        }
        cosole.log(star)
    }
}