// Aquí puedes añadir lógica adicional para servicios específicos
// Por ejemplo, mostrar diferentes servicios de cerrajería
class ServicioCerrajero {
  constructor(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  crearTarjeta() {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const h2 = document.createElement("h2");
    h2.textContent = this.nombre;
    tarjeta.appendChild(h2);

    const img = document.createElement("img");
    img.src = this.imagen;
    img.alt = this.nombre;
    img.classList.add("imagen-cerrajero");
    tarjeta.appendChild(img);

    const p = document.createElement("p");
    p.textContent = this.descripcion;
    tarjeta.appendChild(p);

    return tarjeta;
  }
}
