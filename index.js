var numOfButton = document.querySelectorAll(".drum").length;
//Below code is for clicking on buttons;
for(var i=0; i<numOfButton; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click" ,function()
        {
          var buttonInnerHtml=this.innerHTML;
          makeSound(buttonInnerHtml); 
          animation(buttonInnerHtml);
        });
    }
// Below code is for Keys pressed;
document.addEventListener("keypress" , function(event){
  var key=event.key;
  makeSound(key);
  animation(key);
})


    function makeSound(key)
    {
      switch(key)
          {
            case 'w': var tom1=new Audio("sounds/tom-1.mp3");
                      tom1.play();
                      break;
            case 'a': var tom2=new Audio("sounds/tom-2.mp3");
                      tom2.play();
                      break;
            case 's' :var tom3=new Audio("sounds/tom-3.mp3");
                      tom3.play();
                      break;
            case 'd': var tom4=new Audio("sounds/tom-4.mp3");
                      tom4.play();
                      break;
            case 'j': var snare=new Audio("sounds/snare.mp3");
                      snare.play();
                      break;
            case 'k': var kick_bass=new Audio("sounds/kick-bass.mp3");
                      kick_bass.play();
                      break;
            case 'l': var crash=new Audio("sounds/crash.mp3");
                      crash.play();
                      break;
            default: 
                    break;
          }
    }
function animation(key)
{
 var active=document.querySelector("."+key);
 active.classList.add("pressed");
 setTimeout(function(){active.classList.remove("pressed")},100);
}