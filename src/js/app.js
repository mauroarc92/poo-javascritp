import{Product} from './Product.js'
import {UI} from './UI.js'



document.querySelector('#product-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    

    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

      const product = new Product(name, price, year);
      const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "") {

        ui.showMessage("Por favor rellene los campos requeridos..", "danger");
      }else{
          
       
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage("Producto Agregado..", "success");
        
      }
    

})

document.querySelector('#product-list').addEventListener('click',(e)=>{
    e.preventDefault()
    const ui = new UI();
    ui.deleteProduct(e.target)

})