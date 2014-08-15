;(function(){
	var form = document.querySelector('#fileForm');
	var formData;
	var submitBtn = document.querySelector('#submit');
	var oReq = new XMLHttpRequest();
	submitBtn.addEventListener('click',function(e){
		e.preventDefault();
		oReq.open("POST", "/receiver");
		formData = new FormData(form);
		oReq.send(formData);
	},false);

})()