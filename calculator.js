function calFunc() {

  var num1, num2, val, oper;
  
  num1 = prompt("Type a number");
  num2 = prompt("Type a number");
  oper = prompt("Type an operator");
  
  if ( oper == "+" ) {

    val = Number(num1) + Number(num2);

  } else if ( oper == "/" ) { 

    val = Number(num1) / Number(num2);

  } else if ( oper == "*" ) {

    val = Number(num1) * Number(num2);

  } else if ( oper == "-" ) {

    val = Number(num1) - Number(num2);

  } else if ( oper = !null ) {
    
    val = "Error";

  } else if ( x = !null ) {

    val = "Error";

  };
 
  
  alert(val);
  }
document.getElementById("demo").innerHTML = calFunc();
