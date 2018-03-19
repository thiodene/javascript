// Loop through all inputs where user can enter or select data, create a json string and
// save them
$("[azbd_type]").each(function()
{
  azbd_type = $(this).attr("azbd_type") ;
  if (azbd_type == "email")
  {
    // For Inputs check if it has a value entered
    // If so, save it with the attached id
    value = $.trim($(this).val()) ;
    if (value != "")
    {
      // Validate the Email added by users from input
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if(!value.match(mailformat))
      {
        alert("You have entered an invalid email address!") ;
        no_error = false ;
        return false ;
      }
      else
      {
        info = addCommaToEndOfNonEmptyString(info) ;
        value = xmlbEncodeForAJAX(value) ;
        info += "\n" + '  "' + id + '": "' + value + '"'  ;
      }
    }
  }
  
  # Original Javascript -----------------------------------------------------------------------------
  function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
