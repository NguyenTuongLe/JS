document.addEventListener("DOMContentLoaded",function(){
	//khai bao mot so doi tuong can su dung
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	//nut tra ve mot mang nut
	var thoigian = setInterval(function(){
		autoSlide()
		
	},3000);

	//bat su kien click cho tung nut
	for(var i = 0; i<nut.length; i++) {
		nut[i].addEventListener('click',function(){
			//truoc tien huy tu chuyen dong
			clearInterval(thoigian);

			//bo tat ca mau den di
			for(var i=0; i< nut.length;i++){
				nut[i].classList.remove('kichhoat');
			}

			this.classList.add('kichhoat');
			//het phan xu li chuyen mau cua nut slide
			//xu li phan tinh vi tri
			//console.log(this.previousElementSibling);
			var nutkichhoat = this;
			var vitrinut= 0;
			for(vitrinut =0;nutkichhoat = nutkichhoat.previousElementSibling;vitrinut++){
				// console.log('bien i = ' + i);
				// console.log('phan tu nut kich hoat la '+nutkichhoat);
			}
			//het vong lap nay thi bien i = stt
			//console.log("vi tri cua phan tu co class la kich hoat la = " +vitrinut);
			//buoc 1: cho tta ca slide an di = cach remove class active
			for(var i = 0; i <slides.length; i++){
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
		})
	}//het su kien cho nut


	//viet ham tu chuyen slide 
	
		function autoSlide(){
			//buoc 1: xem slide nao dang hien thi
		var vitrislide = 0;
		var slideHienTai =document.querySelector('.cacslide ul li.active');
		// console.log(slideHienTai.previousElementSibling);
		// console.log(slideHienTai);
		for(var vitrislide=0;slideHienTai = slideHienTai.previousElementSibling;vitrislide++){}
			//neu chua den slide cuoi cung tuc la vitrislide <= slides.lemngth ==>hoatdong binh thuong
		if(vitrislide < (slides.length - 1)){
			//cho an het di
			for (var i =0; i < slides.length; i++){
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');

			}
			//cho phan tu tiep theo cua slide hien thi ra 
			slides[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
		}
		else{
			for (var i =0; i < slides.length; i++){
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			//cho phan tu tiep theo cua slide hien thi ra 
			slides[0].classList.add('active');
			nut[0].classList.add('kichhoat');
		}
			//console.log('vi tri cua nut hien tai la' + vitrislide);
		}

},false)
