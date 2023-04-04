
const contenedorMenu = document.querySelector("#content_menu");
const btnCerrarMenu = document.querySelector("#btn_cerrar_menu");
const btnMenu = document.querySelector("#btn_menu"); //boton bars
const menu = document.querySelector("#mostrar_menu");


// Para mostrar y esconder menu (SMARTPHONE and TABLETS)
		btnMenu.addEventListener("click",function(e) {
            contenedorMenu.style.display = 'block';
			menu.classList.toggle("mostrar-menu");
		});
        btnCerrarMenu.addEventListener("click",function(e) {
            contenedorMenu.style.display = 'none';
			menu.classList.remove("mostrar-menu");
		});

// click fuera del elemnto NAV (cerrrar menu)
        document.addEventListener("mouseup", function(event) {
            var obj = document.getElementById("mi_menu");
            if (!obj.contains(event.target)) {
                contenedorMenu.style.cursor = 'pointer';
                menu.classList.remove("mostrar-menu");
                contenedorMenu.style.display = 'none';
            }else{
                contenedorMenu.style.display = 'block';
            }
        });




const contenedorUserMos = document.querySelector("#content_user_mos");
const btnCerrarMenuUser = document.querySelector("#btn_cerrar_menu_user");
const btnAbrirMenuUser = document.querySelector("#btn_menu_user"); //boton user
const menuUser = document.querySelector("#mostrar_menu_user"); //id del contenedor menu user

// Para mostrar y esconder menu user 
btnAbrirMenuUser.addEventListener("click",function(e) {
    contenedorUserMos.style.display = 'block';
    menuUser.classList.toggle("mostrar-menu-user");
});

btnCerrarMenuUser.addEventListener("click",function(e) {
    contenedorUserMos.style.display = 'none';
    menuUser.classList.remove("mostrar-menu-user");
});

// click fuera del elemnto NAV (cerrrar menu)
document.addEventListener("mouseup", function(event) {
    var obj = document.getElementById("mi_menu_user");
    if (!obj.contains(event.target)) {
        contenedorUserMos.style.cursor = 'pointer';
        menuUser.classList.remove("mostrar-menu-user");
        contenedorUserMos.style.display = 'none';
    }else{
        // alert('holo');
        contenedorUserMos.style.display = 'block';
    }
});


// TODO: configurando formulario suscripcion TAB ()


const option1 = document.getElementById("opcion1");
const option2 = document.getElementById("opcion2");
const content1 = document.getElementById("content1");
const content2= document.getElementById("content2");

let chose = 1;

const changeOption =()=>{
    chose ==1 ? (
        option1.classList.value = 'tab option-active',
        content1.classList.value = 'content content-active'  
    ):(
        option1.classList.value = 'tab',
        content1.classList.value = 'content' 
    )


    chose ==2 ? (
        option2.classList.value = 'tab option-active',
        content2.classList.value = 'content content-active'  
    ):(
        option2.classList.value = 'tab',
        content2.classList.value = 'content' 
    )
}

option1.addEventListener('click',()=>{
    chose =1
    changeOption()
    // alert('go');

})

option2.addEventListener('click',()=>{
    // alert('go');
    chose =2
    changeOption()

})