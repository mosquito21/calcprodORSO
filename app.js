new Vue({
    el: '#app',
    data: {
      productos: [
        {
          imagen: 'images/sintetico.JPG',
          nombre: 'Aceite sintético',
          presentacion: '30ml',
          precioDolares: 7.00,
          cantidad: 0
        },
        {
          imagen: 'images/mineral.JPG',
          nombre: 'Aceite mineral',
          presentacion: '30ml',
          precioDolares: 6.00,
          cantidad: 0
        },
        {
            imagen: 'images/Grasa60G.JPG',
            nombre: 'Grasa Grafito',
            presentacion: '60g',
            precioDolares: 8.00,
            cantidad: 0
          },
        {
          imagen: 'images/Grasa30G.JPG',
          nombre: 'Grasa Grafito',
          presentacion: '30g',
          precioDolares: 4.5,
          cantidad: 0
        },
          {
            imagen: 'images/silicona.JPG',
            nombre: 'Aceite de silicona',
            presentacion: '30ml',
            precioDolares: 4.60,
            cantidad: 0
          },
          {
            imagen: 'images/cleaner.JPG',
            nombre: 'Cleaner desengrasante',
            presentacion: '60ml',
            precioDolares: 6.00,
            cantidad: 0
          },
          {
            imagen: 'images/powergrip.JPG',
            nombre: 'Power Grip',
            presentacion: '125ml',
            precioDolares: 6.00,
            cantidad: 0
          },
          {
            imagen: 'images/optics.JPG',
            nombre: 'Optics',
            presentacion: '60ml',
            precioDolares: 5.00,
            cantidad: 0
          },
          {
            imagen: 'images/blade.JPG',
            nombre: 'Blade',
            presentacion: '30ml',
            precioDolares: 9.00,
            cantidad: 0
          },
          {
            imagen: 'images/reels.JPG',
            nombre: 'Reels',
            presentacion: '30ml',
            precioDolares: 9.00,
            cantidad: 0
          },
        {
          imagen: 'images/Cepillobronce.JPG',
          nombre: 'Cepillo para baquetas Bronce',
          presentacion: '1uni',
          precioDolares: 3.5,
          cantidad: 0
      },
        // ... Agregar los demás productos aquí
      ],
      dolarVenta: 0, // Valor del dólar obtenido de la API
      cantidades: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
    },
    computed: {
      totalPedido: function() {
        let total = 0;
        for (let producto of this.productos) {
          total += producto.cantidad * this.calcularPrecioMayorista(producto.precioDolares);
        }
        return total;
      }
    },
    methods: {
      calcularPrecioPesos: function(precioDolares) {
        return (this.dolarVenta * precioDolares).toLocaleString('es-AR', { minimumFractionDigits: 2 });
      },
      calcularPrecioMayorista: function(precioDolares) {
        const precioPesos = (this.dolarVenta * precioDolares);
        const precioMayorista = precioPesos - (precioPesos * 0.33);
        return precioMayorista;
      },
      calcularTotalPedido: function() {
        // Se calcula automáticamente a través de la propiedad computada 'totalPedido'
      },
      calcularCompraMinima: function() {
        const valorDolares = 75;
        const valorPesos = this.calcularPrecioPesos(valorDolares);
        return valorPesos;
      
      }
    },
    mounted() {
       // Obtener el valor del dólar desde la API
       fetch('https://dolarapi.com/v1/dolares')
       .then(response => response.json())
       .then(data => {
         const segundoObjeto = data[1]; // Acceder al segundo objeto del array y a la propiedad "casa"
         this.dolarVenta = parseFloat(segundoObjeto.venta); // Obtener el valor de "venta" y convertirlo a un número con punto decimal
       })
       .catch(error => {
         console.error('Error al obtener el valor del dólar:', error);
       });
     
  }
});
  