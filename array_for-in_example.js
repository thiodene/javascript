else if (azbd_type == "multi_line")
{
  // For Multi line add new inputs filled with saved info at the respective line
  if(itin_obj.hasOwnProperty(id))
  {
    // For each saved value add a new line
    for (mline_idx in itin_obj[id])
    {
      added_line = addEmptyLineToMultiLine($(this)) ;
      added_line.find("input").val(xmlbDecodeFromAJAX(itin_obj[id][mline_idx])) ;
    }
  }            
}
