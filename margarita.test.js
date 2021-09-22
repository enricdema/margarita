/*Deshoja la margarita y descubre si tu amad@ te quiere o no te quiere.

Descripción
Partís de una margarita de número variable de pétalos.
Deshojar la margarita significa arrancarle un pétalo cada segundo (tip: pensad en setInterval())
Cada pétalo "arrancado" significa imprimir en pantalla "me quiere!" o "no me quiere!!!".
El programa resolverá con el valor último pintado en AZUL si me quiere o en ROJO si no me quiere (tip: chalk)
Detalles
Devuelve una promesa con el mensaje que toque y encadena la impresión por la consola.

 */
import margarita from './margarita'
import {jest} from '@jest/globals'

// funcion para entrar dentro de rango
expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
});

describe('Margarita',()=>{
    describe('buscar margarita',()=>{
        test('inicializar margarita con petalos random',()=>{
           return  margarita.petalos(2,4).then(data => expect(data).toBeWithinRange(2,4));
        })
        /*test('no hay suficientes petalos',()=>{
            expect.assertions(1);
            return margarita.petalos(1,20).then(data => expect(error.message).toBe('numero massa petit o gran'));
        })*/
    })
    describe('contar petalos',()=>{
        test('contar los petalos que tiene',()=>{
           return  margarita.mqnq(3).then(data => expect(data).toBe("me quiere"));
        })
       
    })
    
})