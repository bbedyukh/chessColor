# Code Challenge: Name

Dadas dos celdas en el tablero de ajedrez, debemos determinar si tienen el mismo color o no.

### Coordenadas en tablero de Ajedrez
La posición de una celda en el tablero de ajedrez se identifica mediante una coordenada alfanumérica.   

- El eje horizontal o eje X se identifica con una letra entre la "A" y la "H" (A,B,C,D,E,F,G,H)  
- El eje vertical o eje Y se identiica con un numero entre el "1" y el "8" (1,2,3,4,5,6,7,8)  

Por ejemplo: "A1", "G7", "F3"  

![Tablero Ajedrez](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FtablerAjedrez.jpg?alt=media&token=d6ba9a45-7646-49a1-b7c2-45138e9df7fd)


## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: cell1
- **tipo**: String

##### Parámetro 1
- **nombre**: cell2
- **tipo**: String

## Salida

- **tipo**: Boolean

## Ejemplo
Para cell1 = "A1" y cell2 = "C3", la salida debe ser = verdadero.  
![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fajedrez_color.png?alt=media&token=bb97f338-796a-40f1-ba8d-0b23c56c6707)
---  

Para cell1 = "A1" y cell2 = "H3", la salida debe ser = falso.  
![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fagedrez_color2.png?alt=media&token=91a123c5-4c2d-4ae6-90c9-f9460cba231a)


## Tests

### Test 1  

- **Parametros**: (cell1 = "A1", cell2 = "C3" ) 
- **Resultado esperado**: true
---
### Test 2  

- **Parametros**: (cell1 = "A1", cell2 = "C4" ) 
- **Resultado esperado**: false
---
### Test 3  

- **Parametros**: (cell1 = "B3", cell2 = "B4" ) 
- **Resultado esperado**: false
---
### Test 4  

- **Parametros**: (cell1 = "B3", cell2 = "B5" ) 
- **Resultado esperado**: true
---
### Test 5  

- **Parametros**: (cell1 = "F2", cell2 = "F8" ) 
- **Resultado esperado**: true
---
### Test 6 

- **Parametros**: (cell1 = "A8", cell2 = "H1" ) 
- **Resultado esperado**: true
---
### Test 7 

- **Parametros**: (cell1 = "E1", cell2 = "D1" ) 
- **Resultado esperado**: false
