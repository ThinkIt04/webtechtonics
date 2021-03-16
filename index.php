<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
</head>
<body>
     <h1 id="head">
          <?php
               if($name==null)
                    echo "";
               else
                    echo $_GET["name"];
          ?>
     </h1>
     <form action="index.html" method="get">
          <input type="text" name="name" id="name" placeholder="NAME">
          <input type="submit" value="SUBMIT">
     </form>
</body>
</html>