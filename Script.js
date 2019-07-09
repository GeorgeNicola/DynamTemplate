var ss = document.getElementById("ss");
var s=["Resources/Slideshow1.png", "Resources/Slideshow2.png",
        "Resources/Slideshow3.png"];
var n=1;
var nmax = 3; //Nr de poze



function SlideShow(){
   n++;
   if(n>nmax-1) n=1;
   ss.src=s[n];
   setTimeout("SlideShow()", 3000);
}

SlideShow();