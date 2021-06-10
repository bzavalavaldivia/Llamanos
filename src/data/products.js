import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import sweet1 from '../images/sweet3.jpg';
import sweet2 from '../images/sweet-2.jpg';
import sweet3 from '../images/sweet-3.jpg';

export const products = [
  {
    id: 1,
    img: product1,
    alt: 'Pizza',
    name: 'Americana',
    desc:
      'Si amas el Queso y el Jamón no puedes dejar de probar esta Pizza, una exquisita combinación de nuestro delicioso Queso Mozzarella y el mejor Jamón seleccionado.',
    price: 'S/ 19.99',
    button: 'Añadir',
    category: 'pizza'
  },
  {
    id: 2,
    img: product2,
    alt: 'Pizza',
    name: 'Pepperoni',
    desc:
      'Irresistible Pizza de Pepperoni, Queso 100% Mozzarella. La Pizza clásica por excelencia.',
    price: 'S/ 16.99',
    button: 'Añadir',
    category: 'pizza'
  },
  {
    id: 3,
    img: product3,
    alt: 'Pizza',
    name: 'Vegetariana',
    desc:
      '¡Todos tus vegetales favoritos juntos! Una deliciosa pizza cargada con Pimiento Verde y Cebolla Blanca recién cortada, Champiñones frescos, Aceitunas Negras, Tomates y 100% Queso Mozzarella.',
    price: 'S/ 14.99',
    button: 'Añadir',
    category: 'pizza'
  },
  {
    id: 4,
    img: sweet2,
    alt: 'Donuts',
    name: 'Donut Clásica',
    desc:
      'Donas glaseadas de chocolate belga cubiertas de glaseado con chispitas en la parte superior.',
    price: 'S/ 9.99',
    button: 'Añadir',
    category: 'dessert'
  },
  {
    id: 5,
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Helado Caramelo',
    desc:
      'Helado de vainilla cubierto con glaseado de caramelo y chocolate cubierto con una barra de coco.',
    price: 'S/ 12.99',
    button: 'Añadir',
    category: 'dessert'
  },
  {
    id: 6,
    img: sweet1,
    alt: 'Brownie',
    name: 'Brownie Clásico',
    desc:
      'Porciones de brownie de chocolate blanco cubiertos con trozos de chocolate blanco y nueces de macadamia.',
    price: 'S/ 9.99',
    button: 'Añadir',
    category: 'dessert'
  }
];
