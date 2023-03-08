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

// 順番に画像を出したい
function delayScrollAnime() {
	var time = 0.5;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
    delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述