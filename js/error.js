/*
* @Author: Administrator
* @Date:   2017-09-15 20:37:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 22:41:21
*/
let span=document.getElementById('span');
let time= setInterval(function(){
	if(span.innerText<=1){
		clearInterval(time);
		location.replace('login.html');
	}
	span.innerText -=1;
},1000)