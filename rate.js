
window.onload=function(){
  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
}
  document.getElementById("my_audio").play();
}

//at the end after choosing last button
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("restart")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  location.reload()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  


var Ftext = document.getElementById("DoneText")
var finished = document.getElementById("finished")
var num = document.getElementById("num")
var right = document.getElementById("right");
var left = document.getElementById("left");
var imgR = document.getElementById('imgR')
var imgL = document.getElementById('imgL')



var items = [
  //rachels
"images (rachel)/R1.jpg",
"images (rachel)/R2.jpg",
"images (rachel)/R3.jpg",
"images (rachel)/R4.jpg",
"images (rachel)/R5.jpg",
"images (rachel)/R6.jpg",
"images (rachel)/R7.jpg",
"images (rachel)/R8.jpg",
"images (rachel)/R9.jpg",
"images (rachel)/R10.jpg",
"images (rachel)/R11.jpg",
"images (rachel)/R12.jpg",
"images (rachel)/R13.jpg",
"images (rachel)/R14.jpg",
"images (rachel)/R15.jpg",
"images (rachel)/R16.jpg",
"images (rachel)/R17.jpg",
"images (rachel)/R18.jpg",
"images (rachel)/R19.jpg",
"images (rachel)/R20.jpg",
"images (rachel)/R21.jpg",
"images (rachel)/R22.jpg",
"images (rachel)/R23.jpg",
"images (rachel)/R24.jpg",
"images (rachel)/R25.jpg",
"images (rachel)/R26.jpg",
"images (rachel)/R27.jpg",
"images (rachel)/R28.jpg",
"images (rachel)/R29.jpg",
"images (rachel)/R30.jpg",
"images (rachel)/R31.jpg",
"images (rachel)/R32.jpg",
"images (rachel)/R33.jpg",
"images (rachel)/R34.jpg",
"images (rachel)/R35.jpg",
"images (rachel)/R36.jpg",
"images (rachel)/R37.jpg",
"images (rachel)/R38.jpg",


//YES
"images (rachel)/emily/E2.jpg",
"images (rachel)/emily/E3.jpg",
"images (rachel)/emily/E1.jpg",
"images (rachel)/emily/E4.jpg",
"images (rachel)/emily/E5.jpg",
"images (rachel)/emily/E6.jpg",
"images (rachel)/emily/E7.jpg",
"images (rachel)/emily/E8.jpg",
"images (rachel)/emily/E10.jpg",
"images (rachel)/emily/E9.jpg",
"images (rachel)/emily/E11.jpg",
"images (rachel)/emily/E12.jpg",
"images (rachel)/emily/E13.jpg",
"images (rachel)/emily/E14.jpg",
"images (rachel)/emily/E15.jpg",
"images (rachel)/emily/E16.jpg",
"images (rachel)/emily/E17.jpg",
"images (rachel)/emily/E20.jpg",
"images (rachel)/emily/E21.jpg",
"images (rachel)/emily/E22.jpg",
"images (rachel)/emily/E18.jpg",
"images (rachel)/emily/E19.jpg",
"images (rachel)/emily/E25.jpg",
"images (rachel)/emily/E24.jpg",
"images (rachel)/emily/E23.jpg",

//guest celeb
"images (rachel)/guest celeb/de946f1b-8590-41a3-88cf-3e65cb667fc4.png",
"images (rachel)/guest celeb/eminem's daughter.jpg",
"images (rachel)/guest celeb/peterson's daughter.jpg"


];


for (var i = 0; i < items.length; ++i) {
  var img = new Image();
  img.src = items[i];
}



 
//shuffle array of pics
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  shuffle(items)


if(items.length <= 0){
  var done = i
}

  

//after last choice
function done(SRC){
  modal.style.display = "block";
    finished.src = SRC
    imgL.style.visibility='hidden'
    imgR.style.visibility='hidden'
    
    num.innerHTML=""
    document.getElementById("explL").innerHTML = ""
    document.getElementById("explR").innerHTML = ""
    left.style.visibility='hidden'
    right.style.visibility='hidden'
    
}

//left click()
function leftclick(){
  if(items.length>0)
  {
    imgL.src = items.pop();
    //num.innerHTML= "Pictures left: "  + items.length
  } else {

    done(imgR.src)
  }
    
}
//right click()
function rightclick(){
  if(items.length>0)
  {
    imgR.src = items.pop();
    //num.innerHTML= "Pictures left: "  + items.length
  } else{
    
   done(imgL.src)

  }
}


//buttons when clicked
imgR.src = items.pop();
imgL.src = items.pop();

function BNTclickL() {

    rightclick()

}
    
function BNTclickR() {

    leftclick()

}
    document.onkeydown = checkKey;

    function checkKey(e) {
    
        e = e || window.event;
    
        if (e.keyCode == '38') {
            // up arrow
            
        }
        else if (e.keyCode == '40') {
            // down arrow
            

        }
        else if (e.keyCode == '37') {
           // left arrow
           
          
           if(items.length>0){rightclick()}else{
            rightclick()


            //disable arrow keys
            document.onkeydown = function(ev)
{
   var key;
   ev = ev || event;
   key = ev.keyCode;
   if(key == 37 || key == 38 || key == 39 || key == 40)
  {

     ev.cancelBubble = true;
     ev.returnValue = false;
  }

}
            
          }
            
            
           
        }
        else if (e.keyCode == '39') {
           // right arrow
           
            if(items.length>0){leftclick()}else{
              leftclick()

              //disable arrow keys
              document.onkeydown = function(ev)
{
   var key;
   ev = ev || event;
   key = ev.keyCode;
   if(key == 37 || key == 38 || key == 39 || key == 40)
  {

     ev.cancelBubble = true;
     ev.returnValue = false;
  }

}

            }
           
        }
    
    }

  



    document.getElementById("left").addEventListener("click", BNTclickL);
    document.getElementById("right").addEventListener("click", BNTclickR);


   










