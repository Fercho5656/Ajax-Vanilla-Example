const ajaxForm = document.querySelector("#ajaxForm");

const validateForm = () => {
  return new Promise((resolve) => {
    //Name empty
    if (ajaxForm.name.value.length === 0) {
      alert("Escribe tu nombre");
      ajaxForm.name.focus();
      resolve(false);
    }
    //Age empty
    if (ajaxForm.age.value === "") {
      alert("Escribe tu edad");
      ajaxForm.age.focus();
      resolve(false);
    }
    resolve(true);
  });
};

ajaxForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const isValidated = await validateForm();
  if (isValidated) {
    alert("Formulario Enviado");
    document.querySelector("#ajaxFormButton").disabled = true;
    ajaxForm.name.readOnly = true;
    ajaxForm.age.readOnly = true;
  } else {
    alert("Formulario Erroneo");
    ajaxForm.reset();
  }
});
