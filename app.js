document.querySelector(`#boton`)

document.querySelector(`#boton`).addEventListener(`click`, traerDatos)

function traerDatos (){

    const form = new XMLHttpRequest();

    form.open(`GET`, "personas.json", true );

    form.send();

    form.onreadystatechange = function (){

        if(this.readyState == 4 && this.status == 200){

             let datos = JSON.parse(this.responseText);

             let llenar = document.querySelector(`#respuesta`);

             llenar.innerHTML = ``;

            

             for( let item of datos){

                llenar.innerHTML +=`

                            <tr>
                            <td>${item.nombre}</td>
                            <td>${item.apellido}</td>
                            
                            </tr>
                
                `
               
             }
        }

    }

}