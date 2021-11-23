
function validate() {
    if( document.myForm.firstName.value == "" ) {
        alert( "Please provide your first name!" );
        document.myForm.firstName.focus() ;
        return false;
    }
			
    if( document.myForm.lastName.value == "" ) {
        alert( "Please provide your last name!" );
        document.myForm.lastName.focus() ;
        return false;
    }
		
    if( document.myForm.Phone.value == "" || isNaN( document.myForm.Phone.value ) ||
       document.myForm.Phone.value.length != 10 ) {
        alert( "Please provide a phone number in the format ##########." );
        document.myForm.Phone.focus() ;
        return false;
    }

    function validateEmail() {
        var emailID = document.myForm.EMail.value;
        atpos = emailID.indexOf("@");
		dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )){
				alert("Please enter correct email ID")
				document.myForm.EMail.focus() ;
				return false;
			}

			return( true );
		}		  
    if( document.myForm.Address.value == "" ) {
        alert( "Please provide your Address!" );
        document.myForm.Address.focus() ;
        return false;
    }
    if( document.myForm.City.value == "" ) {
        alert( "Please provide the City you live in!" );
        document.myForm.City.focus();
        return false;
    }			  
    if( document.myForm.State.value == "" )
    {
        alert( "Please provide the State you live in!" );
        document.myForm.State.focus() ;
        return false;
    }
			              
			 if( document.myForm.ZipCode.value == "" || isNaN( document.myForm.ZipCode.value ) ||
				document.myForm.ZipCode.value.length != 5 ) 
			 {
				alert( "Please provide a zip in the format #####." );
				document.myForm.ZipCode.focus() ;
				return false;
			 }
              
              
			 if( document.myForm.Country.value == "-1" ) 
			 {
				alert( "Please provide your country!" );
				return false;
			 }
			  
			 return( true );
		  }
		  
function submitStuff() { 
    alert("you have been registered");
}
