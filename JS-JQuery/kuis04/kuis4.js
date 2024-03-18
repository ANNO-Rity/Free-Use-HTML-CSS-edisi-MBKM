var text = "";
for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= 5; y++) {
        if (y <= 5 - x) {
            text += " ";
        } else {
            text += "*";
        }
    }
    text += "\n";
}
console.log(text);
