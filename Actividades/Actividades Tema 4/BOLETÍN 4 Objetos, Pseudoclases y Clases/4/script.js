//4. Crear una pseudoclase llamada Factura que permita instanciar objetos de ese tipo de la siguiente forma:
// Factura(cliente, elementos, info)
// Cliente es un objeto que guarda los datos del cliente(nombre, dirección, teléfono y nif) y
// elementos es un array que contiene la siguiente información por cada uno de los ítems que puede tener
// la factura: descripción, cantidad y precio.
//     Info, sobre cada factura se desea guardar los siguientes datos: base imponible, iva, total y
// forma de pago.Por defecto, tendrán como valores 0, 21, 0, "contado" respectivamente.
// Añade con posterioridad a la pseudoclase Factura:
//  -Propiedad empresa que guardará información sobre la empresa que emite la factura(nombre,
//     dirección, teléfono y cif).
// - Método que calcule el total de la factura(con el IVA aplicado);
// - Método que muestre el total.
// Realiza una instanciación de Factura y muestra su total.
// Modifica el ejercicio para que todas las propiedades sean privadas y el método calculaTotal.
// El método muestraTotal será privilegiado. 

function Factura(cliente, elementos, info) {
    var _cliente = cliente;
    var _elementos = elementos;
    var _info = info;

    this.getCliente = function () {
        return _cliente;
    }

    this.getElementos = function () {
        return _elementos;
    }

    this.getInfo = function () {
        return _info;
    }

    this.calcularTotal = function () {
        var res = ((_elementos[1] * _elementos[2]) * (1 + (_info.getIva()) / 100));
        _info.setTotal(res);
    }

}

Factura.prototype.empresa = new Empresa("Amazon", "C/ Madrid (Madrid)", "+34900300400", "B44444488");




Factura.prototype.muestraTotal = function () {
    console.log(this.getInfo().getTotal());
};


function Cliente(nombre, direccion, telefono, nif) {
    var _nombre = nombre;
    var _direccion = direccion;
    var _telefono = telefono;
    var _nif = nif;

    this.getNombre = function () {
        return _nombre;
    }

    this.getDireccion = function () {
        return _direccion;
    }

    this.getTelefono = function () {
        return _telefono;
    }

    this.getNif = function () {
        return _nif;
    }

}





function Info(base = 0, iva = 21, total = 0, formaPago = "contado") {
    var _base = 0;
    var _iva = iva
    var _total = 0;
    var _formaPago = formaPago

    this.getTotal = function () {
        return _total;
    }

    this.getBase = function () {
        return _base;
    }

    this.setTotal = function (t) {
        _total = t;
    }
    this.getIva = function () {
        return _iva;
    }
    this.setFormaPago = function (fp) {
        _formaPago = fp;
    }
    this.getFormaPago = function () {
        return _formaPago;
    }
}


function Empresa(nombre, direccion, telefono, cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
}


cl1 = new Cliente("Ramon", "Calle Verdadera", "2525252525", "53658960")
arr = ["Peras", 20, 0.5];
info1 = new Info();
f1 = new Factura(cl1, arr, info1);
f1.calcularTotal();
f1.muestraTotal();
