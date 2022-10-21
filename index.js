function Verify() {
    var userRef = "MamtaVyas";
    var passRef = "123mamata";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
    document.write("you entered correct username and password")
    } 
    else {
    document.write("It seems you are making a mistake...")
    }
   };
  
  //Rules button
  function Show(id)
  {
    if (document.getElementById(id).style.display == 'none') {
         document.getElementById(id).style.display = 'block';
    }
    else {
         document.getElementById(id).style.display = 'none';
    }
  };