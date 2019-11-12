// 6. Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
// • Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra
// por pantalla las propiedades de la persona.
// • Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método
// registrar().
// • Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método
// asignar().
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        return `Me llamo ${this.nombre} tengo ${this.edad} años y mi genero es ${this.genero}`
    }

}

class Estudiante extends Persona {
    constructor(nombre, edad, genero) {
        super(nombre, edad, genero)
    }
    registrar(curso, grupo) {
        this.curso = curso;
        this.grupo = grupo;
    }
}
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(alumno, curso, grupo) {
        alumno.registrar(curso, grupo);
    }
}

a1 = new Estudiante("Juan", 25, "Genderpunk")
p1 = new Profesor("Eduardo", 75, "Maverique", "Lenguaje de Marcas", "69");

console.log(a1);
console.log(p1);

p1.asignar(a1, "Primero", "D");
console.log(a1);