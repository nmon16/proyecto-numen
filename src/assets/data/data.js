const today = new Date();

export const filtersData = [
    {
        id: "filter-countries",
        value: "all"
    },
    {
        id: "filter-prices",
        value: "all"
    },
    {
        id: "filter-sizes",
        value: "all"
    },
    {
        id: "date-from",
        value: ""
    },
    {
        id: "date-to",
        value: ""
    }
];

export const hotelsData = [
    {
        id: 1,
        slug: 'club-atletico-river-plate-areco',
        name: 'Club Atlético River Plate Areco',
        photo: 'la-bamba-de-areco.jpg',
        description: 'Ubicado sobre el río areco, a 10 cuadras del pueblo de San Antonio de Areco, se encuentra el camping y recreo Club River Plate Areco. El extenso predio cuenta con una hermosa arboleda con todas las comodidades para tus mejores vacaciones o escapadas de fin de semana.',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 864000000, // 10 days
        rooms: 11,
        city: 'Buenos Aires',
        country: 'Argentina',
        price: 400
    },
    {
        id: 2,
        slug: 'complejo-el-griego',
        name: 'Complejo el Griego',
        photo: 'sainte-jeanne.jpg',
        description: 'Cuenta con 20 hectáreas con una variada y frondosa arboleda de más de 30 años, así Ud. decidirá donde acampar con la sombra necesaria para su merecido descanso.',
        availabilityFrom: today.valueOf() + 864000000, // 10 days
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 23,
        city: 'Mar del Plata',
        country: 'Argentina',
        price: 200
    },
    {
        id: 3,
        slug: 'camping-el-azufre',
        name: 'Camping El Azufre',
        photo: 'entre-cielos.jpg',
        description: 'Un lugar ideal para una escapada de fin de semana escondido en el pequeño pueblo de Malargüe con impresionantes vistas de las montañas de Mendoza. La Reserva de Vida Silvestre está cerca, y los campistas pueden aprovechar el increíble lago nacional.',
        availabilityFrom: today.valueOf() + 432000000, // 5 days
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 16,
        city: 'Mendoza',
        country: 'Argentina',
        price: 400
    },
    {
        id: 4,
        slug: 'lo-del-gaucho',
        name: 'Lo del Gaucho',
        photo: 'huacalera.jpg',
        description: 'Se encuentra a 25 km del cerro de los Siete Colores y a 4,8 km de Villa Florida, cerca de Tilcara. Los alojamientos disponen de zona de cocina con hervidor de agua, zona de comedor y baño privado con ducha. El camping cuenta con terraza y jardín.',
        availabilityFrom: today.valueOf() + 1728000000, // 20 days
        availabilityTo: today.valueOf() + 2592000000, // 30 days
        rooms: 32,
        city: 'Tilcara',
        country: 'Argentina',
        price: 100
    },
    {
        id: 5,
        slug: 'camping-carlos-xamena',
        name: 'Camping Carlos Xamena',
        photo: 'merced-del-alto.jpg',
        description: 'Este lugar de campamento se sienta en una cubierta de cedro elevada. Afuera, los campistas descubrirán de inmediato una barbacoa y una mesa de picnic. Los huéspedes tendrán acceso directo a la costa arenosa del río, junto con un valle boscoso lleno de vida silvestre',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 432000000, // 5 days
        rooms: 14,
        city: 'Salta',
        country: 'Argentina',
        price: 200
    },
    {
        id: 6,
        slug: 'camping-estancia-la-victoria',
        name: 'Camping Estancia La Victoria',
        photo: 'azur-real.jpg',
        description: 'Cuenta con 50 Hectáreas, una amplia zona de Camping para turismo y zonas especiales para contingentes grandes, y un espacio hermoso en medio de las montañas, ideal para turismo aventura, al lado de un bello arroyo en medio de bosquecitos.',
        availabilityFrom: today.valueOf() + 1296000000, // 15 days 
        availabilityTo: today.valueOf() + 2592000000, // 30 days
        rooms: 16,
        city: 'Córdoba',
        country: 'Argentina',
        price: 100
    },
    {
        id: 7,
        slug: 'complejo-don-quico',
        name: 'Complejo Don Quico',
        photo: 'rincon-del-socorro.jpg',
        description: 'El complejo posee 400 metros frente al Río Paraná, regalando extraordinarias postales desde sus barrancas. Se trata de un predio totalmente natural, donde podrán encontrar árboles con más de 100 años, avistar una gran cantidad de aves, monos carayá y demás fauna autóctona.',
        availabilityFrom: today.valueOf() + 432000000, // 5 days
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 11,
        city: 'Corrientes',
        country: 'Argentina',
        price: 200
    },
    {
        id: 8,
        slug: 'luma-casa-de-montana',
        name: 'Luma Casa de Montaña',
        photo: 'luma-casa-de-montana.jpg',
        description: 'Situada al sur de la Provincia de Neuquén, a unos 820 metros sobre en nivel del mar en una topografía típicamente cordillerana al pie de los cerros Bayo, Inacayal y Belvedere. En invierno el centro de esquí Cerro Bayo (a 3 Km. de nuestro complejo) ofrece la práctica de deportes invernales.',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 8,
        city: 'Villa La Angostura',
        country: 'Argentina',
        price: 200
    },
    {
        id: 9,
        slug: 'ghaya-mini-camping',
        name: 'Ghaya Mini Camping',
        photo: 'casa-turquesa.jpg',
        description: 'Ofrece vistas a la montaña y se encuentra en Florianópolis. Los huéspedes podrán practicar senderismo y pesca en las inmediaciones  o aprovechar al máximo el jardín. La isla de Campeche se encuentra a 2 km del camping, mientras que el centro comercial Iguatemi Florianópolis está a 15 km.',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 432000000, // 5 days
        rooms: 9,
        city: 'Florianópolis',
        country: 'Brasil',
        price: 300
    },
    {
        id: 10,
        slug: 'la-brume-trailers',
        name: 'La Brume Trailers',
        photo: 'vila-da-santa.jpg',
        description: "Está situado a menos de 1 km de Capivari y ofrece desayuno continental o a la carta en el camping. Cerca de La Brume Glamping se pueden encontrar lugares de interés como el club de tenis de Campos do Jordão, el centro comercial Cadij y la cervecería Baden Baden.",
        availabilityFrom: today.valueOf() + 864000000, // 10 days
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 19,
        city: 'Campos do Jordão',
        country: 'Brasil',
        price: 300
    },
    {
        id: 11,
        slug: 'floresta-encantada',
        name: 'Floresta Encantada',
        photo: 'uxua-casa.jpg',
        description: 'Está situado a 8,6 km de Praia Grande y ofrece alojamiento con terraza, cocina totalmente equipada con horno y nevera. Algunos tienen balcón y/o patio con vistas a la montaña o al río. El camping cuenta con barbacoa y jardín. En las inmediaciones se puede practicar snorkel. A 9,4 km se encuentra Praia Vermelha.',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 864000000, // 10 days
        rooms: 11,
        city: 'Ubatuba',
        country: 'Brasil',
        price: 400
    },
    {
        id: 12,
        slug: 'recanto-do-vale',
        name: 'Recanto do Vale',
        photo: 'ponta-dos-ganchos.jpg',
        description: 'El Recanto do Vale se encuentra en Pomerode, a 37 km de Brusque, 13 km de Blumenau y a 48 km de Itajaí. Todos los alojamientos disponen de patio con vistas al lago, cocina con microondas y nevera y baño compartido. El camping cuenta con barbacoa. En la zona se puede practicar senderismo, ciclismo y piragüismo.',
        availabilityFrom: today.valueOf() + 432000000, // 5 days
        availabilityTo: today.valueOf() + 864000000, // 10 days
        rooms: 25,
        city: 'Pomerode',
        country: 'Brasil',
        price: 400
    },
    {
        id: 13,
        slug: 'los-olivos-del-morro',
        name: 'Los Olivos Del Morro',
        photo: 'alto-atacama.jpg',
        description: 'Situado a solo 150 metros de la Playa El Morro, y a unos 15 kilómetros de Bahía Inglesa, es el lugar perfecto para disfrutar del aire libre. Los huéspedes hallarán zonas de parrilla, así como un bazar de alimentación. El camping igualmente tiene sanitarios y wifi. Cerca hallará muchas atracciones turísticas',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 864000000, // 10 days
        rooms: 42,
        city: 'San Pedro de Atacama',
        country: 'Chile',
        price: 400
    },
    {
        id: 14,
        slug: 'camping-calafquen',
        name: 'Camping Calafquen',
        photo: 'tierra-patagonia.jpg',
        description: 'Emplazado en un majestuoso bosque nativo de 30 hectáreas, a orilla del Lago Calafquén, destaca por tener una amplia playa de 1.5 kilómetros de extensión que incluye embarcaderos privados. El centro ofrece 83 sitios de camping con luz y agua, quinchos. Durante la temporada alta se organizan actividades recreativas.',
        availabilityFrom: today.valueOf() + 2592000000, // 30 days
        availabilityTo: today.valueOf() + 3456000000, // 40 days
        rooms: 40,
        city: 'Licanray',
        country: 'Chile',
        price: 400
    },
    {
        id: 15,
        slug: 'camping-extremo',
        name: 'Camping Extremo',
        photo: 'vira-vira.jpg',
        description: 'Se encuentra a las proximidades de las termas del río Chillán, posee infraestructura para personas con movilidad reducida, servicio de refrigeración y acepta mascotas. Se puede acampar o disfrutar de un día de picnic. Cuenta con tinas calientes, cuadrimotos y se puede ir en kayak.',
        availabilityFrom: today.valueOf() + 864000000, // 10 days
        availabilityTo: today.valueOf() + 1728000000, // 20 days
        rooms: 21,
        city: 'Chillán',
        country: 'Chile',
        price: 400
    },
    {
        id: 16,
        slug: 'bosque-nativo',
        name: 'Bosque Nativo',
        photo: 'vik-chile.jpg',
        description: 'Para los que buscan tranquilidad, cuenta con amplios sitios a orillas del rio Caliboro, ideal para su descanso con abundante sombra en bosque nativo con avistamiento de aves silvestres.',
        availabilityFrom: today.valueOf() + 432000000, // 5 days
        availabilityTo: today.valueOf() + 1728000000, // 20 days
        rooms: 22,
        city: 'Los Angeles',
        country: 'Chile',
        price: 400
    },
    {
        id: 17,
        slug: 'cabaña-de-estilo',
        name: 'Cabaña de Estilo',
        photo: 'casa-higueras.jpg',
        description: "Es un entorno Natural ùnico en Mercedes. Todos los alojamientos disponen de zona de estar con sofá, comedor y cocina totalmente equipada con microondas, nevera y fogones, aire acondicionado y acceso a un jardín. Fray Bentos se encuentra a 28 km del camping, mientras que Dolores está a 38 km.",
        availabilityFrom: today.valueOf() + 432000000, // 5 days
        availabilityTo: today.valueOf() + 1296000000, // 15 days
        rooms: 20,
        city: 'Mercedes',
        country: 'Uruguay',
        price: 400
    },
    {
        id: 18,
        slug: 'los-piamonteses',
        name: 'Los Piamonteses',
        photo: 'campo-tinto.jpg',
        description: 'Se encuentra a 9,2 km de Boca del Rosario. Ofrece un jardín con piscina al aire libre. Todos los alojamientos son independientes y cuentan con cocina equipada con nevera, baño privado con ducha y tienen balcón con vistas al lago. El camping alberga una terraza. En las inmediaciones se puede pescar.',
        availabilityFrom: today.valueOf() + 2160000000, // 25 days
        availabilityTo: today.valueOf() + 2592000000, // 30 days
        rooms: 4,
        city: 'Colonia',
        country: 'Uruguay',
        price: 100
    }
]
