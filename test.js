


    // Obtener el valor del dólar desde la API
    fetch('http://escuderokevin.com.ar:7070/api/dolarblue')
      .then(response => response.json())
      .then(data => {
        this.dolarVenta = parseFloat(data.venta);
      })
      .catch(error => {
        console.error('Error al obtener el valor del dólar:', error);
      });

console.log(this.dolarVenta)