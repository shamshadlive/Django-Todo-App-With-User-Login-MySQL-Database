//toggle password button register
function togglebutton2() {
    var x = document.getElementById("loginPassword2");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("passtogglebutton2").className = "btn bi bi-eye-fill";
    } else {
      x.type = "password";
      document.getElementById("passtogglebutton2").className = "btn bi bi-eye-slash-fill";
    }
  }

  function togglebutton1() {
      var x = document.getElementById("loginPassword1");
      if (x.type === "password") {
        x.type = "text";
        document.getElementById("passtogglebutton1").className = "btn bi bi-eye-fill";
      } else {
        x.type = "password";
        document.getElementById("passtogglebutton1").className = "btn bi bi-eye-slash-fill";
      }
    }

 //toggle login password button
 function togglelogin() {
    var x = document.getElementById("loginPassword");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("passtogglebutton").className = "btn bi bi-eye-fill";
    } else {
      x.type = "password";
      document.getElementById("passtogglebutton").className = "btn bi bi-eye-slash-fill";
    }
  }


//form sumbit

window.addEventListener('load', function () {
    document.getElementById("id_title").className = "form-control inputareast";
  })
// 


//getdata
