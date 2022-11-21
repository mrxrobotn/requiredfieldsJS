var b="true";
var mybt=document.getElementById('insert');
	mybt.addEventListener("click" , insertion);
function insertion()
{
	verifinput();
	if (b==true)
	{
		if(confirme("Do you really want to add this informations?"))
		{

		}
		else 
			alert("You canceled the addition");	
	}
}


function verifinput()
		{
			var s=document.getElementsByClassName("msg");
			var t=document.getElementsByTagName("input");
			for(var i=0 ; i<t.length ; i++)
			{
				if (t[i].value.length==0)
				{
					b=false;
					t[i].classList.add("erreur");
					s[i].innerHTML="This field is required";	
				}
				else 
				{
					t[i].classList.remove("erreur");
					s[i].innerHTML="";
				}
			}
		}		
