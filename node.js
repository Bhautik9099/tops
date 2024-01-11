function lg() {
  var nme = document.getElementById("name").value;
  var pass = document.getElementById("pss").value;

  if (nme == "9099969066" && pass == "9099969066") {
    alert("You are Logged in successfully");
    window.location="dashbord.html";
  } else {
    alert("password is incoroct");
    window.location="index.html";
  }
}
function logout()
{
    if(confirm('yes or no')==true)
    {
      window.location='index.html'
    }
    else{
      window.location='dashbord.html'
    }
}
