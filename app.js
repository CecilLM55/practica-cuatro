/* llamar otro modulo (pestana)
no se puede tomar funciones de otro archivo con require.
require('./greet');
*/
//se vuelve un function expression.
let greet = require('./greet');
greet();
let obj = {};
//OBJETO KEY: VALUE .contiene una funcion, caracteres o arrays de objetos o funciones.
let persona = {
    nombre: 'Carlos',
    apellido: 'Ulibarri',
    getName: function () { //objeto con funcion miembro.
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: { 
        calle: 'Madero #144',
        colonia: 'Centro',
        cp: 28000,
        municipio: 'Colima'
    },
    getAddress: function() {
            return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }

}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio);
console.log(persona.getAddress());
console.log(obj);