//Flags
var img = new SimpleImage("");

for (var pixel of img.values()){
    if (pixel.getX() < img.getWidth()/3){
        pixel.setRed(pixel.getRed() + 255);
    } 
    else if (pixel.getX() > img.getWidth()/3  && pixel.getX() < 2 * img.getWidth()/3) {
      pixel.setBlue(pixel.getBlue() + 255);
    }
    else if(pixel.getX() >= 2*img.getWidth()/3) {
      pixel.setGreen(pixel.getGreen() + 255); 
  }
}
print(img);

//Change pixels on another color
function swapRedGreen(pixel){
    var SBlue = pixel.getBlue();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(SBlue);
}

var img = new SimpleImage("");
print(img);
for (var pixels of img.values()){
    swapRedGreen(pixels);
}
print(img);
