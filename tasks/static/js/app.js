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



//get Csrf Token
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
  


// setting error along with passing id 
function setError(id,field){

  if (getDataResponse['is_taken'])
  {
      document.getElementById(id+"_Error").innerHTML = "A user with this "+field+" already exists."
      document.getElementById(id+"_Error").className = "text-danger"
      document.getElementById("Id_registerButton").disabled = true;
  }
  else
  {
      document.getElementById(id+"_Error").innerHTML = "Great ! "+field+" Available"
      document.getElementById(id+"_Error").className = "text-success"
      // document.getElementById("Id_registerButton").disabled = false;
  }

  
}

//check availablity of user inputed field
function checkAvailability(id)
{
  //CREATE HTTP REQUEST
  httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'checkAvailability' , true);
  httpRequest.setRequestHeader("X-CSRFToken", getCookie("csrftoken"));
  
  httpRequest.setRequestHeader("Content-type", "application/json");
  

  //get item
  var check_item=document.getElementById(id).value;

  //checking if null value then removing the bottom area 
  if (!check_item)
    {
      document.getElementById(id+"_Error").innerHTML = "" 
    }
  
    else
     {
          var senddata= {"id":id,"check_item":check_item};
          
          //SEND  DATA
          httpRequest.send( (JSON.stringify(senddata)) );


          httpRequest.onreadystatechange=function(){  
          if(httpRequest.readyState==4)
          {
          
              if(httpRequest.status==200)
              {
              //getting data
              getDataResponse=JSON.parse(httpRequest.response)

              if ( getDataResponse['id'] == 'Input_Username' ) 
              {
                    //for username  set error 
                      setError(id,"username")
                          
                     
              }

              else if ( getDataResponse['id'] == 'Input_Email' ) 
              {
                   //for password set error 
                      setError(id,"email")
              } 

              else {

                  alert("error")

                  }
              


              

              }
              else
              {
                  alert("Error Request Not Send")
              }
          }
      }          
  }
}


//to check email id  format is valid or not
function checkemail(id){

      var email=document.getElementById(id).value;
      
      //checking wheather nullvalue
      if (!email)
      {
          document.getElementById(id+"_Error").innerHTML = "" 
      }

      //checking email formaT
      else{
         
          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
   
          if (reg.test(email) == false) {

          
          //setting info at null value area
   
           document.getElementById("Input_Email_Error").innerHTML = "Invalid Email Adress"
           document.getElementById("Input_Email_Error").className = "text-danger"
           
          }
   
          else{
          
          
          //checking availibitly of email
   
           checkAvailability(id)
   
   
          }
   
      }

  }
  

  function checkpassword(){


    if (document.getElementById('loginPassword1').value ==
    document.getElementById('loginPassword2').value) {
    document.getElementById('Input_Password_Error').style.color = 'green';
    document.getElementById('Input_Password_Error').innerHTML = 'Perfect Match';
    document.getElementById("Id_registerButton").disabled = false;

  } else {
    document.getElementById('Input_Password_Error').style.color = 'red';
    document.getElementById('Input_Password_Error').innerHTML = 'Password Not Matching';
    document.getElementById("Id_registerButton").disabled = true;
  }
}