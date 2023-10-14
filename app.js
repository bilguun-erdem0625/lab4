/*console.log(document);
// document.GetElementsByTagName()->tag nereer handah
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
h1.innerText="sain u";
h1.style.color="brown";

var j1 = document.getElementsByTagName('H1')[1];
console.log(h1);
j1.innerText="suuuu";
j1.style.color="pink";
var p = document.getElementsByTagName('p')[0];
console.log(p);
function (){
	p.innertext = "click ";
	p.style.color = "green";
} */

var spooderman = document.getElementsByTagName('input')[0];
var spooderman2 = document.getElementsByTagName('h4')[0];
var now = 2023,myAge;
console.log(spooderman);
console.log(spooderman2);
function nasaa_oruul(){
	if(spooderman.value==""){
		alert("uuchlaarai ta nasaa oruulaagui bn");
	}else if(spooderman.value>150){
		alert("uuchlaarai nas ih bain");
	}else if(spooderman.value<0){
		alert("ta toroogui bn");
	}else{
	myAge = now - spooderman.value;
	console.log(spooderman.value);
	spooderman2.innerText = "tanii torson on : " + myAge;
	}
}