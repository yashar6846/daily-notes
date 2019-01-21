/*
function getNumbers () {
    var n1 = parseInt(prompt("First Namber : "))
    var n2 = eval(prompt("Second Number :"))
    var op = prompt("Operator : ")
    var result = calc (n1, n2, op)

    alert(result)
}

function calc(num1 , num2 , Operator){
  switch(Operator){
          case "+" : return(num1+num2)
          case "-" : return(num1-num2)
          case "*" : return(num1*num2)
          case "/" : return(num1/num2)

        }
}

getNumbers()*/

//function=====================================

//Do While-----------------------------

//function printNumbers () {
  //for(var i=1;i<=10;i=i+2)

 /* function printNumbers(min , max){
     for(var i=min; i<=max; i=i+2)
       document.write(i+"<br />")
}

function printNumbers2(min , max) {
  var i = min;
  while(i<=max) {
    document.write(i+"<br />")
    i += 2;
  }
}

function f1 () {
  var input = prompt("Enter a Number (* for Finish) :")
  var sum = 0;
  while(input!="*"){
    sum += eval(input);
    input = (prompt ("Enter a Number (* for Finish): "))
  }
  alert(sum)
}
//f1()

var names = ["sagi", "sman", "shgayg"]
function mySearch(name) {
   for(var i=0 ; i<names.length; ++i){
     if(names[i]==name){
       //alert (i)
      // break;
      continue;
     }
     else
      alert(names[i])
   }
   //alert(i)
}
  //mySearch("sagi")

  function myObject() {
    var txt=""
    var person = {fname : " gezal" , lname:"jan", age : 30}
    for(var X in person)
      txt += person[X]+"*"

      alert(txt)
  }
  myObject()*/
 /*var names = ["gezal" , "aigin", "chichak"]
  for(var i=0;i<names.length;++i)
   document.write(names[i]+"<br />")*/

   //Events============================================-3
   function page_load(){

  }
 /*function txt2_focus() {
   alert("I'm in")
 }*/
 function txt1_blur(e) {
   alert(e.keyCode)
}

  function txt1_keyup(e) {
    if(e.keyCode!=8 && e.keyCode!=13)
       document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML)+1
    else if(document.getElementById('counter').innerHTML!=0  && e.keyCode==8)
      document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML)-1
      else if(e.keyCode==13)
        document.getElementById('txt2').focus()
    }
    
    function txt1_keydown(e) {
      if(e.keyCode==56)
        e.preventDefault()
       
    }

    function txt2_mouseover(elem) {
       elem.value = "mouseover"
    }

    function txt2_mouseout(elem) {
      elem.value = ""
   }
  