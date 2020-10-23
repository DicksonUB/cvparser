var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("uploadBtn");
var loader = document.getElementById("loader");
var questionsId = document.getElementById("questionsId")
var errorMessage = document.getElementById("errorMessage");
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("chooseBtn");
const customTxt = document.getElementById("custom-text");
let dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);


customBtn.addEventListener("click", function() {
  realFileBtn.click();
});
realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    handleFile(realFileBtn.files[0]);
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
} 

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;
  handleFile(files[0]);
}


var values = [];
function handleFile(f){
  
  customTxt.innerHTML =f.name;
  //window.alert("Added "+ f.name);
  const reader = new FileReader();
  
  reader.onload = function(){
    
    const lines = reader.result.split('\n');
    
    var i = 0;
    var values = [];
    console.log(lines.length);
  };
  reader.readAsText(f);
}
function sanitazeString(str){
  var newstr = ""; 
  for( var i = 0; i < str.length; i++ )  
    if( !(str[i] == '\n' || str[i] == '\r') ) 
        newstr += str[i]; 
  return newstr;
}