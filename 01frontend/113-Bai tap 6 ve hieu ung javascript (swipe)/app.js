
// var x = 98888;
// var ketqua = '';
// // if(x<1000){
// // 	ketqua = "Nho hon 1000";
// // }
// // else{
// // 	ketqua = "lon hon hoac bang 1000";
// // }

// ketqua = (x<1000) ? "nho 1000" : "lon hon 1000";


// if(chiSoHienTai > 0){
// 	 	chiSoHienTai --;
// 		}
// 	 else{
// 	 	chiSoHienTai = soLuongSlide-1;
// 		}

//nhanvao = (dieukien) ? "dung" : "sai";
// var chiSoHienTai = 0,
// 	soLuongSlide = 99;
// chiSoHienTai = (chiSoHienTai > 0) ? (chiSoHienTai -1) : (soLuongSlide-1);
// console.log(chiSoHienTai);


// if(chiSoHienTai < soLuongSlide-1){//chua den cuo
// 			chiSoHienTai = chiSoHienTai + 1;
// 		}else { //la phan tu cuoi cung
// 			chiSoHienTai = 0;
//  		}
// chiSoHienTai = (chiSoHienTai < soLuongSlide-1) ? (chiSoHienTai +1) : 0;

// if(nutnao == 'nutTrai'){
// 		chiSoHienTai = (chiSoHienTai > 0) ? (chiSoHienTai -1) : (soLuongSlide-1);
// 	}
// 	else {
// 		chiSoHienTai = (chiSoHienTai < soLuongSlide-1) ? (chiSoHienTai +1) : 0;
// 	}

// chiSoHienTai = (nutnao == 'nutTrai') ? (chiSoHienTai > 0) ? (chiSoHienTai -1) : (soLuongSlide-1) : (chiSoHienTai < soLuongSlide-1) ? (chiSoHienTai +1) : 0;


// if(nutnao == 'nutTrai'){
// 		this.classList.remove('bienMatKhiAnPrev');
// 	}
// 	else if(nutnao == 'nutPhai'){
// 		this.classList.remove('bienMatKhiAnNext');
// 	}


// var ketqua = (nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext');
// this.classList.remove(ketqua);
// this.classList.remove((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));

// if(trangThaiCua2ChuyenDong == 2){
// 			trangThai="dangDungYen";
// 		}
// trangThai = (trangThaiCua2ChuyenDong == 2) ? ('dangDungYen') : trangThai;

// if(nutnao == 'nutTrai'){
// 		this.classList.remove('diVaoKhiAnPrev');
// 	}
// 	else if(nutnao == 'nutPhai'){
// 		this.classList.remove('diVaoKhiAnNext');
// 	}

// tenclass = (nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext');
// this.classList.remove(tenclass);

// this.classList.remove((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));


// if(nutnao == 'nutTrai'){
// 		phanTuHienTai.classList.add('bienMatKhiAnPrev');
// 		phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
// 	}
		
// 	else if(nutnao == 'nutPhai'){
// 		phanTuHienTai.classList.add('bienMatKhiAnNext');
// 		phanTuTiepTheo.classList.add('diVaoKhiAnNext');
// 	}

// phanTuHienTai.classList.add((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev'): ('bienMatKhiAnNext'));
// phanTuTiepTheo.classList.add((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));





var nutPhai = document.querySelector('.nuts b.phai'),
	 nutTrai = document.querySelector('.nuts b.trai'),
	 slides = document.querySelectorAll('.slides ul li'),
	 chiSoHienTai = 0,
	 soLuongSlide = slides.length,
	 trangThai = 'dangDungYen';


