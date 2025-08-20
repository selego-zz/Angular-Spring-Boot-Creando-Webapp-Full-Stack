import { createFeatureSelector, createSelector } from '@ngrx/store';

// creamos un selector base, definiendo el nombre del estado y su tipo
export const selectCounterFeature = createFeatureSelector<number>('counter');
//“Del store global, dame la porción que se llama 'counter' y que es de tipo number.”

//Creamos un selector reutilizable llamado selectCounter.
//Usa como input el selector selectCounterFeature.
//El segundo argumento es una función que recibe el valor counter (es decir, el número) y lo devuelve sin cambios.
//En este caso parece redundante, pero te permite:
//Componer lógica adicional en el futuro.
//Reutilizar selectCounter fácilmente en varios componentes sin repetir lógica.
export const selectCounter = createSelector(
  selectCounterFeature,
  (counter) => counter
);
