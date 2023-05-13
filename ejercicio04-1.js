$(document).ready(function () { 
    /**Al cargar el boton */
   $("#registro").submit(function () {     
                //caso presiona aceptar 
                //Obtener un campo
               
                let txtnombre=$("#txtnombre").val();
                let txtapellidos= $("#txtapellidos").val();
                let txtcorreo= $("#txtcorreo").val();
                let genero = $("#genero").val();
                let fechaNacimiento = $("#fechanac").val();
                let contra1 = $("#txtcontra1").val();
                let contra2 = $("#txtcontra2").val();
                //Validar campo nombre
                if (txtnombre.length >50 || txtnombre.length <2){
                    alert("Su nombre no es aceptado");
                    return ;
                }
                /*Validar si apellido es correcto */
                if(txtapellidos.length>100 || txtapellidos.length<2){
                    alert("Su apellido no es aceptado");
                    return;
                }
                /*Validar que el campo del correo */
                if(txtcorreo==""|| txtcorreo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
                   alert ("Por favor ingrese un correo legitimo.");
                    return ;
                }
                if (genero == "") {
                    alert("Por favor seleccione el genero");
                    return ; // detener la ejecucion de la funcion
                }
                /*Validar campo de nacimiento que no este vacio */
                if (fechaNacimiento == "") {
                    alert("Por favor ingrese su fecha de Nacimiento correctamente.");
                    return ; // detener la ejecucion de la funcion
                }
                /*Valdiar campo de conbtraseña sea igual  */
                if (contra1 != contra2) {
                    alert("Por favor ingrese su contraseña igual");
                    return ; // detener la ejecucion de la funcion
                }
                // Confirmar que el usuario desea enviar los datos
                if (alert("¿Está seguro de enviar los datos?")) {
                    return ;
                }
                
                // Mostrar un mensaje de alerta confirmando que se envió el formulario
                alert("El formulario ha sido enviado..");
            
     
    });
    });
     
