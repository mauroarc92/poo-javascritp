
 export class UI {
     //captura los datos y los envia a la vista
    addProduct(product){

        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        const {name,price,year} = product
        element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Producto</strong>: ${name} -
                        <strong>Precio</strong>: ${ new Intl.NumberFormat("de-DE").format(price)} - 
                        <strong>Año</strong>: ${year}
                        <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    </div>
                </div>
            `;
        productList.appendChild(element)    
        
    }
    //limpiar formulario
    resetForm() {
        document.getElementById("product-form").reset();
      }
    //eliminar producto
      deleteProduct(element) {
        if (element.name === "delete") {
          element.parentElement.parentElement.remove();
          this.showMessage("Producto Eliminado..", "success");
        }
      }
      
      //metodo para el mensaje
      showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        // Mostrar en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insertar mensaje en la interfaz de usuario
        container.insertBefore(div, app);
    
        // Eliminar el mensaje después de 3 segundos
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }

}

