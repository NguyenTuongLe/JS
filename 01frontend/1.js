//truy xuat den cai nut

// truoc khi truy xuat phai document ready
document.addEventListener("DOMContentLoaded", function() {
	// dung code
	var nut = document.getElementById('nut1');
	var khoi = document.getElementsByClassName('card');
	console.log(khoi)
	//goi su kien click
	nut.onclick = function(){
		khoi[0].classList.toggle('diphai')
	} 
}, false)
