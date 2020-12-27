function swapRedGreen(pixel){
    var SBlue = pixel.getBlue();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(SBlue);
}

var img = new SimpleImage("x8DKhRPk-Uw.jpg");
print(img);
for (var pixels of img.values()){
    swapRedGreen(pixels);
}
print(img);
