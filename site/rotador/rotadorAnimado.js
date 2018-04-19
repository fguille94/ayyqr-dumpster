$(function() {

	console.log('##### START #####');
	function ejecutalo () {
		console.log('img1 func');
		$(".img1").css('margin-left','-100%');
		$(".img1").css('transition','all ease-in-out 2s');

		console.log('img2 func');
		setTimeout(function () {
			console.log('img2 func INSIDDDDD');
			$(".img2").css('margin-left','-100%');
			$(".img2").css('transition','all ease-in-out 2s');
		},1000);

		console.log('img3 func');
		setTimeout(function () {
			console.log('img3 func INSIDDDDD');
			$(".img3").css('margin-left','-100%');
			$(".img3").css('transition','all ease-in-out 2s');
		},2000);

		console.log('img4 func');
		setTimeout(function () {
			console.log('img4 func INSIDDDDD');
			$(".img4").css('margin-left','-100%');
			$(".img4").css('transition','all ease-in-out 2s');
		},3000);
		console.log('##### END #####');
	}



	setInterval(ejecutalo, 500);

});
//
//
// setInterval(function() {
// 	console.log('a');
// 	$(".img2").css('margin-left','-100%')
// 	console.log('b');
// 	$(".img2").css('transition','all ease-in-out 2s')
//
// 	setTimeout(function () {
// 		console.log('c');
// 		$(".img3").css('margin-left','-100%')
// 		console.log('d');
// 		$(".img3").css('transition','all ease-in-out 2s')
// 	},5000)
//
// 	setTimeout(function () {
// 		console.log('e');
// 		$(".img4").css('margin-left','-100%')
// 		console.log('f');
// 		$(".img4").css('transition','all ease-in-out 2s')
// 	},9000)
//
// },15000);
