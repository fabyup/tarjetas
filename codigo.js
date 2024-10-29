// Asegúrate de que tu archivo Servicio.js esté cargado antes de este archivo

document.addEventListener("DOMContentLoaded", () => {
  const servicios = [
    new ServicioCerrajero(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "istockphoto-1357874479-612x612.jpg"
    ),
    new ServicioCerrajero(
      "Cambio de cerraduras",
      "Instalación y cambio de cerraduras para mayor seguridad.",
      "cuanto-cuesta-cambiar-la-cerradura.jpg"
    ),
    new ServicioCerrajero(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el momento.",
      "keys-8877747_640.png"
    ),
    new ServicioCerrajero(
      "Apertura de puertas de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new ServicioCerrajero(
      "Apertura de cajas fuertes",
      "Reparación de cajas fuertes.",
      "3306927 caja fuerte.png"
    )
  ];

  const agregarTarjetas = () => {
    const contenedor = document.querySelector(".tarjetas-container");
    servicios.forEach(servicio => {
      contenedor.appendChild(servicio.crearTarjeta());
    });
  };

  agregarTarjetas();
});
