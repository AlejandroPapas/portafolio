const typed = new Typed('.typed', {
    strings: ['Desarrollador Web','Estudiante de TSU', '21 años'],
    typeSpeed:75,
    startDeLay:10000,
    backSpeed: 65,
    loop: true
});

const app = new Vue({
    el:'#app',
    data:{
        proyecto:[{nombre:"Simulación de Carrito de Compras", descripcion:"Muestra de productos mediante la base de datos, simulación de compra, aplicación de CRUD",imagen:""},
        {nombre:"", descripcion:"",imagen:""}
        ]
    }
})