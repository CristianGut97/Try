    //Porcentaje de IVA
    let iva = 0.2;
    
    //Porcentaje flete
    let transporte = 0.07;
    
    //Precios base productos
    
    let precioBaseProducto = [150000,230000,500000,188000];
    
    //funcion imprimir factura
    function imprimirFactura (precioBaseProducto,valorParcialProd,totalProd){
            console.log("-----------factura-----------");
        console.log(`--Producto: Generico --`);
        console.log(`--Valor Producto: ${precioBaseProducto} --`);
        console.log(`--Valor Parcial+IVA: ${valorParcialProd} --`);
        console.log(`--Total: ${totalProd} --`);
        console.log(`------- ------- -------`); 
    }
    
    //entrega
    
    function precioProd (precio,iva,transporte) {
        //precio parcial
        let valorParcialProd = precio + (precio * iva);
        //total a pagar
        let totalProd = valorParcialProd + (precio * transporte);
        
        //imprime factura
        imprimirFactura (precio,valorParcialProd,totalProd)
    }
    
    for(let precio of precioBaseProducto){
        precioProd(precio,iva,transporte);
    }