// function emailValitation(){
// 	var name=document.forms["myform"]["name"].value;
// 	var email=document.forms["myform"]["email"].value;
// 	var num=document.forms["myform"]["number"].value;
// 	var gen=document.forms["myform"]["gender"].value;
// 	var regexp = /^[a-zA-Z]+$/;
// 	if(name==""||(!name.match(regexp)))
// 	{
// 		alert("Enter the valid name");
// 		return false;
// 	}
// 	if(email=="" || (email.indexOf("@",0)<0 && email.indexOf(".",0)<0))
// 	{
// 		alert("Enter valid Email");
// 		return false;
// 	}
// 	if((isNaN(num)|| num==""))
// 	{
// 		alert("Enter a number in digits");
// 		return false;

// 	}
// 	if(gen=="")
// 	{
// 		alert("Enter gender");
// 		return false;
// 	}

// }
function ValidateAlpha(evt)
    {
        var keyCode = (evt.which) ? evt.which : evt.keyCode
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
        {
        	document.getElementById("txt").innerHTML="Enter character only";
        	return false;
        }
        else{
        	document.getElementById("txt").innerHTML = "";
        }
    }
function EmailAddress(evt)
{
	var email=document.forms["myform"]["email"].value;
	if(email.includes("@" && "."))
	{
		document.getElementById("txt1").innerHTML="";
	}
	else
	{
		document.getElementById("txt1").innerHTML="Enter valid EmailAddress";
	}
}
function Phonenum(evt)
{
	var keycode=evt.which || evt.keyCode;
	if(keycode >31&& (keycode < 48 || keycode > 57))
	{
		document.getElementById("txt2").innerHTML= " Enter a number in digits";
	}
	else{
		document.getElementById("txt2").innerHTML = "";
	}
}
