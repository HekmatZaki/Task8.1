function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";

    if (h > 12){
        session = "PM";
    }  
    else{session = "AM";}
    
    if(h > 12){
        h = h - 12; 
    }
 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerHTML= time;
    setTimeout(showTime, 1000);
}
showTime();


function myForm(){
    var Fname=document.getElementById("Fname").value;
    var Sname=document.getElementById("Sname").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var psw=document.getElementById("psw").value;
    var alert=document.getElementById("error");

    var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regphone=/^\d{10}$/;                                       
    var regFname = /\d+$/g;
    var regSname = /\d+$/g;

    if (Fname == "" || regFname.test(Fname)) {
       alert("Please enter your Fname properly.");
       Fname.focus();
       return false;}

    else if (Sname == "" || regSname.test(Sname)) {
        alert("Please enter your Sname properly.");
        Sname.focus();
        return false;}

    else if (email == "" || !regemail.test(email)) {
        alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
        }

    else if (phone == "" || !regphone.test(phone)) {
          alert("Please enter valid phone number.");
          phone.focus();
          return false;
          }
    else if (psw == "") {
        alert("Please enter your password");
        psw.focus();
        return false;
         }
    
    else if(psw.length <6){
        alert("Password should be atleast 6 character long");
        psw.focus();
        return false;
         }
     else { alert("Done?");
         return true;
        }


}