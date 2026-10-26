$("#validar").click(() => {

    // validar el nombre
    if ($("#nombre").val().trim() == '') {
        alert("Escribe tu nombre");
        $("#nombre").focus();
        return false;
    }

    //validar el apellido
    if ($("#apellido").val().trim() == '') {
        alert("Escribe tu apellido");
        $("#apellido").focus();
        return false;
    }

    // validar email (vacio y expresion correcta)

    let emailVal = $("#email").val().trim();

    if (emailVal == '') {
        alert("Escribe un correo");
        $("#email").focus();
        return false;
    }

    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(emailVal)) {
        alert("Escribe un correo válido");
        $("#email").focus();
        return false;
    }

    // validar telefono
    let telVal = $("#telefono").val().trim();
    let digitosNumeros = /^\d{10}$/;

    if (!digitosNumeros.test(telVal)) {
        alert("El teléfono debe ser 10 dígitos");
        $("#telefono").focus();
        return false;
    }

    // validar presupuesto

    if ($("#presupuesto").val() == '') {
        alert("Debes seleccionar una cantidad");
        $("#presupuesto").focus();
        return false;
    }

    // validar empresa

    if ($("#empresa").val().trim() == '') {
        alert("Escribe el nombre de tu empresa");
        $("#empresa").focus();
        return false;
    }

    // validar industria

    if ($("#industria").val() == '') {
        alert("Debes seleccionar una industria");
        $("#industria").focus();
        return false;
    }

    // validar sitio (vacio y formato)

    let sitoVal = $("#sitio").val().trim();

    if (sitoVal == '') {
        alert("Escribe tu sitio web");
        $("#sitio").focus();
        return false;
    }

    let expresionSitio = /^([a-z0-9-]+\.)+[a-z]{2,}$/i;

      if (!expresionSitio.test(sitoVal)) {
        alert("Escribe un sitio web válido");
        $("#sitio").focus();
        return false;
      }

    $("#formulario").submit();
});