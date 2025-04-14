USE aroma_coffee;

SELECT *
FROM user;

-- Datos de muestra para Aroma Coffee
-- Generados el 8 de abril de 2025

USE `aroma_coffee`;

-- -----------------------------------------------------
-- Datos para la tabla `user`
-- -----------------------------------------------------
INSERT INTO `user` (`email`, `password`, `create_at`, `first_name`, `last_name`, `role`) VALUES
-- Clientes
('juan.perez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2024-12-15 09:30:00', 'Juan', 'Pérez', 'customer'),
('maria.lopez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-01-03 14:45:00', 'María', 'López', 'customer'),
('carlos.rodriguez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-01-15 11:20:00', 'Carlos', 'Rodríguez', 'customer'),
('ana.martinez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-02-05 16:15:00', 'Ana', 'Martínez', 'customer'),
('pedro.sanchez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-02-28 10:10:00', 'Pedro', 'Sánchez', 'customer'),
('sofia.garcia@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-03-10 08:30:00', 'Sofía', 'García', 'customer'),
('diego.fernandez@email.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-03-15 12:45:00', 'Diego', 'Fernández', 'customer'),
-- Vendedores
('laura.gomez@aromacoffee.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2024-11-01 08:00:00', 'Laura', 'Gómez', 'seller'),
('miguel.torres@aromacoffee.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2024-11-05 09:15:00', 'Miguel', 'Torres', 'seller'),
('carmen.vega@aromacoffee.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2024-11-10 07:45:00', 'Carmen', 'Vega', 'seller'),
('roberto.diaz@aromacoffee.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2024-12-01 08:30:00', 'Roberto', 'Díaz', 'seller'),
('lucia.moreno@aromacoffee.com', '$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6', '2025-01-05 09:00:00', 'Lucía', 'Moreno', 'seller');

-- -----------------------------------------------------
-- Datos para la tabla `product`
-- -----------------------------------------------------
INSERT INTO `product` (`type`, `price`, `name`, `stock`, `description`) VALUES
('espresso', 2.50, 'Espresso Clásico', 100, 'Café intenso con crema dorada, servido en shot de 30ml'),
('americano', 2.80, 'Americano Suave', 100, 'Espresso con agua caliente, suave y aromático'),
('cappuccino', 3.20, 'Cappuccino Tradicional', 80, 'Espresso con leche vaporizada y espuma en proporciones iguales'),
('latte', 3.50, 'Latte Cremoso', 80, 'Espresso con leche vaporizada y una capa fina de espuma'),
('mocha', 3.80, 'Mocha Chocolate', 60, 'Espresso con chocolate, leche vaporizada y crema batida'),
('frappuccino', 4.20, 'Frappuccino Caramelo', 50, 'Bebida helada de café con caramelo y crema batida'),
('coldbrew', 3.00, 'Cold Brew Original', 40, 'Café extraído en frío durante 12 horas, suave y refrescante'),
('tea_chai', 2.90, 'Chai Latte Especiado', 30, 'Té negro con especias y leche vaporizada'),
('pastry', 1.80, 'Croissant Mantequilla', 25, 'Croissant francés tradicional de mantequilla'),
('sandwich', 2.20, 'Sándwich Vegetariano', 20, 'Pan integral con aguacate, queso y vegetales frescos');

-- -----------------------------------------------------
-- Datos para la tabla `order`
-- -----------------------------------------------------
INSERT INTO `order` (`created_at`, `updated_at`, `user_id`, `take_away`) VALUES
('2025-03-20 10:15:00', '2025-03-20 10:20:00', 1, true), -- Pedido para llevar
('2025-03-21 09:30:00', '2025-03-21 09:35:00', 2, false), -- Pedido para consumir en el local
('2025-03-22 15:45:00', '2025-03-22 15:50:00', 3, true),
('2025-03-23 11:20:00', '2025-03-23 11:25:00', 4, false),
('2025-03-24 16:30:00', '2025-03-24 16:35:00', 5, true),
('2025-03-25 08:45:00', '2025-03-25 08:50:00', 1, false), -- Usuario 1 hace otro pedido
('2025-03-26 12:20:00', '2025-03-26 12:25:00', 3, true), -- Usuario 3 hace otro pedido
('2025-03-27 14:10:00', '2025-03-27 14:15:00', 6, false),
('2025-03-28 17:30:00', '2025-03-28 17:35:00', 7, true),
('2025-04-01 10:00:00', '2025-04-01 10:05:00', 2, false); -- Usuario 2 hace otro pedido

-- -----------------------------------------------------
-- Datos para la tabla `order_has_product`
-- -----------------------------------------------------
INSERT INTO `order_has_product` (`order_id`, `product_id`) VALUES
(1,1), -- Juan pidió un Espresso
(1,9), -- Juan también pidió un Croissant
(2,3), -- María pidió un Cappuccino
(3, 5), -- Carlos pidió un Mocha
(3, 10), -- Carlos también pidió un Sándwich
(4, 2), -- Ana pidió un Americano
(4, 9), -- Ana también pidió un Croissant
(5, 6), -- Pedro pidió un Frappuccino
(6, 4), -- Juan (segundo pedido) pidió un Latte
(7, 7), -- Carlos (segundo pedido) pidió un Cold Brew
(8, 8), -- Sofía pidió un Chai Latte
(9, 6), -- Diego pidió un Frappuccino
(9, 10), -- Diego también pidió un Sándwich
(10, 4), -- María (segundo pedido) pidió un Latte
(10, 9); -- María también pidió un Croissant