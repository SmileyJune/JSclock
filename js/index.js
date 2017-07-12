var h_tens=document.getElementById("hours_tens");
var h_units=document.getElementById("hours_units");
var min_tens=document.getElementById("Minutes_tens");
var min_units=document.getElementById("Minutes_units");
var s_tens=document.getElementById("seconds_tens");
var s_units=document.getElementById("seconds_units");

setInterval(function(){
	var time={
		h   : new Date().getHours(),
		min : new Date().getMinutes(),
		s   : new Date().getSeconds()
	/*console.log(today)*/
	};
	if(time.h<10){
		time.h="0"+time.h;
	}
	if(time.s<10){
		time.s="0"+time.s;
	}
	if(time.min<10){
		time.min="0"+time.min;
	}
	console.log(time.min+":"+time.s);

	var hTens_num  = time.h.toString()[0];
	var hUnits_num = time.h.toString()[1];
	var mTens_num  = time.min.toString()[0];
	var mUnits_num = time.min.toString()[1];
	var sTens_num  = time.s.toString()[0];
	var sUnits_num = time.s.toString()[1];
	
	change(hTens_num,h_tens);
	change(hUnits_num,h_units);
	change(mTens_num,min_tens);
	change(mUnits_num,min_units);
	change(sTens_num,s_tens);
	change(sUnits_num,s_units);
	
},500);


function change(num,id_name){
	switch(num){
	case "0":
		id_name .className = "zero";
		break;
	case "1":
		id_name .className = "one";
		break;
	case "2":
		id_name .className = "two";
		break;
	case "3":
		id_name .className = "three";
		break;
	case "4":
		id_name .className = "four";
		break;
	case "5":
		id_name .className = "five";
		break;
	case "6":
		id_name .className = "six";
		break;
	case "7":
		id_name .className = "seven";
		break;	
	case "8":
		id_name .className = "eight";
		break;	
	case "9":
		id_name .className = "nine";
		break;	
	}
}
