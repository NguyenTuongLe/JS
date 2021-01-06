var dongho = {
	hangsx : "casio",
	mau: "den",
	gia: 5000000,
	gioitinh: "nam",
	 xemngay : function() {
	 	console.log("hom nay ngay 18-12-2020");
	}
}

var hocvien = {
	ten: "Viet",
	ho: "Nguyen",
	tuoi: 20,
	chieucao: 172,
	cannang: 45,
	tendaydu: function() {
		return this.ho + " " + this.ten;
	},
	danhgia: function() {
		if(this.chieucao/this.cannang < 3){
			return "dep trai"
		}else{return "hoi gay, can boi bo them!"}
	}
}
console.log(hocvien.tendaydu());
console.log("tuoi hoc vien la: ");
console.log(hocvien.tuoi);
console.log("danh gia la: ")
console.log(hocvien.danhgia());
