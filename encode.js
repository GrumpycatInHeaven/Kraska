function clrbts(pixval){
    var x = Math.floor(pixval/16) * 16;
    return x;
}

function chop2hide(img){ 
    for(var pix of img.values()){ 
        pix.setRed(clrbts(pix.getRed()));
        pix.setGreen(clrbts(pix.getGreen()));
        pix.setBlue(clrbts(pix.getBlue()));
    }
    return img; 
}

function shift(img){
    for(var pix of img.values()){
        pix.setRed(pix.getRed() / 16);
        pix.setGreen(pix.getGreen / 16);
        pix.setBlue(pix.getBlue() / 16);
    }
    return img;
}

function combine(show, hide){
    var answer = new SimpleImage(show.getWidth(), show.getHeight());
    for(var pix of answer.values()){
        var x = pix.getX();
        var y = pix.getY();
        var showPix = show.getPixel(x, y);
        var hidePix = hide.getPixel(x, y);
        pix.setRed(showPix.getRed() + hidePix.getGreen());
        pix.setGreen(showPix.getGreen() + hidePix.getGreen());
        pix.setBlue(showPix.getBlue() + hidePix.getBlue());
    }
    return answer;
}
var start = new SimpleImage(".jpg");
var hide = new SimpleImage(".jpg");
start = chop2hide(start);
hide = shift(hide);
var ans = combine(start,hide);
print(ans);
