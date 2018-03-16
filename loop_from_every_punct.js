multi_line_val = '' ;
$(this).find("p").each(function()
{
  if ($(this).hasClass("hidden_line")) // Ignore this one
    return ; // like continue

  // Find the entered value and add to result if not empty
  val = $.trim($(this).find("input").val()) ;
  if (val.length > 0)
  {
    multi_line_val = addCommaToEndOfNonEmptyString(multi_line_val) ;
    multi_line_val += '"' + xmlbEncodeForAJAX(val) + '"' ;
  }
}) ;
