

fetch('http://escuderokevin.com.ar:7070/api/dolarblue')
  
  .then(response => response.json())

  .then(data => {
    dolarVenta = parseFloat(data.venta);
    
  })

  console.log(dolarVenta)