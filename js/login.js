/*
* @Author: Administrator
* @Date:   2017-09-15 17:12:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-16 11:22:49
*/
let input=document.getElementById('input');
let pass=document.getElementById('pass');
let button=document.getElementById('button');

button.onclick=function(){
	let i=input.value.trim();
	let p=pass.value.trim();
	if(i=='zhangsan'&&p=="123456"){
		alert('sucess')
	}else{
		location.replace('error.html');
	}
}
