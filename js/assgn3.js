
//Row1
    var arrimg=["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpeg","images/image5.jpeg","images/image6.jpeg","images/image7.jpeg","images/image8.jpeg","images/image9.jpeg","images/image10.jpeg"]
    var i=0;
    
    function slideshow(){
       
        console.log(arrimg[i]);
        document.getElementById("img").setAttribute("src",arrimg[i]);
        if(i<9){
            i++;
        }
        else{
            setTimeout();
        }        
    }
    function startshow(){
        var x= document.getElementById("interval").value;
        x*=1000;
        console.log(x);
        setInterval(slideshow,x);
    }
//Row1 end

//Row2 

function add(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)+Number(num2);
    document.getElementById("ans").innerHTML=sum;
}

function mul(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)*Number(num2);

    document.getElementById("ans").innerHTML=sum;
}

function sub(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)-Number(num2);
    document.getElementById("ans").innerHTML=sum;
    $("#ans").css("background-color", "");
}

function div(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var sum=Number(num1)/Number(num2);
    document.getElementById("ans").innerHTML=sum;
}
    
//Row2 end
//Row3 

  $("#email").blur(function(){
   
    var email=document.getElementById("email").value;
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res= re.test(email);
    if(res==true){
        $(this).css("background-color", "green");
        $('#email').css({"color" : "white"});
    }
    else{
        $(this).css("background-color", "red");
        $('#email').css({"color" : "white"});    }
  });

//Row3 end
