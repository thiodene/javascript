
# Finds all inputs with a name attribute that contains 'man' and sets the value with some text.

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>attributeContains demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<input name="man-news">
<input name="milkman">
<input name="letterman2">
<input name="newmilk">
 
<script>
$( "input[name*='man']" ).val( "has man in it!" );
</script>
 
</body>
</html>

# Original
https://api.jquery.com/attribute-contains-selector/
