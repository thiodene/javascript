// Add initial empty lines to each multi-line input
empty_multi_line = true ;
$("#" + id + " input[type=text]").each(function()
{
  if ($(this).val().length > 0)
  {
    if (empty_multi_line)
    {
      info = addCommaToEndOfNonEmptyString(info) ;
      info += "\n" + '  "' + id + '": [' + '"' + xmlbEncodeForAJAX($(this).val()) + '"' ;
    }
    else
      info += ',"' + xmlbEncodeForAJAX($(this).val()) + '"' ;
    empty_multi_line = false ;

  }
}) ;
