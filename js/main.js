const bienvenidos = document.querySelector("#bienvenidos");
const arrayBanners = [
  {
    url: "assets/banners/1.jpg",
    alt: "landscape",
  },
  {
    url: "assets/banners/2.jpg",
    alt: "landscape",
  },
  {
    url: "assets/banners/3.jpg",
    alt: "landscape",
  },
];
const fragmentBanners = document.createDocumentFragment();
const recomendados = document.querySelector("#recomendados");
const arrayViajes = [
  {
    url: "assets/viajes/viajes-1.jpg",
    titulo: "viaje 1",
    alt: "Mujer sobre hamaca en la playa",
    msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.",
  },
  {
    url: "assets/viajes/viajes-2.jpg",
    titulo: "viaje 2",
    alt: "Camino a restaurante sobre el mar",
    msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.",
  },
  {
    url: "assets/viajes/viajes-3.jpg",
    titulo: "viaje 3",
    alt: "Múltiples señales en un poste",
    msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.",
  },
];
const fragment = document.createDocumentFragment();
const destinos = document.querySelector("#destinos");
const destinoPosible = ["Europa", "América", "África"];
const fragmentDestinos = document.createDocumentFragment();

const pasarBanners = () => {
  const cajaBanners = document.createElement("DIV");
  const banner = document.createElement("IMG");
  banner.src = arrayBanners.url;
//   banner.alt = ;
  cajaBanners.append(banner);
  fragmentBanners.append(cajaBanners);
  bienvenidos.append(fragmentBanners);

  const cambiarBanners =
    arrayBanners[Math.floor(Math.random() * arrayBanners.length)];
};

const meterFotos = () => {
  arrayViajes.forEach((item) => {
    const cajaFotos = document.createElement("FIGURE");
    cajaFotos.classList.add("figure", "background-img");

    console.log(cajaFotos);

    const titulo = document.createElement("H3");
    titulo.textContent = item.titulo;

    const parrafo = document.createElement("P");
    parrafo.textContent = item.msg;

    const cajas = document.createElement("DIV");

    console.log(cajas);

    const fotos = document.createElement("IMG");
    fotos.src = item.url;

    cajas.append(fotos);

    cajaFotos.append(cajas, titulo, parrafo);

    fragment.append(cajaFotos);

    console.log(fotos);
  });

  recomendados.append(fragment);
};

meterFotos();

const inputsViajes = () => {
  console.log(inputsViajes);
  destinoPosible.forEach((item) => {
    const opciones = document.createElement("OPTION");
    opciones.textContent = item;
    opciones.value = item;
    console.log(opciones);
    fragment.append(opciones);
  });
  destinos.append(fragment);
};

inputsViajes();
pasarBanners()
