document.addEventListener("DOMContentLoaded",function(){
	
	//khai bao cac bien can dung
	var nut =document.querySelector('.nut'),
	    menutrai = document.querySelector('.menutrai'),
	    den = document.querySelector('.den'),
	    khoito = document.querySelector('.noidungto');

	    //khi click vao nut xanh 
	    nut.onclick = function(){
	    	den.classList.add('len');

	    	//cho ca khoi to dichj sang phai
	    	khoito.classList.add('dichphai');
	    }

	    den.onclick=function(){
	    	den.classList.remove('len');
	    	khoito.classList.remove('dichphai');
	    }
},false)
