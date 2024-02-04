
function display(num){
document.getElementById("display1").value +=num;
}
function  res_clear(){
   document.getElementById("display1").value = 0;
}
function calculate(){
   document.getElementById("display1").value = eval(document.getElementById("display1").value);
}
function cle(){
   document.getElementById("display1").value = 0;
}
