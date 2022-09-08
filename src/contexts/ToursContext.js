import { createContext, useState } from "react";

export const ToursContext = createContext();

function ToursContextProvider({ children }) {

    const [tours, setTour] = useState([
        {
            id: 0,
            destination: 'Santa Cruz',
            description: 'Anímate a conocer la Octava Maravilla del Mundo, el Glaciar Perito Moreno. Una puesta majestuosa de la naturaleza que deja sin aliento a sus visitantes. Está compuesto por inmensas masas de hielo que se desprenden año tras año y atrae a cientos de turistas. Rodeado de bosques y montañas que se funden entre si, forman el escenario perfecto para deslumbrarte y dejarte sin aliento. Al vivir esta experiencia, vas a tener la oportunidad de conocer una de las reservas de agua potable más importantes del mundo, caminar por sus pasarelas y aprender más sobre ésta sublime maravilla. Para ello, por la mañana nuestro guía pasará a buscarte por el hotel. Para llegar a destino, recorrerás los 80 km de distancia que separan a El Calafate del Glaciar Perito Moreno, único en el mundo en constante avance. Durante el trayecto conocerás hermosos lugares de la pre-cordillera andina, bordeando al margen sur del Lago argentino. Luego de cruzar los ríos Centinela y Mitre, llegarás al Brazo Rico para ingresar en el Parque Nacional “Los Glaciares”. Bordeando el Lago Rico comenzarás a divisar los témpanos flotando sobre el agua hasta que por fin podrás apreciar en toda su magnitud esta maravilla natural que ha sido declarada por las Naciones Unidas como Patrimonio de la humanidad. Pero esto no es todo, claro que no. Tendrás la posibilidad de recorrer los diversos trayectos que hacen las diferentes pasarelas y obtener diferentes perspectivas del lugar. Capturarás fotos para crear recuerdos inolvidables de este gran día. Además, gozarás de tiempo libre para comer un rico snack o disfrutar de una comida más abundante que podrás adquirir en restaurantes nativos. Al finalizar la excursión, y luego de haber pasado un día conectando con la magia de la naturaleza regresarás al hotel lleno de recuerdos e inolvidables sensaciones, que te dejarán con ganas de volver una vez más.',
            details: 'menores a partir de 3 años cumplidos a 11 años cumplidos abonan tarifa “niños”.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/MVTq5l5w9E4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/calafate.jpg"  alt= "Glaciar Perito Moreno"/>
        },
        {
            id: 1,
            destination: 'Misiones',
            description: 'El Parque de cataratas brasileras está ubicado en la ciudad Foz do Iguaçu y ocupa una superficie de 175.000 has. En primer lugar, se sorprenderá con el cuidado, la belleza y la enormidad del mismo que alberga innumerables especies de animales y vegetales. Y la naturaleza los recibirá con bienvenidas de simpáticas mariposas que se exhiben en su vuelo y lo deleitarán con sus colores. Dado que el 80% de los saltos se encuentran del lado argentino, el Parque brasileño cuenta con una sola pasarela de aproximadamente 1.000 mts. Desde allí podrán disfrutar de las distintas vistas panorámicas desde distintos ángulos. Asimismo podrá observar la fuerza con la que cae el agua de las cataratas que transmite una energía indescriptible digna de la magia de la naturaleza. Frente al salto Floriano, se encuentra un mirador al que podrán acceder a través de un elevador, del que se obtiene una de las vistas más imponentes de los Saltos. Por otra parte, el almuerzo es opcional y no está incluido. Recomendamos hacerlo disfrutando de las increíbles visitas que ofrecen las cataratas brasileras. Cabe destacar también, que el parque cuenta con una tienda de recuerdos, donde podrán adquirir souvenirs para llevar a casa y recordar esta increíble experiencia. También hay un kiosco donde podrán encontrar bebidas y distintos snacks, y restaurantes si lo que desean es una comida más completa. Este es el lugar perfecto para tomar un breve descanso y parar a almorzar. Durante el recorrido también podrán encontrar baños.',
            details: 'menores hasta de 3 años no abona con 2 pagantes, sin derecho asiento.  A partir de 4 años cumplidos abonan tarifa “niños”. Salidas únicamente desde Iguazú. No incluye salidas desde Meliá Iguazú y hoteles ubicados en Zona de Granja, Barrio Belén, Barrio Santa Rosa, Barrio Orquídeas, fuera del ejido hotelero. Recomendaciones: llevar repelente de insectos, zapatillas y ropa cómoda.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/je668DqhHVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/cataratas.jpg"  alt= "Cataratas del Iguazú"/>
        },
        {
            id: 2,
            destination: 'Usuhaia',
            description: 'En esta increíble excursión prepárate para ser fascinado por el reconocido Canal de Beagle. Paso marítimo, ubicado en el extremo meridional de América del Sur, que conecta al océano Atlántico con el océano Pacífico. Por este canal se pueden realizar paseos únicos y disfrutar de los más fascinantes paisajes en la ciudad más austral del mundo. Es uno de los principales atractivos de Ushuaia, y en esta interesante excursión te llevamos a explorarlo. Para ello, partimos del puerto local en modernas embarcaciones, con un grupo reducido de pasajeros, hacia la deslumbrante Isla Alicia. Allí observaremos una colonia de leones marinos de un pelo. Luego ponemos proa hacia la Isla de los Pájaros, donde habitan las colonias de cormoranes reales e imperiales junto a sus nidos, pudiendo avistar a sus pichones desde la primavera hasta el otoño. Nuevamente ponemos rumbo hasta otra pequeña isla que, donde según la época del año, hay lobos marinos de dos pelos. Muy cerquita se encuentra el Faro Les Eclaireurs, auténtico y mítico símbolo de la ciudad de Ushuaia, construido en 1919. Éste se destaca por su impronta y su decoración, con vistosas rayas blancas y roja. Desde allí avistamos la isla de cormoranes roqueros. De regreso desembarcamos en la Isla Bridges, donde haremos una caminata para recorrer un sendero de interpretación de flora y avifauna, conocerá la historia de los aborígenes Yámanas y donde podrá observar, debido a que es la isla mas grande, la magnificencia del Canal Beagle con la Ciudad de Ushuaia a lo lejos. Durante la travesía compartiremos un rico y caliente té, chocolate o un buen café con licor y sabrosas galletitas.',
            details: 'para realizar esta excursión debes presentarte 30 minutos antes en el muelle turístico. Nivel de caminata: fácil. Esta excursión puede sufrir variantes por motivos climáticos. Disponible en temporada de VERANO e INVIERNO. Los menores de 3 años no abonan, de 3 a 11 abonan tarifa de menor. Recomendaciones: llevar agua, calzado cómodo, capa para lluvia, cámara de fotos y anteojos de sol.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/3TpSoR189Wo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/usuhaia.jpg" alt= "Isla"/>
        },
        {
            id: 3,
            destination: 'Chubut',
            description: 'Península Valdés es una reserva natural de la Patagonia y se encuentra ubicada en la provincia de Chubut. Fue incorporada por la Unesco como Patrimonio de la Humanidad en 1999. En ella podemos encontrar animales marinos que habitan en el mar y las playas circundantes. Entre ellos se encuentran elefantes marinos, ballenas y lobos marinos. Para iniciar esta excursión a Península Valdés Sur, partimos temprano por la mañana hacia Península Valdés. Entre los puntos turísticos más destacados de la misma están: el Centro de Interpretación Istmo Ameghino. Este lugar servirá como punto de preparación para entender cuáles son las características de la biodiversidad de la zona y la interrelación que existe entre las especies animales, la geografía y el hombre. Luego visitaremos Puerto Pirámides, desde donde se realizan las navegaciones para el Avistaje de Ballenas. A continuación podrás ver desde el camino las Salinas Chica y Grande o El Gran Salitral; las cuales están entre las mayores depresiones de América; los apostaderos costeros de elefantes marinos en Punta Delgada y Punta Cantor; y pingüinos en Caleta Valdés. En el recorrido tendremos la posibilidad de ver mucha fauna terrestre como guanacos, maras, zorros, armadillos y choiques. Durante todo el día estarás asesorado por  nuestros guías, expertos intérpretes de la naturaleza patagónica. Al finalizar la excursión Península Valdés Sur, emprendemos el viaje de regreso a la ciudad.',
            details: 'menores a partir de 4 años cumplidos a 11 años cumplidos abonan tarifa “niños”; menores de 4 años no abonan.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/SXR_mToJ-Vc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/chubut.jpg" alt= ""/>
        },
        {
            id: 4,
            destination: 'Mendoza',
            description: 'El volcán Malacara se encuentra a unos 43 Km. al sureste de la ciudad de Malargüe y tiene una altura de poco más de 1800 msnm. Su erupción es del tipo hidromagmática, la cual se produce cuando la lava entra en contacto con agua y se caracteriza por ser muy violenta. Alrededor de 10.000 años atrás se produjo su erupción. La erosión de las “tetras” (material volcánico depositado en finas láminas), el desgaste que aportan el agua y el viento a través del tiempo, han dado origen a pasadizos. Así como también cárcavas y chimeneas con casi 30 metros de altura. Su nombre hace referencia a la similitud con el rostro manchado de los caballos malacara. Tienen cabello oscuro y gran parte de la cara blanca. Comenzaremos esta excursión al Volcán Malacara desde el puesto Quesada. Y luego, iremos en vehículo hasta la base del volcán, y comenzaremos con la caminata a las entrañas de esta maravilla natural. El Trekking es de dificultad moderada y dura casi dos horas. Las sensaciones se exaltan al transitar las cárcavas de “Los Puentes”, la de “Tyto alba” (Lechuza Blanca, que anida en las abruptas paredes del Volcán) y las “Cárcavas Oscuras”. Al pasar de una cárcava a la otra, se llega a uno de los miradores más sorprendentes del área. Desde donde se observan la laguna del Llancanelo. En resumen, un hermoso espejo de agua con una biodiversidad excepcional. También es posible observar la antena DS3, la impactante Cordillera de los Andes y parte la concentración de volcanes más grande de América del Sur, La Payunia. Luego de disfrutar nuestra visita al Volcán Malacara emprendemos el viaje de regreso a Malargüe.',
            details: 'no hay edad mínima realizar para la excursión, ideal para disfrutar en familia. Recomendaciones: llevar calzado adecuado para realizar las caminatas y abrigo. En verano es aconsejable llevar sombrero o gorro para sol, protector solar y agua.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/FP5As-kSW6M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/malargue.jpg" alt= ""/>
        },
        {
            id: 5,
            destination: 'Salta',
            description: 'Cafayate es una localidad de la provincia de Salta. Está ubicada en el corazón de los valles calchaquíes, rodeado de montañas multicolores. Es conocida mundialmente por tener la ruta del vino más alta del mundo.  Se encuentra a 2000 metros sobre el nivel del mar. Además, destacan en ella sus casonas coloniales, sus formaciones geológicas y sus colores, sus reconocidas bodegas y la exquisita gastronomía local. Para conocer esta singular localidad, comenzamos el recorrido por el Valle de Lerma. Atravesaremos campos de cultivo de tabaco y pueblos de arquitectura colonial como Alemania. Éste solía ser el punto final del ferrocarril Belgrano. Luego, ingresamos a la Quebrada del Río Las Conchas. Allí las curiosas formaciones erosionadas por el viento y el agua serán el principal atractivo: los médanos, el sapo, el obispo, la garganta del diablo, los castillos, el anfiteatro, entre otros. Luego continuamos por la ruta Nacional 68 llegando a Cafayate, la ciudad más joven de los Valles Calchaquíes. Reconocida a nivel internacional por las cepas de sus vinos, en particular el exquisito Torrontés. Podrá ser degustado en las visitas a sus bodegas, ya sean artesanales o de tipo industrial. Esta particular cepa autóctona produce un vino fresco y aromático, con una acidez moderada, una textura suave al paladar y aromas distintivos a melocotón y albaricoque. Luego de haber conocido esta espectacular e inigualable localidad, emprendemos el viaje de regreso a Salta por la misma ruta. Pero en esta ocasión lo haremos con una luz solar completamente distinta, cuya iluminación modificará el inigualable paisaje en la quebrada por completo.',
            details: 'menores de hasta 3 años cumplidos free. Desde 4 años cumplidos a 6 años cumplidos abona tarifa “niños”. A partir de 7 años abona tarifa “adulto”. No incluye salidas desde San Lorenzo. Trasladarse por su cuenta al punto de encuentro.',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/Il9Pc99HI_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/cafayate.jpg" alt= ""/>
        },
        {
            id: 6,
            destination: 'Perú',
            description: 'Viaja al pasado y explora la impresionante cordillera de los Andes de Perú en una excursión con múltiples actividades por el Camino Inca. Adéntrate en la selva en tirolina, baja las montañas en bicicleta y más. Busca fauna y flora indígena y explora la antigua ciudadela de Machu Picchu. Durante el primer día, viaja desde Cuzco a Abra Malaga, a 4316 metros sobre el nivel del mar y recibe una sesión de entrenamiento de 20 minutos antes de bajar por los sinuosos caminos de montaña en bicicleta. Dirígete hacia Huamanmarca y descubre el pasado histórico del yacimiento arqueológico antes de comer. Desciende a una altitud de 1500 metros para llegar a la localidad de Santa María, en la selva, donde podrás descansar antes de cenar comida tradicional peruana. En el segundo día, disfruta de una taza de café indígena por la mañana antes de caminar hacia Santa Rosa para relajarte en las hamacas y admirar las plantaciones de coca cuando llegues. Recorre las empinadas cuestas del Camino Inca tal y como lo hacían los incas hace miles de años para llegar a Qellomayo para tomar un autobús hacia un hotel ecológico donde pasarás la noche. Elévate sobre las copas de los árboles en una tirolina de 2500 metros de cables suspendidos sobre la selva y date un baño en las termas de Cocalmayo antes de la cena. Al día siguiente, dirígete a la ciudad de Lucmabamba para comenzar una caminata de 3 horas y media hacia la cima de Llactapata, lejos de las masas. Maravíllate ante la cima de Salkantay y disfruta de un picnic para almorzar antes de una caminata de 2 horas hacia la estación de tren hidroeléctrico, donde tomarás el tren hacia Aguas Calientes. Disfruta de la cena en un restaurante local antes de pasar la noche en la localidad. Durante la última jornada, toma el primer autobús a Machu Picchu para ver el amanecer sobre la "ciudad perdida de los incas" y escucha explicaciones detalladas sobre el lugar ceremonial con ayuda de tu guía. Disfruta de tiempo libre para explorar a tu ritmo y aprovecha la oportunidad de subir a Wayna Picchu, por encima de las ruinas de la "Ciudad Perdida". Regresa a Aguas Calientes en autobús para tomar el tren a Ollantaytambo y, después, continúa en autobús hacia Cuzco. ',
            details: 'los niños de más de 10 años y de más de 1,5 metros de altura pueden montar solos Esta información se requiere por adelantado para confirmar tu reserva. Deberás llevar una pequeña mochila, un forro polar, buenos zapatos de trekking o botas, una chaqueta de lluvia o poncho, traje de baño, sandalias, toalla, repelente de insectos, camisetas y pantalones cortos, protector solar, gafas de sol, un sombrero, una linterna, cualquier medicación personal y tu pasaporte original. Trae un pasaporte válido el día del tour. Se recomienda traer dinero local en efectivo, ya que puede haber sitios que no acepten tarjetas de crédito. La entrada a Wayna Picchu está sujeta a disponibilidad. Deberás confirmarlo en la reserva. Este tour no se reembolsa una vez confirmado',
            video: <iframe width="100%" height="315" src="https://www.youtube.com/embed/lNIEZ61PyG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            image: <img width="100%" height="315" src="./assets/img/peru.jpg" alt= ""/>
        }
    ])
    return (
        <ToursContext.Provider value={tours}>
            {children}
        </ToursContext.Provider>
    )
}

export default ToursContextProvider