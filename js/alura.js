var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
/* 
pincel.fillStyle = 'lightgray';
pincel.fillRect(0 , 0 , 800 , 600);
 */
pincel.fillStyle = 'green';
pincel.fillRect(0 , 0 , 200 , 400);
pincel.fillStyle = 'red';
pincel.fillRect(400 , 0 , 200 , 400);
pincel.fillStyle = 'yellow'
pincel.beginPath();
pincel.moveTo(300 , 200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();
pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300 , 200 , 50 , 0 , 2 * 3.1415);
pincel.fill();
