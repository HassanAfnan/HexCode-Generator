 const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
 const hexbtn = document.querySelector('.hexbtn');
 const bodybcg = document.querySelector('body');
 const hex = document.querySelector('.hex');

 hexbtn.addEventListener('click',getHex);

 function getHex()
 {
 	let hexCol = '#';

 	for (let i = 0; i < 6; i++) {
 		let random = Math.floor(Math.random() * hexNumber.length);
 		hexCol += hexNumber[random];
 	}
 	bodybcg.style.backgroundColor = hexCol;
 	hex.innerHTML = hexCol;
 }