document.body.style.backgroundImage = "url(images/bg-collage.jpg)"; //Setting background image for the body

const sec1 = document.createElement("section"); //Section for slideshow, getting username
sec1.id = "section1";
document.body.appendChild(sec1);

const sec2 = document.createElement("section"); //Section for select elements
sec2.id = "section2";
document.body.appendChild(sec2);

const logo_div = document.createElement("div");  //div to display logo and name
logo_div.id = "div-logo";
document.getElementById("section1").appendChild(logo_div);

const logo = document.createElement("img");  //logo image
logo.src= logoImg;
logo.id = "logo-m";
document.getElementById("div-logo").appendChild(logo);

const title_name = document.createElement("h2"); //page name
title_name.id = "title-h2";
const t_name = document.createTextNode(webPageTitle);
title_name.appendChild(t_name);
document.getElementById("div-logo").appendChild(title_name);

const logo1 = document.createElement("img"); //logo image
logo1.src= logoImgR;
logo1.id = "logo-m-1";
document.getElementById("div-logo").appendChild(logo1);

const scrollDiv = document.createElement("div");   //div to contain scrolling text
scrollDiv.id = "scroll-div";
const scrollP = document.createElement("h4");        //h4 with the text
scrollP.id = "scrp";
const scollText = document.createTextNode(feedback);    
scrollP.appendChild(scollText);
scrollDiv.appendChild(scrollP);
document.getElementById("section1").appendChild(scrollDiv);

const slide = document.createElement("div");  //container div to display slideshow
slide.className = "slideshow-container";
slide.id = "sl";
document.getElementById("section1").appendChild(slide);

const slide1 = document.createElement("div"); //div for slide 1
slide1.className = "slides1";
slide1.id = "sid1";
document.getElementById("sl").appendChild(slide1);

const slideimg1 = document.createElement("img"); //slide 1 image
slideimg1.id = "img1";
slideimg1.src = firstImg;
document.getElementById("sid1").appendChild(slideimg1);

const slide2 = document.createElement("div"); //div for slide 2
slide2.className = "slides1";
slide2.id = "sid2";
document.getElementById("sl").appendChild(slide2);

const slideimg2 = document.createElement("img"); //slide 2 image
slideimg2.id = "img2";
slideimg2.src = secImg;
document.getElementById("sid2").appendChild(slideimg2);

const slide3 = document.createElement("div"); //div for slide 3
slide3.className = "slides1";
slide3.id = "sid3";
document.getElementById("sl").appendChild(slide3);

const slideimg3 = document.createElement("img"); //slide 3 image
slideimg3.id = "img3";
slideimg3.src = thirdImg;
document.getElementById("sid3").appendChild(slideimg3);

const slide4 = document.createElement("div"); //div for slide 4
slide4.className = "slides1";
slide4.id = "sid4";
document.getElementById("sl").appendChild(slide4);

const slideimg4 = document.createElement("img"); //slide 4 image
slideimg4.id = "img4";
slideimg4.src = fourthImg;
document.getElementById("sid4").appendChild(slideimg4);

const prev = document.createElement("a"); //previous button
prev.className = "prev";
prev.id = "p";
const pbut = document.createTextNode(prevText);
prev.appendChild(pbut);
document.getElementById("sl").appendChild(prev);


const next = document.createElement("a"); //next button
next.className = "next";
next.id = "n";
const nbut = document.createTextNode(nextText);
next.appendChild(nbut);
document.getElementById("sl").appendChild(next);


document.getElementById("p").addEventListener("click", callfunc); //adding event listeners to change slides (previous)
function callfunc(){   
    pSlides(-1,0);
    }

document.getElementById("n").addEventListener("click", callfunc1); //adding event listeners to change slides (next)
function callfunc1(){  
    pSlides(1,0);
    }

const inp = document.createElement("input"); //input field to get user's name
inp.type = "text";
inp.placeholder = inp_place;
inp.id = "name-inp";
document.getElementById("section1").appendChild(inp);


document.getElementById("name-inp").addEventListener("blur",validateName); //event listeners to validate name
function validateName(){  //funtion to validate name
    
    var usrname = document.getElementById("name-inp").value;
    var regex = /^[A-Za-z ]+$/;                                //regex for alphabets
    if(usrname.match(regex))                                  //matching input value with regex
    {
    
    document.getElementById("d-but").focus();                 //focusing on scroll button
    }
    else
    {
    window.alert(validation_alert);                         //alert if name is not valid
    return false;
    }
}

const intro_text = document.createElement("h2");           //h2 to display text
intro_text.id = "into-text";
const int_text = document.createTextNode(registerText);
intro_text.appendChild(int_text);
document.getElementById("sl").appendChild(intro_text);



const down_but = document.createElement("input");         //image button for scrolling to next section (section2)
down_but.id = "d-but";
down_but.src = scrollButton;
down_but.type = "image";
document.getElementById("section1").appendChild(down_but);


down_but.addEventListener("click", scrolldown);               //event listener for scrolling
function scrolldown()                                      //function for scrolling
{
    var user = document.getElementById("name-inp").value;
    if(user == ''){                                               //checking if name field is null 
    console.log("/"+localStorage.username);
    window.alert(scrollAlert);                                      //alert to enter name
    }
    else{
    localStorage.username = user;                                //storing name in localstorage
    console.log(localStorage.username);                        
    window.scrollTo(0, document.getElementById("section2").offsetTop);   //scrolling to section 2
    }
}

console.log("------"+localStorage.username);
console.log(data);


const find = document.createElement("h2");                      //h2 to display text
const find_text = document.createTextNode(findTitle);
find.appendChild(find_text);
find.id = "find-id";
document.getElementById("section2").appendChild(find);


const sec3 = document.createElement("section");   //section 3 for reset button
sec3.id = "section3";
document.body.appendChild(sec3);

const resetbut = document.createElement("input");   //image button for reset
resetbut.className = "res-butt";
resetbut.type = "image";
resetbut.src = resButton;
document.getElementById("section3").appendChild(resetbut);

resetbut.addEventListener("click",resetpage);  //event listener to reset the page

function resetpage(){
  localStorage.username = '';                   //clearing localstorage
  window.location.reload();                     //reloading the webpage
}


create(data);                               //calling function to create the first select element dynamically

function blink() {                     //DHTML "blinking text". Function called onload of body
    
    var f = document.getElementById("into-text");
    setInterval(function() {
       f.style.color = (f.style.color == 'black' ? 'blue' : 'black'); //changing color dynamically on interval creating a blinking effect 
    }, 500);
}


function scrollit()             //DHTML scrolling text animation. Fucntion called onload of body
{
console.log(window.innerWidth);
var endPos = (window.innerWidth/2) + 50;             //getting the screen width of browser
var elem = document.getElementById("scrp");   
var pos = 10;
var id = setInterval(frame, 50);            //setting time interval
function frame() {                           
  if (pos == endPos) {                       //if the text's position reaches end, it is reset
    pos = 10;
  } else {                                   //until the text reaches the end, postion is incremented
    pos++; 
    elem.style.left = pos + 'px'; 
  }
}
}


console.log("done");

