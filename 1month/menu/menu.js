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


// スライドショー

// function slideSwitch() {
//     var $active = $('#slideshow img.active');

//     if ( $active.length == 0 ) $active = $('#slideshow img:last');

//     var $next =  $active.next().length ? $active.next()
//         : $('#slideshow img:first');

//     $active.addClass('last-active');

//     $next.css({opacity: 0.0})
//         .addClass('active')
//         .animate({opacity: 1.0}, 1000, function() {
//             $active.removeClass('active last-active');
//         });
// }

// $(function() {
//     setInterval( "slideSwitch()", 3000 );
// });

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 300,//スライドのスピード。初期値は300。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});
