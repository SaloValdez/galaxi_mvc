
<?php

class RutasModel{
    public function enlacesModel(){
        if(isset($_GET['variableWeb'])){
            $variableGET = $_GET['variableWeb'];

            if(
                $variableGET == 'iniciarSesion'||
                $variableGET == 'usuarios'||
                $variableGET == 'suscripcion'||
                $variableGET == 'contactos'){
     
                 $url = "./views/modules/".$variableGET.".php";
     
             }elseif($variableGET =="inicio"){
                 $url = "./views/modules/inicio.php";
             }else{
                 $url = "./views/modules/inicio.php";
             }
            
        
        }else{
            $url = "./views/modules/inicio.php";
        }

        include $url;
    }

   
    public function mostrarPlantillaModel(){
        include "./views/template.php";
    }
    

}


