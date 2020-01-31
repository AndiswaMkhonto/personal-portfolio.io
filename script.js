
function myFunction() {
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var pnum =document.getElementById('pnum').value;

    document.getElementById("myForm");
    
    //function calls
    show_alert();  
    
  }
  //A function to display a popup to confirm 
  //submission 
  function show_alert() {
    if(confirm("Do you really want to do this?") && !fname.value==" " && !lname.value==" " && !pnum.value==" ") {
      alert("Form submitted successfully");
      clearInfo();
    
    }else{
      alert("Form not submitted");
    }
    this.form.submit();
   
  }
  //A function to clear the text inputs when a button is pressed
  //if the user confirmed submission
  function clearInfo(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("pnum").value = "";    
}
