var profile_img = document.querySelector('.sec2 .img-wrapper');


var prof_img_W = profile_img.clientWidth;

profile_img.style = 'height:' + prof_img_W + 'px';


console.log(prof_img_W);


window.addEventListener("resize",function(){
	
	var profile_img = document.querySelector('.sec2 .img-wrapper');

	var prof_img_W = profile_img.clientWidth;

	profile_img.style = 'height:' + prof_img_W + 'px';

});