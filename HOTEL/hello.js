
function change()
{
  document.getElementById("ch1").src="img/re1.jpg"
}
function preimage()
{
  document.getElementById("ch1").src="img/h3.jpg"
}


function change1()
{
  document.getElementById("ch2").src="img/g1.jpg"
}
function preimage1()
{
  document.getElementById("ch2").src="img/h3.jpg" 
}



function change3()
{
  document.getElementById("ch3").src="img/g4.jpg"
}
function preimage3()
{
  document.getElementById("ch3").src="img/h2.jpg" 
}






 function GetData()
 {
   var myid= document.Fill.n1.value;
   
   if(myid==""){
     docujment.getElementById("e1").innerHTML="please enter you email id..."
   }
 }

 
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

}

function myFun() {
  var dots1 = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// about page  first booking form validation
function validation()
		{
			var mynm=document.f1.nm.value;
			var myd1=document.f1.d1.value;
			var myd2=document.f1.d2.value;


			if (mynm=="")
			 {
			 	alert("please enter name");
			 	document.f1.nm.focus();
			 	return false;
			 }
       if (myd1=="")
			 {
			 	alert("please enter checkin date .....");
			 	document.f1.d1.focus();
			 	return false;
			 }if (myd2=="")
			 {
			 	alert("please enter checkout  date .....");
			 	document.f1.d2.focus();
			 	return false;
			 }
			}
   

// about   second  booking form validation

      function val()
      {
        var mynm=document.f2.nm.value;
        var myd1=document.f2.d1.value;
        var myd2=document.f2.d2.value;
  
  
        if (mynm=="")
         {
           alert("please enter name");
           document.f2.nm.focus();
           return false;
         }
         if (myd1=="")
         {
           alert("please enter checkin date .....");
           document.f2.d1.focus();
           return false;
         }if (myd2=="")
         {
           alert("please enter checkout  date .....");
           document.f2.d2.focus();
           return false;
         }
        }
     

// about   third  booking form validation

function val()
{
  var mynm=document.f3.nm.value;
  var myd1=document.f3.d1.value;
  var myd2=document.f3.d2.value;


  if (mynm=="")
   {
     alert("ple3ase enter name");
     document.f3.nm.focus();
     return false;
   }
   if (myd1=="")
   {
     alert("please enter checkin date .....");
     document.f3.d1.focus();
     return false;
   }if (myd2=="")
   {
     alert("please enter checkout  date .....");
     document.f3.d2.focus();
     return false;
   }
  }


  // document.getElementById('btnexplore').addEventListener("click",New);
  // function New()
  // {
  //   document.getElementById('change').innerHTML="l"
  // }



  document.getElementById('btnr').addEventListener('click',redtheme);
  document.getElementById('btnw').addEventListener('click',whitetheme);
 

  function redtheme()
  {
      document.getElementById("pagebody").style.backgroundColor="black";
      document.getElementById("bann").style.backgroundImage=" url(./im/b1.jpg)";
      document.getElementById("btnr").style.backgroundColor="black";
      document.getElementById("btnw").style.backgroundColor="white";
      // document.getElementById("header_wrapper ").style.backgroundColor="black";
      document.getElementById("pra").style.color="white";
      document.getElementById("pra1").style.color="white";
      document.getElementById("head").style.color="red";
      document.getElementById("btnexplore").style.color="white";
      document.getElementById("btnexplore").style. border="red";
      document.getElementById("headhh").style. color="pink";
      document.getElementById("headh").style. color="red";
      document.getElementById("headss").style. color="pink";
      document.getElementById("heads").style. color="red";
      document.getElementById("headtt").style. color="pink";
      document.getElementById("headt").style. color="red";
      document.getElementById("headgg").style. color="pink";
      document.getElementById("headg").style. color="red";
      document.getElementById("headpp").style. color="pink";
      document.getElementById("headp").style. color="red";
       document.getElementById("headbb").style. color="pink";
      document.getElementById("headb").style. color="red";
      document.getElementById("contact").style. color="white";
      
  //     
  }
  function whitetheme()
  {
    document.getElementById("pagebody").style.backgroundColor="white";
    document.getElementById("bann").style.backgroundImage="url(./im/im1.jpg)";
      document.getElementById("btnr").style.backgroundColor="white";
      document.getElementById("btnw").style.backgroundColor="black"; 
      document.getElementById("pra").style.color="black";
      document.getElementById("pra1").style.color="black";
      document.getElementById("head").style.color="#021832";
      document.getElementById("btnexplore").style.color="black";
      document.getElementById("btnexplore").style. border="021832";
      document.getElementById("headhh").style. color="black";
      document.getElementById("headh").style. color="#021832";
      document.getElementById("headss").style. color="black";
      document.getElementById("heads").style. color="#021832";
      document.getElementById("headtt").style. color="black";
      document.getElementById("headt").style. color="#021832";
      document.getElementById("headgg").style. color="black";
      document.getElementById("headg").style. color="#021832";
      document.getElementById("headpp").style. color="black";
      document.getElementById("headp").style. color="#021832";
      document.getElementById("headbb").style. color="black";
      document.getElementById("headb").style. color="#021832";
   }
 
 
 