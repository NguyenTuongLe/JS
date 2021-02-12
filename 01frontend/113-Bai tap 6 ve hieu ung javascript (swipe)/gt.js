var nut = document.querySelector('.n1'),
	khoi = document.querySelector('.khoi');



khoi.addEventListener('webkitAnimationEnd',function(){
	console.log("ket thuc chuyen dong la gi thi la");
	this.classList.add('dixuong');
});

nut.addEventListener('click',function(){
	khoi.classList.add('chuyendong');
})
