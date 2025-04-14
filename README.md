# Aroma Coffee
### Hecho por Anais Cabado, Igor Sarmiento y Kai Jauregi

## Tema
Cliente ficticio (Miguel Sánchez):

"Hola, soy el dueño de 'Aroma Café', una pequeña cafetería de barrio. Necesitamos una aplicación simple para gestionar nuestro negocio diario.

Ofrecemos diferentes tipos de productos: cafés, tés, zumos, pasteles, sándwiches y desayunos completos. Cada producto tiene un precio y algunos tienen opciones personalizables (tipo de leche, tamaño, extras, etc.).

Nos gustaría poder registrar los pedidos de los clientes, tanto para consumir en el local como para llevar. Algunos clientes son habituales y nos gustaría recordar sus pedidos frecuentes.

También ofrecemos tarjetas de fidelidad: por cada 9 cafés, el décimo es gratis. Necesitamos llevar un registro de esto para cada cliente habitual.

Mi compañera Lucía sugiere incluir un control básico de inventario para saber cuándo necesitamos reponer ingredientes. Y Pablo, nuestro barista, propone añadir la opción de pedidos programados para empresas cercanas que encargan desayunos con antelación.

Lo importante es que sea muy intuitivo y rápido de usar, ya que lo consultaríamos durante el servicio cuando estamos atendiendo a los clientes."

## Como verlo
  1. Clona el repositorio
  2. Haz un npm install 
  3. Crea un .env y añade la informacion que ponemos en el .env.example
  4. Descargate docker
  5. Haz docker compose up --build
  6. Metete en tu browser y pon http://localhost:3001/products
## Estructura de las clases
```
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   │   ├── americano suave.jpg
│   │   ├── capuccino tradicional.jpg
│   │   ├── coffee-machine-filling-cup.jpg
│   │   ├── espresso clásico.jpg
│   │   └── logo.png
│   └── styles.css
├── README.md
└── src
    ├── app.js
    ├── config
    │   └── sequelize.js
    ├── controllers
    │   ├── auth
    │   │   ├── authApiController.js
    │   │   ├── authController.js
    │   │   └── authViewController.js
    │   ├── order
    │   │   ├── orderController.js
    │   │   └── orderViewController.js
    │   ├── product
    │   │   ├── productController.js
    │   │   └── productViewController.js
    │   └── user
    │       ├── userAPIController.js
    │       ├── userController.js
    │       └── userViewsController.js
    ├── middlewares
    │   ├── authMiddleware.js
    │   └── orderProductMiddleware.js
    ├── models
    │   ├── orderModel.js
    │   ├── productModel.js
    │   └── userModel.js
    ├── routes
    │   ├── api
    │   │   ├── APIRouter.js
    │   │   ├── authAPIRouter.js
    │   │   └── userAPIRouter.js
    │   ├── router.js
    │   └── views
    │       ├── authViewRouter.js
    │       ├── orderViewRouter.js
    │       ├── productViewRouter.js
    │       ├── userViewRouter.js
    │       └── viewRouter.js
    ├── utils
    │   ├── bcrypt.js
    │   ├── errors.js
    │   └── token.js
    └── views
        ├── auth
        │   ├── login.pug
        │   └── register.pug
        ├── layout.pug
        ├── navbar.pug
        ├── order
        │   └── order.pug
        ├── product
        │   ├── productCardOrder.pug
        │   ├── productCard.pug
        │   └── products.pug
        └── user
            ├── createNewUser.pug
            ├── list.pug
            ├── show.pug
            └── usercard.pug


```




