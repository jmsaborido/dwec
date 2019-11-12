// 7. Queremos implementar la siguiente estructura:
// - Un Empleado se define con las propiedades nombre(cuyo valor por defecto es una cadena
// vacía), y un departamento(cuyo valor por defecto es "General").
// - Un Director está basado en Empleado.Añade la propiedad informes(cuyo valor por defecto es
// un array vacío).
// - Un Trabajador está basado también en Empleado.Añade la propiedad proyectos(cuyo valor por
// defecto es un array vacío).
// - Un Ingeniero está basado en Trabajador.Añade la propiedad máquina(cuyo valor por defecto es
// una cadena vacía) y sobreescribe la propiedad departamento con el valor "Ingeniería".
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

class Empleado {
    constructor(nombre = "", departamento = "general") {
        this.nombre = nombre;
        this.departamento = departamento;
    }
}

class Director extends Empleado {
    constructor(nombre, departamento, informes = []) {
        super(nombre, departamento);
        this.informes = informes;
    }

}
class Trabajador extends Empleado {
    constructor(nombre, departamento, proyectos = []) {
        super(nombre, departamento);
        this.proyectos = proyectos;
    }
}

class Ingeniero extends Trabajador {
    constructor(nombre, proyectos, maquina = []) {
        super(nombre, "Ingenieria", proyectos);
        this.maquina = maquina;
    }
}

e1 = new Empleado();
e2 = new Empleado("Juan", "Matematicas");
d1 = new Director()
d2 = new Director("Ruben", "Mandamas", ["informe 1", "informe 2"])
t1 = new Trabajador()
t2 = new Trabajador("Ruben", "Lengua", ["proyecto 1", "proyecto 2"])
d2 = new Director("Ruben", "Mandam  as", ["informe 1", "informe 2"])
i1 = new Ingeniero()
i2 = new Ingeniero("Ruben", ["proyecto 1", "proyecto 2"], "Yo mismo")

console.log(e1);
console.log(e2);
console.log(d1);
console.log(d2);
console.log(t1);
console.log(t2);
console.log(i1);
console.log(i2);
