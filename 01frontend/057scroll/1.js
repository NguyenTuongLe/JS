document.addEventListener("DOMContentLoaded",function(){
	
	var trangthai = 'duoi300';

	//bat su kien khi nguoi dung scroll
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 300) {

			if(trangthai == 'duoi300'){
				console.log('dang o menu lam gi la di');
				trangthai = 'tren300';
			}
			
		}
	})
},false)
