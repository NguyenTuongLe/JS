document.addEventListener("DOMContentLoaded",function(){
	//bat su kien cuon chuot

	var trangthai = 'duoi300';
	//lay ve menu
	var doituongmenu = document.querySelector('.menu');

	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 300) {
			if(trangthai == 'duoi300')
			{
				trangthai = 'tren300';

				doituongmenu.classList.add('nholai');
			}
			
		}
		else if (window.pageYOffset <= 300) {
			if(trangthai == 'tren300'){
				doituongmenu.classList.remove('nholai');
				trangthai='duoi300';
			}
		}

	})

},false)
