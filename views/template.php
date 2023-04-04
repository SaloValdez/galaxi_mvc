<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>..:: Mi primera aplicacion web ::..</title>








<?php

include "./views/sections/script.php";

?>



</head>





<body>

<?php

include "./views/sections/menu.php";

?>

    <section class="seccion_contenido">
    
    <?php

            $obj = new RutasModel();
            $obj->enlacesModel();
            
    ?>


    </section>


<?php

include "./views/sections/pie.php";

?>


</body>

</html>