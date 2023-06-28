new Vue({
    el: '#app',
    data: {
      productos: [
        {
          imagen: 'images/sintetico.JPG',
          nombre: 'Sintético',
          presentacion: '30ml',
          precioDolares: 7.00,
          cantidad: 0
        },
        {
          imagen: 'images/mineral.JPG',
          nombre: 'Mineral',
          presentacion: 'Presentación 2',
          precioDolares: 6.00,
          cantidad: 0
        },
        {
            imagen: 'images/grasa.JPG',
            nombre: 'Grasa Grafito',
            presentacion: 'Presentación 2',
            precioDolares: 8.00,
            cantidad: 0
          },
          {
            imagen: 'images/silicona.JPG',
            nombre: 'Silicona',
            presentacion: 'Presentación 2',
            precioDolares: 5.00,
            cantidad: 0
          },
          {
            imagen: 'images/cleaner.JPG',
            nombre: 'Cleaner',
            presentacion: 'Presentación 2',
            precioDolares: 6.00,
            cantidad: 0
          },
          {
            imagen: 'images/powergrip.JPG',
            nombre: 'Power Grip',
            presentacion: 'Presentación 2',
            precioDolares: 5.50,
            cantidad: 0
          },
          {
            imagen: 'images/optics.JPG',
            nombre: 'Optics',
            presentacion: 'Presentación 2',
            precioDolares: 5.00,
            cantidad: 0
          },
          {
            imagen: 'images/blade.JPG',
            nombre: 'Blade',
            presentacion: 'Presentación 2',
            precioDolares: 9.00,
            cantidad: 0
          },
          {
            imagen: 'images/reels.JPG',
            nombre: 'Reels',
            presentacion: 'Presentación 2',
            precioDolares: 9.00,
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
        return this.dolarVenta * precioDolares;
      },
      calcularPrecioMayorista: function(precioDolares) {
        return this.calcularPrecioPesos(precioDolares) * 0.7; // 30% de descuento para precio mayorista
      },
      calcularTotalPedido: function() {
        // Se calcula automáticamente a través de la propiedad computada 'totalPedido'
      },
      calcularCompraMinima: function() {
        const valorDolares = 100;
        const valorPesos = this.calcularPrecioPesos(valorDolares);
        return valorPesos.toLocaleString('es-AR');
      }
    },
    mounted() {
       // Obtener el valor del dólar desde la API
    fetch('http://escuderokevin.com.ar:7070/api/dolarblue')
    .then(response => response.json())
    .then(data => {
      this.dolarVenta = parseFloat(data.venta);
    })
    .catch(error => {
      console.error('Error al obtener el valor del dólar:', error);
    });
}
});
  