// 最初のアニメーション
// ページの読み込みが完了したら実行される関数
window.onload = function() {
	// 1秒後にメッセージを非表示にしてコンテンツを表示する
	setTimeout(function() {
		document.querySelector('.before_top_h1  ').style.display = 'none';
		document.querySelector('#bofore_top_content').style.display = 'block';
		// document.querySelector('.before_top').style.backgroundColor = "";
	}, 5000);

}
// // 5秒後に背景色を消す
// setTimeout(function() {
// 	document.querySelector('.before_top').style.backgroundColor = "";
// }, 5000);






// ヘッダー
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



// マンゴーと甚兵衛
// Wait 8 seconds before starting the animation
setTimeout(function() {
	var mango = document.getElementById("mango");
	var whale = document.getElementById("whale");
	mango.style.display = "block";
	whale.style.display = "block";
}, 10000);
  

// 画面サイズに合わせてコンテナの高さを調整する
// const container = document.querySelector('.container');
// container.style.height = window.innerHeight + 'px';

// // 画面サイズが変更された時に高さを再調整する
// window.addEventListener('resize', () => {
// container.style.height = window.innerHeight + 'px';
// });
