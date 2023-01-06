//  Задание №2

 alert("Задание №2")

 let x = 6;
 let y = 15;
 let z = 4;

 let one = x += y - x++ * z;
 let two = z = --x - y * 5;
 let tree =  y /= x + 5 % z;
 let four = z = x++ + y * 5;
 let Five = x = y - x++ * z


 prompt(`Выражение x += y - x++ * z , где X=6; y=15, X=4 ` , one)
 prompt(`Выражение z = --x - y * 5 , где X=6; y=15, X=4 ` , two)
 prompt(`Выражение y /= x + 5 % z , где X=6; y=15, X=4 ` , tree)
 prompt(`Выражение x = y - x++ * z , где X=6; y=15, X=4 ` , four)
prompt(`Выражение z = x++ + y * 5 , где X=6; y=15, X=4 ` , Five)



 



// Задание №3

alert("Найти среднее арифметическое из 3-х значений ")

let a = parseInt(prompt(`Введите значение ` , ""));
let b = parseInt(prompt(`Введите значение ` , ""))
let c = parseInt(prompt(`Введите значение ` , ""))

let alert_3 = (a + b + c)/3;

alert(alert_3);







//  Задание №4

alert( "V = πr^2h" )


let r = parseInt(prompt(  "Введите значение r" , ""))
let h = parseInt(prompt( "Введение значение  h" , ""))
let π = 3.14
let V =  π*r + h**2;
alert(V);


  


 