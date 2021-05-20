var selectCount = 0;   //keep count of number of select elements created
var selectPath = '';    //store the path of the select elements
var c_data = data;     //copy of data from data file

function create(datas){
   var dataArray = Object.keys(datas);          //getting keys from the data file
   var kIndex = dataArray.indexOf('question');     //get the index of the question key

   if ( kIndex == -1) {                              //if index equals -1, we have reahed the end of the keys
      result(datas);                                  //call result funtion to display result
   } 

   else {
      var selDiv = document.createElement('div');     //div for select elements
      selDiv.className = 'select_dropdown' ;
      var pEle = document.createElement('p');      //p tag to store question
      pEle.className = 'sel-p';
      pEle.textContent = datas['question'];              //set question text
      var selectOpt = document.createElement('select');     //select element
      selectOpt.className = "sel-drop";
      selectOpt.options[0] = new Option('select preference');   //set first option as select preference
      selectOpt.options[0].disabled = true;                 //first option - disabled      

      for (var i = 0; i < dataArray.length - 1; i++) {     //fill the rest of the options using values from the data file
      selectOpt.options[i + 1] = new Option(dataArray[i]);
      }   

      pEle.appendChild(selectOpt);
      selDiv.appendChild(pEle);
      selDiv.id = selectCount;  //using count as div id 

      changeSelect(selectOpt);   //calling function to add eventlistener to select element
      
       
      document.getElementById("section2").appendChild(selDiv); //adding div to section 2
   }
}

function changeSelect(selEle) {
  selEle.addEventListener("change",function(e) {
      var pathList = selectPath.split('.');  //get the path
      var parentId = parseInt(e.target.parentNode.parentNode.getAttribute('id'));   //get the id of div for the selected value
      pathList[parentId] = e.target.value;    //storing the selected value in the path
      pathList = pathList.slice(0, parentId + 1);   //taking only the values from 0 to parentid to update the select elements
      selectCount = parentId + 1;   //increasing the count value
      selectPath = pathList.join('.');    //joining the updated path
      console.log("selectPath-"+selectPath);   
      var childData = getChild(selectPath);    //calling function to get data for the next select element
      remove(pathList);                         //removing unwanted select elements
      create(childData);                        //create the next select element using the value from getChild function
   },false);

}



function getChild(selectPath) {     //function to get data for select elements
   var t_data = c_data;                //reference data
   var pathValues = selectPath.split('.');       //get the path 
   for (var i = 0; i <= pathValues.length - 1; i++) {         //storing data for the path values
       t_data = t_data[pathValues[i]];
   }
   return t_data;         //returning new data
 }

 
 function remove(pathL) {          //function to remove select elements based on user input
   var t_label = '';
   var labels = document.querySelectorAll('p');     //since the select is appended to p tags, query all p tags
   if (labels.length >= pathL.length) {       //if there are more p tags than the path values, remove the rest of them
     for (var i = pathL.length; i < labels.length; i++) {          
      t_label = labels[i];
      labels[i].parentNode.removeChild(t_label);  //removes unneccessary select option
     }
   }
 }
 


function result(finalChoice) {           //function to display the results after final select element

   const resDivMain = document.createElement("div");   //Main div to display images
   resDivMain.style.color = "white";

   const resDiv = document.createElement('div');       //div to display images
   resDiv.id = 'dataDiv';
   resDiv.className = "res-div";

   const resText = document.createElement("p");
   const resText1 = document.createElement("p");        //p tag to display username and result text
   resText.className = "res-label";
   const img1 = document.createElement("img");          //displaying 3 images (movie poster) 
   img1.className = "resImg";
   img1.src = finalChoice.src1;                          //image source from data file
   const img2 = document.createElement("img");
   img2.className = "resImg";
   img2.src = finalChoice.src2;
   const img3 = document.createElement("img");
   img3.className = "resImg";
   img3.src = finalChoice.src3;

   var uname = localStorage.username;                  //user name from localstorage  
   const rText = document.createTextNode(hiText + uname + resultText);   
   resText1.appendChild(rText);                  // append text

 
   resText.appendChild(img1);                //appending elememts to the section
   resText.appendChild(img2);
   resText.appendChild(img3);
   resDiv.appendChild(resText);
   resDivMain.appendChild(resText1);
   resDivMain.appendChild(resDiv);

   document.getElementById("section2").appendChild(resDivMain);  //appending result to section
   window.scrollTo(0, document.getElementById("section3").offsetTop);  // scrolling to display the results
 }