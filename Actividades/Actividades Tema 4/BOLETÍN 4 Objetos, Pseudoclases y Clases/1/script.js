// 1. Crear objeto Vehículo.
// a. Crear constructor.
// b. Crear propiedades: marca, modelo, color y año fabricación.
// c. Instanciar dos objetos.
// d. Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca.
// e. Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color.
// f. Crear el método mostrarDatos.
// g. Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha
// acelerado a la velocidad pasada.
// h. Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _,
// modelo_, de color_ ha arrancado.
// i. Asignar una nueva propiedad cilindrada.
// j. Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ ha
// parado).
// k. Realizar las siguientes modificaciones en el Objeto 1 : la propiedad marca no podrá ser eliminadas, la
// propiedad modelo tendrá como valor por defecto ‘xx’ y no podrá ser modificado y los métodos no serán
// enumerables.
// l. Borrar la propiedad marca, modificar la propiedad modelo y volver a mostrar los datos de Objeto 1.ç
// m. Muestra todas las propiedades de Objeto1 utilizando: for in , Object.hasOwnPropertyNames(),
// Object.keys().  
class vehiculo {
    constructor(marca, modelo, color, anoFabricacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anoFabricacion = anoFabricacion;
        this.arrancar = function () {
            if (isNaN(this.velocidad)) {
                console.log(`El coche de marca ${this.marca},modelo ${this.modelo}, de color ${this.color} ha arrancado.`)
                this.velocidad = 0;
            } else {
                console.log(`El coche de marca ${this.marca},modelo ${this.modelo}, de color ${this.color} ya esta en marcha.`)
            }
        };
    }
    mostrarDatos() {
        return `El coche es un ${this.marca} ${this.modelo} de color ${this.color} del año ${this.anoFabricacion}`;
    }
    acelerar(velocidad) {
        if (!isNaN(this.velocidad)) {
            this.velocidad += velocidad;
        }
    }
    frenar() {
        let dev;
        if (this.velocidad > 0) {
            dev = `El coche de marca ${this.marca},modelo ${this.modelo}, de color ${this.color} ha parado.`;
            this.velocidad = 0;
        }
        else {
            dev = `El coche de marca ${this.marca},modelo ${this.modelo}, de color ${this.color} ya esta parado.`
        }
        return dev;
    }
}


vehiculo.prototype.cilindrada;


a1 = new vehiculo("Mishubishi", "Pajero", "Amarillo Chillon", 1995);
console.log(a1);
a2 = new vehiculo("For", "Focus", "Rosa", 1995);
console.log(a1);
console.log(a1.marca)
console.log(a2['color'])
console.log(a2.mostrarDatos())
console.log(a2.arrancar());
console.log(a2.arrancar());
a2.acelerar(10);
console.log(a2)
console.log(a2.frenar())
console.log(a2.frenar())
console.log(a2)
a2.cilindrada = "250cc";
console.log(a2.cilindrada)




Object.defineProperties(a1,
    {
        marca: {
            configurable: false,
            writable: false,
            enumberable: true,
        }
        , modelo: {
            value: 'xx',
            writable: false,
            configurable: true,
            enumerable: true
        }
        , arrancar: {
            enumerable: false,
            writable: true,
            configurable: true,
        }
        , acelerar: {
            enumerable: false,
            writable: true,
            configurable: true
        }
        , frenar: {
            enumerable: false,
            writable: true,
            configurable: true
        }

    }
);


delete a1.marca;
a1.modelo = 'Testarossa';
console.log(a1.mostrarDatos());


console.log('-------MUESTRO POR FOR IN.--------\n');
for (var i in a1) {
    console.log(`${i}: ${a1[i]}.\n`);
}
console.log('---------MUESTRO POR Object.hasOwnPropertyNames().---------\n');
console.log(Object.getOwnPropertyNames(a1));
console.log('-------MUESTRO POR Object.keys().----------\n');
var keys = Object.keys(a1);
console.log(keys)



coche1 = new vehiculo("Ferrari", "Scaglietti", "Rojo", 2010)
coche2 = new vehiculo("BMW", "Z4", "Blanco", 2010)
coche3 = new vehiculo("Seat", "Toledo", "Azul", 1999)
coche4 = new vehiculo("Fiat", "500", "Verde", 1995)

Object.defineProperties(coche1,
    {
        arrancar: {
            enumerable: false,
            writable: false,
            configurable: true,
        }
    }
);
Object.defineProperties(coche2,
    {
        arrancar: {
            enumerable: false,
            writable: false,
            configurable: true,
        }
    }
);
Object.defineProperties(coche3,
    {
        arrancar: {
            enumerable: false,
            writable: false,
            configurable: true,
        }
    }
);
Object.defineProperties(coche4,
    {
        arrancar: {
            enumerable: false,
            writable: false,
            configurable: true,
        }
    }
);



pintarTabla(coche1, coche2, coche3, coche4);

function pintarTabla(...vehiculos) {
    body.innerHTML = `<table id='table' border="2">
                    <thead>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>COLOR</th>
                        <th>AÑO FABRICACIÓN</th>
                    </thead>`;
    for (var i = 0; i < vehiculos.length; i++) {
        table.innerHTML += `<tr id='${i}'>`;
        for (var prop in vehiculos[i]) {
            if (vehiculos[i].hasOwnProperty(prop)) {
                document.getElementById(i).innerHTML += `<td>${vehiculos[i][prop]}</td>`;
            }
        }
        table.innerHTML += `</tr>`;
    }
    body.innerHTML += `</table>`;
}