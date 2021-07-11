let myImage=document.querySelector('img');

myImage.onclick=function()
{
	let img_src=myImage.getAttribute('src');
	if(img_src=='images/firefox-icon.png')
	{
		img_src='images/firefox-icon2.jpg';
		myImage.setAttribute('src',img_src);
	}
	else
	{
		img_src='images/firefox-icon.png';
		myImage.setAttribute('src',img_src);
	}
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
	let myName=prompt('username:');
	if(!myName||myName === null)
	{
		setUserName();
	}
	else
	{
		localStorage.setItem('name',myName);
		myHeading.textContent='Mozilla酷毙了，'+myName;
	}
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	let myName=localStorage.getItem('name');
	myHeading.textContent='Mozilla酷毙了'+myName;
}

myButton.onclick=function(){
	setUserName();
}
