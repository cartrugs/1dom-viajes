const bienvenidos = document.querySelector('#bienvenidos');
const arrayBanners = [
  {
    url: 'assets/banners/1.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/2.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/3.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/4.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/5.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/6.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/7.jpg',
    alt: 'landscape',
  },
  {
    url: 'assets/banners/8.jpg',
    alt: 'landscape',
  },
];
const fragmentBanners = document.createDocumentFragment();
const recomendados = document.querySelector('#recomendados');
const arrayViajes = [
  {
    url: 'assets/viajes/viajes-1.jpg',
    titulo: 'viaje 1',
    alt: 'Mujer sobre hamaca en la playa',
    msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.',
  },
  {
    url: 'assets/viajes/viajes-2.jpg',
    titulo: 'viaje 2',
    alt: 'Camino a restaurante sobre el mar',
    msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.',
  },
  {
    url: 'assets/viajes/viajes-3.jpg',
    titulo: 'viaje 3',
    alt: 'Múltiples señales en un poste',
    msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus qui similique necessitatibus.',
  },
];
const fragment = document.createDocumentFragment();
const destinos = document.querySelector('#destinos');
const destinoPosible = ['Europa', 'América', 'África'];
const fragmentDestinos = document.createDocumentFragment();
const cajaFotos = document.querySelectorAll('.figure.background-img');

const pasarBanners = () => {
  const cambiarBanners = arrayBanners[Math.floor(Math.random() * arrayBanners.length)];
  const cajaBanners = document.createElement('div');
  const imagenBanner = document.createElement('img');
  imagenBanner.src = cambiarBanners.url;
  imagenBanner.alt = cambiarBanners.alt;
  cajaBanners.append(imagenBanner);
  fragmentBanners.append(cajaBanners);
  bienvenidos.append(fragmentBanners);
};

const meterFotos = () => {
  arrayViajes.forEach((item) => {
    const cajaFotos = document.createElement('FIGURE');
    cajaFotos.classList.add('figure', 'background-img');

    const titulo = document.createElement('H3');
    titulo.textContent = item.titulo;

    const parrafo = document.createElement('P');
    parrafo.textContent = item.msg;

    const cajas = document.createElement('DIV');

    const fotos = document.createElement('IMG');
    fotos.src = item.url;
    fotos.alt = item.alt;

    cajas.append(fotos);

    cajaFotos.append(cajas);
    cajaFotos.append(titulo);
    cajaFotos.append(parrafo);

    fragment.append(cajaFotos);
  });

  recomendados.append(fragment);
};

const cambiarSombra = () => {

  cajaFotos.forEach((foto) => {
    foto.addEventListener('mouseenter', () => {
      foto.classList.add('sombraActiva');
    });

    foto.addEventListener('mouseleave', () => {
      foto.classList.remove('sombraActiva');
    });
  });
};

const inputsViajes = () => {
  destinoPosible.forEach((item) => {
    const opciones = document.createElement('OPTION');
    opciones.textContent = item;
    opciones.value = item;
    fragmentDestinos.append(opciones);
  });
  destinos.append(fragmentDestinos);
};

pasarBanners();
inputsViajes();
meterFotos();
cambiarSombra();
