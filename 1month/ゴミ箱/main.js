const fixedElm = document.getElementById('header');
let scrollPoint = 0; // 現在のスクロール位置をセットする変数
let lastPoint = 0; // 1つ前のスクロール位置をセットする変数

window.addEventListener("scroll",function(){
	
	scrollPoint = window.scrollY;
	
	if(scrollPoint > lastPoint){ // 下スクロールの場合
		fixedElm.classList.add('fixed-hide');
	}else{ // 上スクロールの場合
		fixedElm.classList.remove('fixed-hide');
	}
	
	lastPoint = scrollPoint;
});
