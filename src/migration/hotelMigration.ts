import Hotel from '../models/hotelModel';  // Asegúrate de ajustar la ruta al modelo

export async function agregarHoteles() {
  try {
    const cuentaHoteles = await Hotel.countDocuments();

    if (cuentaHoteles === 0) {
      const hotelesDeEjemplo = [
        {
          name: 'Hotel El Paraíso',
          location: 'Bogotá, Colombia',
          description: 'Un hermoso hotel en el corazón de Bogotá.',
          starRating: 5,
          amenities: ['Wi-Fi gratuito', 'Piscina', 'Gimnasio', 'Desayuno incluido'],
          image: 'https://hotel-paraiso-azul.bogota-hotels-co.net/data/Images/OriginalPhoto/10812/1081280/1081280530/bogota-hotel-paraiso-azul-image-54.JPEG',
          pricePerNight: 150,
        },
        {
          name: 'Hotel Las Palmas',
          location: 'Medellín, Colombia',
          description: 'Disfruta de la comodidad y la naturaleza.',
          starRating: 4,
          amenities: ['Wi-Fi gratuito', 'Spa', 'Restaurante', 'Estacionamiento gratuito'],
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/c5/61/6b/paraiso-ferial.jpg?w=700&h=-1&s=1',
          pricePerNight: 120,
        },
        // Agrega otros 8 hoteles de ejemplo...
        {
          name: 'Hotel Mar Azul',
          location: 'Cartagena, Colombia',
          description: 'Un hotel frente al mar con vistas espectaculares.',
          starRating: 5,
          amenities: ['Wi-Fi gratuito', 'Piscina', 'Playa privada', 'Restaurante gourmet'],
          image: 'https://www.decameron.com/images/destinos/colombia/marazul/marazul-019.jpg',
          pricePerNight: 200,
        },
        {
          name: 'Hotel Montaña Verde',
          location: 'Manizales, Colombia',
          description: 'Un lugar perfecto para el descanso en la montaña.',
          starRating: 4,
          amenities: ['Wi-Fi gratuito', 'Sauna', 'Restaurante', 'Tours guiados'],
          image: 'https://z.cdrst.com/foto/hotel-sf/57061/granderesp/hostal-monte-verde-general-c9b5a9a.jpg',
          pricePerNight: 100,
        },
        {
          name: 'Hotel Sol y Luna',
          location: 'Santa Marta, Colombia',
          description: 'Hotel acogedor con acceso directo a la playa.',
          starRating: 3,
          amenities: ['Wi-Fi gratuito', 'Piscina', 'Desayuno incluido', 'Estacionamiento gratuito'],
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b4/f3/a7/terraza-y-piscina.jpg?w=700&h=-1&s=1',
          pricePerNight: 80,
        },
        {
          name: 'Hotel La Casona',
          location: 'Villa de Leyva, Colombia',
          description: 'Hotel histórico en un pueblo colonial.',
          starRating: 4,
          amenities: ['Wi-Fi gratuito', 'Desayuno incluido', 'Tours culturales', 'Jardín'],
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/198817619.jpg?k=9a9908d13402098040cecfe8dfa54dda307466ca68a4bf50e39ae38c85a6482b&o=&hp=1',
          pricePerNight: 90,
        },
        {
          name: 'Hotel Nevado',
          location: 'Pereira, Colombia',
          description: 'Hotel moderno con vistas a los nevados.',
          starRating: 5,
          amenities: ['Wi-Fi gratuito', 'Spa', 'Gimnasio', 'Restaurante internacional'],
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/7f/6d/fd/caption.jpg',
          pricePerNight: 180,
        },
        {
          name: 'Hotel La Selva',
          location: 'Amazonas, Colombia',
          description: 'Una experiencia única en la selva amazónica.',
          starRating: 4,
          amenities: ['Wi-Fi gratuito', 'Piscina', 'Tours ecológicos', 'Restaurante local'],
          image: 'https://media.traveler.es/photos/61377ad66936668f30c3fb57/4:3/w_900,h_675,c_limit/30699.jpg',
          pricePerNight: 140,
        },
        {
          name: 'Hotel Oro y Plata',
          location: 'Cali, Colombia',
          description: 'Lujoso hotel en la capital de la salsa.',
          starRating: 5,
          amenities: ['Wi-Fi gratuito', 'Piscina', 'Gimnasio', 'Bar en la azotea'],
          image: 'https://www.es.kayak.com/rimg/himg/95/3e/5c/leonardo-2147338-GUEST_ROOM_11_O-702286.jpg?width=1366&height=768&crop=true',
          pricePerNight: 160,
        },
        {
          name: 'Hotel Las Nubes',
          location: 'San Andrés, Colombia',
          description: 'Un paraíso tropical en el Caribe.',
          starRating: 5,
          amenities: ['Wi-Fi gratuito', 'Playa privada', 'Spa', 'Restaurante caribeño'],
          image: 'https://www.caribemexicano.travel/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/quintanaroo/Las-Nubes-de-Holbox---Joe-Richaud-d7f0b8a65056a36_d7f0b9c1-5056-a36a-08b072e3690483dc.jpg',
          pricePerNight: 220,
        }
      ];

      await Hotel.insertMany(hotelesDeEjemplo);
      console.log('Hoteles de ejemplo agregados exitosamente.');
    } else {
      console.log('La colección de hoteles ya contiene datos.');
    }
  } catch (error) {
    console.error('Error al verificar o agregar hoteles:', error);
  }
}
