const data = {
    MANOLO: {
        nombre: 'Tacos Manolo',
        descripcion: 'Tacos al pastor,suadero y tripa',
        horarioCierre: '3:30 AM',
        precioPorPersona: ['$$'],
        direccion: 'Calle Luz Saviñón 1305, Narvarte Poniente, 03020 CDMX',
        imagen: '../images/tmanolo.png'
    },
    GUERO: {
        nombre: 'Tacos don Guero',
        descripcion: 'Gringas y tacos de suadero',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$'],
        direccion: 'Río Nilo 66, Cuauhtémoc, 06700 Cuauhtémoc, CDMX',
        imagen: '../images/TdonGuero.png'
    },
    BORREGO: {
        nombre: 'Tacos elborrego viudo',
        descripcion: 'Tacos al pastor,lengua, sesos, suadero, longaniza, maciza, cachete, ojo y surtido',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$$$'],
        direccion: 'Av. Revolución 241, Tacubaya, 11870 Ciudad de México, CDMX',
        imagen: '../images/TborregoViudo.png'
    },
    BETO: {
        nombre: 'Tacos Beto los de cochinada',
        descripcion: 'Tacosde suadero, tripa y longaniza',
        horarioCierre: '4:00AM',
        precioPorPersona: ['$'],
        direccion: 'Dr José María Vertiz 1028, Vértiz Narvarte, 03600 Ciudad de México, CDMX',
        imagen: '../images/Tbeto.pngg'
    },
    ELFARAON: {
        nombre: 'El Faraon',
        descripcion: 'Tacos al pastor y quesos fundidos',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$$$'],
        direccion: 'Av Oaxaca 92-93, Roma Nte., 06700 Ciudad de México, CDMX',
        imagen: '../images/LosCompadresArabes.png'
    },
    ELHUEQUITO: {
        nombre: 'El huequito de Gante',
        descripcion: 'Tacos al pastor, quesos fundidos y cortes de carnes',
        horarioCierre: '2:00AM',
        precioPorPersona: ['$$$'],
        direccion: ' Gante 1, Centro Histórico, Centro, 06010 Ciudad de México, CDMX',
        imagen: '../images/TelHuequito.png'
    },
    ELTIZONCITO: {
        nombre: 'El Tizoncito',
        descripcion: 'Tacos al pastor y costilla ',
        horarioCierre: '4:·0AM',
        precioPorPersona: ['$$'],
        direccion: 'Hamburgo No. 70 - A, Juarez, 06600 Cuauhtemoc, CDMX',
        imagen: '../images/TelTizoncito.png.jpg'
    },
    ELPAISA: {
        nombre: 'Tortas y tacos elpaisa',
        descripcion: 'Tacos y tortas alpastor, quesos fundidos y cortes de carnes',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$'],
        direccion: 'La Coruña 302, Viaducto Piedad, 08200 Ciudad de México, CDMX',
        imagen: '../images/TelPaisa.png'
    },
    SALONCORONA: {
        nombre: 'Salon Corona',
        descripcion: 'Tacos y tortas al pastor, quesos fundidos y mariscos',
        horarioCierre: '2:00AM',
        precioPorPersona: ['$$'],
        direccion: 'Calle de Bolívar 24, Centro Histórico, Centro, 06000 Centro, CDMX',
        imagen: '../images/SalonCorona.png'
    },
    TLAQUEPAQUE: {
        nombre: 'Taqueria Tlaquepaque',
        descripcion: 'Tacos al pastor suadero, tripa y longaniza',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$'],
        direccion: 'Calle Isabel la Catolica 16, Centro Histórico, Centro, 06000 Ciudad de México, CDMX',
        imagen: '../images/tlaquepaque.png'
    },
    LOSCOMPADRES: {
        nombre: 'Loscompadres Arabes',
        descripcion: 'Tacos alpastor, quesos fundidos y molcajetes de carne',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$$'],
        direccion: 'Convento de capuchinas #29, Jardines de Santa monica, 54050 Tlalnepantla, Méx.',
        imagen: '../images/LosCompadresArabes.png'
    },
    CHUPACABRAS: {
        nombre: 'Super tacos Chupacabras',
        descripcion: 'Tacos bisteck, cecina,chorizo,suadero,pastor y arabes',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$$'],
        direccion: 'Avenida México Coyoacán Sn Local 1, Xoco, 03330 Benito Juárez, CDMX',
        imagen: '../images/Chupacabras.png'
    },
    ELVILSITO: {
        nombre: 'El Vilsito',
        descripcion: 'Tacos al pastor y quesos fundidos ',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$$'],
        direccion: 'Avenida Universidad, Narvarte Poniente, 03020 Ciudad de México, CDMX',
        imagen: '../images/Elvilsito.png.jpg'
    },
    LOSPARADOS: {
        nombre: 'Los Parados',
        descripcion: 'Tacos alpastor,suadero y antojitos mexicanos',
        horarioCierre: '2:30AM',
        precioPorPersona: ['$$$'],
        direccion: '03650 de, Av. Universidad 540, Narvarte Poniente, Ciudad de México, CDMX',
        imagen: '../images/losParados.png.jpg'
    },
    ELCHAPARRITO: {
        nombre: 'El Chaparrito',
        descripcion: 'Tacos alpastor, suadero,tripa, bisteck y chuleta',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$'],
        direccion: 'Calle Mitla 1307, Benito Juárez, Letran Valle, 03650 Ciudad de México, CDMX',
        imagen: '../images/ElCHaparrito.png'
    },
    LOSPRIMOS: {
        nombre: 'Los primos',
        descripcion: 'Tacos alpastor, suadero, tripa y chuleta',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$$$'],
        direccion: 'Av. Universidad 784, Narvarte Poniente, Narvarte Oriente, 03020 Ciudad de México, CDMX',
        imagen: '../images/losPrimos.png'
    },
    ORINOCO: {
        nombre: 'Taqueria orinoco',
        descripcion: 'Tacos al pastor, bisteck ,chicharron,asada y costilla ',
        horarioCierre: '5:00AM',
        precioPorPersona: ['$$$'],
        direccion: ' Insurgentes Sur 253, Roma Nte., 06700 Ciudad de México, CDMX',
        imagen: '../images/orinoco.png'
    },

    ELCALIFA: {
        nombre: 'El Califa',
        descripcion: 'Tacos alpastor, costilla, chicharron y arrachera',
        horarioCierre: '4:00AM',
        precioPorPersona: ['$$$'],
        direccion: 'Paseo de la Reforma 382, Cuauhtémoc, 06600 Ciudad de México, CDMX',
        imagen: '../images/elCalifa.png.jpg'
    },
    LAUNICA: {
        nombre: 'La Unica',
        descripcion: 'Tacos alpastor, suadero, tripa y chuleta',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$$$'],
        direccion: 'Av. Morelos 41, San Javier, 54030 Tlalnepantla, Méx.',
        imagen: '../images/LosCompadresArabes.png'
    },
    PARRILLERO: {
        nombre: 'El Parrillero',
        descripcion: 'Tacos alpastor',
        horarioCierre: '7:00AM',
        precioPorPersona: ['$'],
        direccion: ' 28, Aldama, Tlalnepantla Centro, 54000 Tlalnepantla, Méx.',
        imagen: '../images/parrillero'
    },




}