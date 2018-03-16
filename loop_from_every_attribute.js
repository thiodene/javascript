<script type="text/javascript">
  var itin_json    = '%itin_json%' ;
  if (itin_json.length > 0)
    var itin_obj = JSON.parse(itin_json) ;
  else
    var itin_obj = '' ;

  console.log(itin_obj) ; // debug alert

  // Parse the JSON and go through all the page options
  $("[azbd_type]").each(function()
  {
    azbd_type = $(this).attr("azbd_type") ;
    ------------------------------------------------- Etc...
  }
  
  }) ;
</script>
