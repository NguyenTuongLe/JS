// document.addEventListener("DOMContentLoaded",function(){
// 	//khai bao bien can su dung trong app nay
// 	var tamgiac = document.getElementsByClassName('tamgiac');
// 	var tamgiac = tamgiac[0];
// 	var danhsach = document.getElementsByClassName('danhsach');
// 	var danhsach = danhsach[0];

// 	//su dung ham onclick va toggle class cho tam giac doi mau
// 	tamgiac.onclick = function()
// {
// 	this.classList.toggle('tamgiactrang');
// 	// this chisnh laf then tamgiac dc kick
// 	danhsach.classList.toggle('ra');
// }},false)


function tinhtbc(){
	var x=10; 
	var y=12;
	console.log((x+y)/2);
}
tinhtbc();

function tinh2(x,y) {
	console.log("trung binh cong cua" +x+ "va" +y+"la :"+(x+y)/2);

}
tinh2(2,100);