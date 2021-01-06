document.addEventListener("DOMContentLoaded",function(){
	//bien su dung .declick
	var nut = document.getElementsByClassName('declick');
	var nd = document.getElementsByClassName('dehienthi');
	for(var i=0; i<nut.length;i++){
		nut[i].onclick = function (){
		
			if(this.classList[1] == 'mautrang') {//click vao cai da hien thi roi
				//xu li 1 kieu
				this.classList.remove('mautrang');//bo mau trang o chinh no

			//3 dong duoi la cho div cua doi tuong duoc click an di
			var ndhienra = this.getAttribute('data-hienlen');
			var phan_tu_hien_ra = document.getElementById(ndhienra);
			phan_tu_hien_ra.classList.remove('ra');
			}

			else{//click vao cac cai con lai
				//cho tat ca bo mau trang di
			for(var k=0;k<nut.length;k++){
				nut[k].classList.remove('mautrang');
			}

			//doi tuing dc click(this)thanh mau trang
			this.classList.toggle('mautrang');

			//lay ve cai data-hienlen
			var ndhienra = this.getAttribute('data-hienlen');
			var phan_tu_hien_ra = document.getElementById(ndhienra);

			//cho tat ca cac div .dehienthi khac an di
			for(var i =0; i < nd.length; i++) {
				nd[i].classList.remove('ra');
			}

			//cho div cua doi tuong duoc click hien ra
			phan_tu_hien_ra.classList.toggle('ra');
			}
		}
	}

},false)


