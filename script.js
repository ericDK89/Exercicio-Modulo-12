$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Campo nome é obrigatório",
      tel: "Campo telefone é obrigatório",
      email: {
        required: "Campo e-mail é obrigatório",
        email: "O endereço de e-mail deve ser no formato 'nome@dominio.com'",
      },
    },
  });
});
