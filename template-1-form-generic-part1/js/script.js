/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me). Este encabezado debe mantenerse intacto,
excepto si este es un proyecto de un estudiante.
*/
document.addEventListener("DOMContentLoaded", () => {

    var total = 0;
    var listaProducto = [];

     // Escuchamos el click del botón
     const $botonGuardar = document.querySelector("#btnGuardar");
    

     $botonGuardar.addEventListener("click", () => {
        console.log("Holaa entre");
        const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
     });


    // const $botonAgregar = document.querySelector("#btnAgregar");
    //  $botonAgregar.addEventListener("click", () => {
    //    var nombre = document.getElementById("IdNombre");
    //    var detalle = document.getElementById("IdDetalle").value;
    //    var cantidad = document.getElementById("IdUnidad").value;
    //    var precio = document.getElementById("IdPrecio").value;

    //    total = total + (precio*cantidad);

    //    //agregar producto a la lista
    //    listaProducto.add({nombre,detalle,cantidad,precio});

    //    //imprimir en consola el listado de producto agregados (test unitario de la lista)
    //    listaProducto.forEach(element => { console.log(element) });
    // });

});