function validate()
{
    var username = document.getElementsByName("urname")[0].value;
    var myemail = document.getElementsByName("uremail")[0].value;
    var mygender = document.getElementsByName("urgender").value;
    var mybranch = document.getElementsByName("branchloc").value;
    var mymessage = document.getElementsByName("urmessage")[0].value;
    var validdata = 1;

    if(username.length < 5 || username.length  > 20 )
    {
        validdata = 0;
        document.getElementById("validation").innerHTML = "Username length must be more than 5 and less than 20";
    }

    if(!myemail.endsWith(".com"))
    {
        validdata = 0;
        document.getElementById("emailvalidation").innerHTML = "Email must ends with '.com'";
    }

    if(mygender == 0)
    {
        validdata = 0;
        alert("Choose Gender");
    }

    if(mybranch == 0)
    {
        validdata = 0;
        alert("Choose Branch");
    }

    if(mymessage.length==0 || mymessage.length>500)
    {
        validdata = 0;
        alert("Message must be less than 500 characters");
    }

    if(validdata==1)
    {
        document.getElementById("guddata").innerHTML = "Sending Message Success. Thank You!!";
    }





    


}