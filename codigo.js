document.addEventListener("DOMContentLoaded", () => {
  const servicios = [
    new ServicioCerrajero(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "abriendo puerta 1.jpg"
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

  const contenedor = document.querySelector("#tarjetas-inner");
  let tarjetaActual = 0;
  let modoVista = "individual"; // Inicialmente en modo individual

  const agregarTarjetas = () => {
    servicios.forEach(servicio => {
      contenedor.appendChild(servicio.crearTarjeta());
    });
    mostrarTarjetaActual(); // Mostrar la primera tarjeta al final
  };

  const mostrarTarjetaActual = () => {
    if (modoVista === "individual") {
      // Ajusta el contenedor para mostrar solo una tarjeta
      contenedor.style.width = "100%"; // Asegúrate de que el contenedor sea del 100%
      contenedor.style.transform = `translateX(-${tarjetaActual * 100}%)`;
    } else {
      // Cambia la transformación y el ancho del contenedor para mostrar todas las tarjetas
      contenedor.style.transform = `translateX(0)`;
      contenedor.style.width = "auto"; // Se adapta al tamaño de las tarjetas
    }
  };

  const nextTarjeta = () => {
    if (modoVista === "individual") {
      tarjetaActual = (tarjetaActual + 1) % servicios.length; // Ciclo al principio si se pasa de la última
      mostrarTarjetaActual();
    }
  };

  const prevTarjeta = () => {
    if (modoVista === "individual") {
      tarjetaActual = (tarjetaActual - 1 + servicios.length) % servicios.length; // Ciclo al final si se va a la anterior
      mostrarTarjetaActual();
    }
  };

  const toggleView = () => {
    modoVista = modoVista === "individual" ? "todas" : "individual";
    document.getElementById("toggle-view").textContent =
      modoVista === "individual" ? "Ver todas" : "Ver de a una";
    mostrarTarjetaActual(); // Actualizar la vista
  };

  document.getElementById("next").addEventListener("click", nextTarjeta);
  document.getElementById("prev").addEventListener("click", prevTarjeta);
  document.getElementById("toggle-view").addEventListener("click", toggleView);

  agregarTarjetas();
});
