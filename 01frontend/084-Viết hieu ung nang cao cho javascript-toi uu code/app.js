

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

	if(nutnao == 'nutTrai'){
		if(chiSoHienTai > 0){//chua den cuoi cung
	 	chiSoHienTai --;
		}
	 else{
	 	//dang o phan tu dau tien, k lui duoc na, chuyen sang ptu thu 5
	 	chiSoHienTai = soLuongSlide-1;
		}
		//var phanTuTiepTheo = slides[chiSoHienTai];
	}
	else if(nutnao == 'nutPhai'){
		if(chiSoHienTai < soLuongSlide-1){//chua den cuo
			chiSoHienTai = chiSoHienTai + 1;
		}else { //la phan tu cuoi cung
			chiSoHienTai = 0;
 		}
	}
	var phanTuTiepTheo = slides[chiSoHienTai];
	//endAnimation Check
	var xuLyHientaiKetThucCD = function(){
		this.classList.remove('dangxem');
		if(nutnao == 'nutTrai'){
		this.classList.remove('bienMatKhiAnPrev');
	}
	else if(nutnao == 'nutPhai'){
		this.classList.remove('bienMatKhiAnNext');
	}
		
		trangThaiCua2ChuyenDong++;
		if(trangThaiCua2ChuyenDong == 2){
			trangThai="dangDungYen";
		}
	}
	var xuLyTiepTheoKetThucCD = function(){
		this.classList.add('dangxem');
		if(nutnao == 'nutTrai'){
		this.classList.remove('diVaoKhiAnPrev');
	}
	else if(nutnao == 'nutPhai'){
		this.classList.remove('diVaoKhiAnNext');
	}
		
		trangThaiCua2ChuyenDong++;
		if(trangThaiCua2ChuyenDong == 2){
			trangThai="dangDungYen";
		}
	}
	phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);
	phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHientaiKetThucCD);
	

	//khi cdong
	if(nutnao == 'nutTrai'){
		phanTuHienTai.classList.add('bienMatKhiAnPrev');
		phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
	}
		
	else if(nutnao == 'nutPhai'){
		phanTuHienTai.classList.add('bienMatKhiAnNext');
		phanTuTiepTheo.classList.add('diVaoKhiAnNext');
	}

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