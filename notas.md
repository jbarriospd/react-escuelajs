## Props

Index.js

```
const texts = {
  text: 'Click',
  text2: 'Click2',
  text3: 'Click3'
}
ReactDOM.render(<Button {...texts} />, document.getElementById('root'));
```

Button.jsx

```
const Button = props => {
  const { text, text2, text3 } = props
  return (
    <div>
      <buttontype="button">{text}</button>
      <buttontype="button">{text2}</button>
      <buttontype="button">{text3}</button>
    </div>
  )
}
```

## Manejo del estado

### Montado:

**Constructor()**

Este es el primer método al que se hace un llamado, aquí es donde se _inicializan_ los métodos controladores, eventos del estado.

**getDerivedStateFromProps()**

Este método se llama _antes de presentarse_ en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

**render()**

Si queremos _representar elementos en el DOM_ en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

**ComponentDidMount()**

Este método se llama _inmediatamente que ha sido montado en el DOM_, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente, tambien se recomienda que aui se hagan los llamaos a una api.

### Actualización:

**getDerivedStateFromProps()**

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

**shouldComponentUpdate()**

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

**render()**

Se llama el método render que representa los cambios en el DOM.

**componentDidUpdate()**

Este método es invocado inmediatamente después de que el componente se actualiza y _recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente_.

### Desmontado

**componentWillUnmount()**

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores:

**getDerivedStateFromError()**

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

**componentDidCatch()**

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

¿Donde cargar la informción de un componente?

Como dice @esquinazi, lo mejor es que tu estado se actualice como respuesta a las interacciones de los usuarios.

Sin embargo, si necesitas hacer una carga inicial, puedes usar componentDidMount.

Puedes llamar setState() inmediatamente en componentDidMount(). Se activará un renderizado extra, pero sucederá antes de que el navegador actualice la pantalla.

Esto garantiza que, aunque en este caso se invocará dos veces el render(), el usuario no verá el estado intermedio. Utiliza este patrón con precaución porque a menudo causa problemas de rendimiento.

En la mayoría de los casos, deberías ser capaz de asignar el estado inicial en el constructor() en su lugar. Sin embargo, puede ser necesario para casos como modales y tooltips cuando se necesita medir un nodo DOM antes de representar algo que depende de su tamaño o posición.

### state y eventos:

Realizacion de un componente stateful

```
import React from 'react';

class Button extends React.Component {

    state {
        count: 0
    }
    handlerClick= () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {

        const {count} = this.state
        return (
            <div>
                <h1>Manzanas: {count</h1>
                <button type="button" onClick={this.handlerClick}>
                Click
                </button>
            </div>
        )
    }
}
```

### Instalación y configuración de entorno

Iniciar proyecto de Node.js:

```
npm init -y
```

Instalar React:

```
npm install --save react react-dom
```

Instalar Babel:

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

```

en un archivo .babelrc:

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

Instalar Webpack:

```
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

```

en un archivo webpack.config:

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

Crear la carpeta public con index.html, la carpeta scr con index.js y una carpeta componentes

Estrutura de un proyecto de React: https://platzi.com/comentario/746718/

Si ya tenes un repositorio en github o gitlab de tu proyecto, podes automatizar el chequeo de vulnerabilidades a traves de Snyk. Es como correr npm audit pero de manera automatizada, y tenes notificaciones semanales (configurables).

https://fontawesome.com/v4.7.0/examples/

Para los que quieran escribir el css con SASS y no SCSS, solo hay que modificar esta línea de webpack.config

```
{
test: /\.s[ac]ss\$/i,
use: [
{ loader: MiniCssExtractPlugin.loader },
"css-loader",
"sass-loader"
]
}

```

Resolví el inconveniente dandole un estado inical al useState, y combiárselo cuando la promesa se resulva:

const [videos, setVideos] = useState({estado: false});

useEffect( () =>{
fetch('http://localhost:3000/initalState')
.then(response => response.json())
.then(data => setVideos({...videos, ...data, estado: true}));
}, []);
y despúes en el condicional verificar este valor:

<Categories title="Tendencias">
        <Carousel>
          {
            videos.estado === true && (
              videos.trends.map(item => 
                <CarouselItemkey={item.id}{...item}/>
              )
            )
          }
        </Carousel>
      </Categories>

https://www.robinwieruch.de/react-hooks-fetch-data


import React, { useEffect, useState } from"react";
import ReactDOM from"react-dom";

functionPokemonInfo({ name = "pikachu" }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(pikachu => {
          console.log(pikachu);
          setPokemonInfo(pikachu);
        });
    },
    [name]
  );

  return (
    pokemonInfo && (
      <span>
        La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>
    )
  );
}

ReactDOM.render(<PokemonInfo />, document.getElementById("app"));


Comentario sobre una forma de afrontar el reto: https://platzi.com/comentario/727930/


### REACT-ROUTER

Así como lo usamos en la clase. Aunque puedes configurarlo de muchas formas:

👉 https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
👉 https://github.com/webpack/webpack-dev-server/issues/1457

Ejemplo de 404: https://freefrontend.com/html-css-404-page-templates/ 
https://github.com/gndx/G404Error

realizar multiples layouts: https://platzi.com/comentario/722150/


## Music Player: 
https://codepen.io/ohansemmanuel/pen/QgxEqz
https://codepen.io/assimilate/pen/aVKpYp/
https://codepen.io/CodeFrogShow/pen/LLgBoE

¡CSS GRID , excelente articulo!; https://medium.com/flexbox-and-grids/how-to-efficiently-master-the-css-grid-in-a-jiffy-585d0c213577