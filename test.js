

       fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
       .then(response => response.json())
       .then(data => {
         const segundoObjeto = data[1].casa; // Acceder al segundo objeto del array y a la propiedad "casa"
         this.dolarVenta = parseFloat(segundoObjeto.venta.replace(",", ".")); // Obtener el valor de "venta" y convertirlo a un número con punto decimal
         console.log(this.dolarVenta)
        })
       .catch(error => {
         console.error('Error al obtener el valor del dólar:', error);
       });

  