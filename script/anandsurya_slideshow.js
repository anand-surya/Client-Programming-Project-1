var sIndex = [1];              //indexes of slides
sSlides(1, 0);                   //initialize slideshow
function pSlides(n, no) { 
  sSlides(sIndex[no] += n, no);   //adding or subtracting vlaue from index to move previous or next
}
function sSlides(n, no) {
  var slideEle = document.getElementsByClassName("slides1");
  if (n > slideEle.length) {
    sIndex[no] = 1
  }       //reseting slideshow
  if (n < 1) {
    sIndex[no] = slideEle.length
  }       //if n < 1 it means previous slide
  for (var i = 0; i < slideEle.length; i++) {     
     slideEle[i].style.display = "none";        //hidding all the slide's div
  }
  slideEle[sIndex[no]-1].style.display = "block";  //displaying only the current slide's div 
}