function xacDinh2SlideVaChuyenDong(nutnao){
	if(trangThai == 'dangChuyenDong'){
		return false;//dung chuong trinh
	}
	trangThai = 'dangChuyenDong';
 	var trangThaiCua2ChuyenDong = 0;
 	var phanTuHienTai = slides[chiSoHienTai];

	chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0) ? (chiSoHienTai -1) : (soLuongSlide-1)) : ((chiSoHienTai < soLuongSlide-1) ? (chiSoHienTai +1) : 0);

	var phanTuTiepTheo = slides[chiSoHienTai];
	//endAnimation Check
	var xuLyHientaiKetThucCD = function(){
		this.classList.remove('dangxem');

		this.classList.remove((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));
		
		trangThaiCua2ChuyenDong++;

		trangThai = (trangThaiCua2ChuyenDong == 2) ? ('dangDungYen') : trangThai;

	}
	var xuLyTiepTheoKetThucCD = function(){
		this.classList.remove((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));

		this.classList.add('dangxem');
		trangThaiCua2ChuyenDong++;
		trangThai = (trangThaiCua2ChuyenDong == 2) ? ('dangDungYen') : trangThai;

	}
	phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);
	phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHientaiKetThucCD);
	

	//khi cdong
	phanTuHienTai.classList.add((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev'): ('bienMatKhiAnNext'));
	phanTuTiepTheo.classList.add((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));


	//sau khi xdinh dc 2 ptu roi thi xu li den chuyen dong

}

//1. xac dinh slide hien tai va slide tiep theo khi click nut next

//Goi su kien click vao nut phai
var chuyenSlideChoNutPhai = function(){
	xacDinh2SlideVaChuyenDong('nutPhai');
	//kiem tra luon trang thai,neu dang chuyen dong
// 	if(trangThai == 'dangChuyenDong'){
// 		return false;//dung chuong trinh
// 	}
// 	//den dong nay tuc la dang dung yen, xu li chuyen dong
// 	//danh dau la trang thai chuyen dong
// 	trangThai = 'dangChuyenDong';
// 	var trangThaiCua2ChuyenDong = 0;

// 	var phanTuHienTai = slides[chiSoHienTai];
// //xac dinh chi so cua phan tu tiep theo dua tren phan tu hien tai
// if(chiSoHienTai < soLuongSlide-1){//chua den cuo
// 	chiSoHienTai = chiSoHienTai + 1;
// }else { //la phan tu cuoi cung
// 	chiSoHienTai = 0;
// }
// var phanTuTiepTheo = slides[chiSoHienTai];
// //check chuyen dong ket thuc
// var xuLyHientaiKetThucCD = function(){
// 	this.classList.remove('dangxem');
// 	this.classList.remove('bienMatKhiAnNext');
// 	trangThaiCua2ChuyenDong++;//=1
// 	if(trangThaiCua2ChuyenDong==2){
// 		trangThai = 'dangDungYen';
// 	}
// }


// var xuLyTiepTheoKetThucCD = function(){
// 	this.classList.remove('diVaoKhiAnNext');
// 	this.classList.add('dangxem');
// 	trangThaiCua2ChuyenDong++;//=2
// 	if(trangThaiCua2ChuyenDong==2){
// 		trangThai = 'dangDungYen';
// 	}
	
// }
// phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
// phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHientaiKetThucCD);


// //tao chuyen dong sau khi xac dinh duoc 2 phan tu
// phanTuHienTai.classList.add('bienMatKhiAnNext');
// phanTuTiepTheo.classList.add('diVaoKhiAnNext');

 };

//Xong nut phai

chuyenSlideChoNutTrai = function(){
	xacDinh2SlideVaChuyenDong('nutTrai');
	// if(trangThai == "dangChuyenDong"){
	// 	return false;
	// }
	// trangThai = "dangChuyenDong";
	// //1 - xac dinh duoc 2 phan tu, hien tai va tiep theo
	// //phanTuHienTai truoc
	// var phanTuHienTai = slides[chiSoHienTai];
	// var trangThaiCua2ChuyenDong = 0;
	// //phan tu tiep theo
	// if(chiSoHienTai > 0){//chua den cuoi cung
	
	// 	chiSoHienTai --;
	// }
	// else{
	// 	//dang o phan tu dau tien, k lui duoc na, chuyen sang ptu thu 5
	// 	chiSoHienTai = soLuongSlide-1;
	// }
	// var phanTuTiepTheo = slides[chiSoHienTai];

	// // ------
	// var xuLyHientaiKetThucCD = function(){
	// 	this.classList.remove('dangxem');
	// 	this.classList.remove('bienMatKhiAnPrev');
	// 	trangThaiCua2ChuyenDong++;
	// 	if(trangThaiCua2ChuyenDong == 2){
	// 		trangThai="dangDungYen";
	// 	}
	// }
	// var xuLyTiepTheoKetThucCD = function(){
	// 	this.classList.add('dangxem');
	// 	this.classList.remove('diVaoKhiAnPrev');
	// 	trangThaiCua2ChuyenDong++;
	// 	if(trangThaiCua2ChuyenDong == 2){
	// 		trangThai="dangDungYen";
	// 	}
	// }
	// phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHientaiKetThucCD);
	// phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);

	// phanTuHienTai.classList.add('bienMatKhiAnPrev');
	// phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
}

nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);