function fu() {
  let nombre = document.getElementById("nombre").innerHTML;
  let newname = document.getElementById("newname").value;
  if (newname === "") {
    document.getElementById("nombre").innerHTML = nombre;
  } else {
    document.getElementById("nombre").innerHTML = newname;
  }
  let profesion = document.getElementById("profesion").innerHTML;
  let newprofesion = document.getElementById("newprofesion").value;
  if (newprofesion === "") {
    document.getElementById("profesion").innerHTML = profesion;
  } else {
    document.getElementById("profesion").innerHTML = newprofesion;
  }
  let ubicacion = document.getElementById("ubicacion").innerHTML;
  let newubicacion = document.getElementById("newubicacion").value;
  if (newubicacion === "") {
    document.getElementById("ubicacion").innerHTML = ubicacion;
  } else {
    document.getElementById("ubicacion").innerHTML = newubicacion;
  }
}
