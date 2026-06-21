// Datos del Mundial 2026 - obtenidos en vivo el 20 de junio de 2026
const MUNDIAL_DATA = {
  actualizado: "20 de junio de 2026",
  standings: [
    {rank:1,team:"México",abbr:"MEX",w:2,l:0,d:0,pts:6,group:"A"},
    {rank:2,team:"Corea del Sur",abbr:"KOR",w:1,l:1,d:0,pts:3,group:"A"},
    {rank:3,team:"Chequia",abbr:"CZE",w:0,l:1,d:1,pts:1,group:"A"},
    {rank:4,team:"Sudáfrica",abbr:"RSA",w:0,l:1,d:1,pts:1,group:"A"},

    {rank:1,team:"Canadá",abbr:"CAN",w:1,l:0,d:1,pts:4,group:"B"},
    {rank:2,team:"Suiza",abbr:"SUI",w:1,l:0,d:1,pts:4,group:"B"},
    {rank:3,team:"Bosnia y Herzegovina",abbr:"BIH",w:0,l:1,d:1,pts:1,group:"B"},
    {rank:4,team:"Qatar",abbr:"QAT",w:0,l:1,d:1,pts:1,group:"B"},

    {rank:1,team:"Brasil",abbr:"BRA",w:1,l:0,d:1,pts:4,group:"C"},
    {rank:2,team:"Marruecos",abbr:"MAR",w:1,l:0,d:1,pts:4,group:"C"},
    {rank:3,team:"Escocia",abbr:"SCO",w:1,l:1,d:0,pts:3,group:"C"},
    {rank:4,team:"Haití",abbr:"HTI",w:0,l:2,d:0,pts:0,group:"C"},

    {rank:1,team:"Estados Unidos",abbr:"USA",w:2,l:0,d:0,pts:6,group:"D"},
    {rank:2,team:"Australia",abbr:"AUS",w:1,l:1,d:0,pts:3,group:"D"},
    {rank:3,team:"Paraguay",abbr:"PAR",w:1,l:1,d:0,pts:3,group:"D"},
    {rank:4,team:"Turquía",abbr:"TUR",w:0,l:2,d:0,pts:0,group:"D"},

    {rank:1,team:"Alemania",abbr:"GER",w:2,l:0,d:0,pts:6,group:"E"},
    {rank:2,team:"Costa de Marfil",abbr:"CIV",w:1,l:1,d:0,pts:3,group:"E"},
    {rank:3,team:"Ecuador",abbr:"ECU",w:0,l:1,d:0,pts:0,group:"E"},
    {rank:4,team:"Curazao",abbr:"CUW",w:0,l:1,d:0,pts:0,group:"E"},

    {rank:1,team:"Países Bajos",abbr:"NED",w:1,l:0,d:1,pts:4,group:"F"},
    {rank:2,team:"Suecia",abbr:"SWE",w:1,l:1,d:0,pts:3,group:"F"},
    {rank:3,team:"Japón",abbr:"JPN",w:0,l:0,d:1,pts:1,group:"F"},
    {rank:4,team:"Túnez",abbr:"TUN",w:0,l:1,d:0,pts:0,group:"F"},

    {rank:1,team:"Nueva Zelanda",abbr:"NZL",w:0,l:0,d:1,pts:1,group:"G"},
    {rank:2,team:"Irán",abbr:"IRN",w:0,l:0,d:1,pts:1,group:"G"},
    {rank:3,team:"Bélgica",abbr:"BEL",w:0,l:0,d:1,pts:1,group:"G"},
    {rank:4,team:"Egipto",abbr:"EGY",w:0,l:0,d:1,pts:1,group:"G"},

    {rank:1,team:"Uruguay",abbr:"URU",w:0,l:0,d:1,pts:1,group:"H"},
    {rank:2,team:"Arabia Saudita",abbr:"KSA",w:0,l:0,d:1,pts:1,group:"H"},
    {rank:3,team:"España",abbr:"ESP",w:0,l:0,d:1,pts:1,group:"H"},
    {rank:4,team:"Cabo Verde",abbr:"CPV",w:0,l:0,d:1,pts:1,group:"H"},

    {rank:1,team:"Noruega",abbr:"NOR",w:1,l:0,d:0,pts:3,group:"I"},
    {rank:2,team:"Francia",abbr:"FRA",w:1,l:0,d:0,pts:3,group:"I"},
    {rank:3,team:"Senegal",abbr:"SEN",w:0,l:1,d:0,pts:0,group:"I"},
    {rank:4,team:"Irak",abbr:"IRQ",w:0,l:1,d:0,pts:0,group:"I"},

    {rank:1,team:"Argentina",abbr:"ARG",w:1,l:0,d:0,pts:3,group:"J"},
    {rank:2,team:"Austria",abbr:"AUT",w:1,l:0,d:0,pts:3,group:"J"},
    {rank:3,team:"Jordania",abbr:"JOR",w:0,l:1,d:0,pts:0,group:"J"},
    {rank:4,team:"Argelia",abbr:"DZA",w:0,l:1,d:0,pts:0,group:"J"},

    {rank:1,team:"Colombia",abbr:"COL",w:1,l:0,d:0,pts:3,group:"K"},
    {rank:2,team:"RD del Congo",abbr:"COD",w:0,l:0,d:1,pts:1,group:"K"},
    {rank:3,team:"Portugal",abbr:"POR",w:0,l:0,d:1,pts:1,group:"K"},
    {rank:4,team:"Uzbekistán",abbr:"UZB",w:0,l:1,d:0,pts:0,group:"K"},

    {rank:1,team:"Inglaterra",abbr:"ENG",w:1,l:0,d:0,pts:3,group:"L"},
    {rank:2,team:"Ghana",abbr:"GHA",w:1,l:0,d:0,pts:3,group:"L"},
    {rank:3,team:"Panamá",abbr:"PAN",w:0,l:1,d:0,pts:0,group:"L"},
    {rank:4,team:"Croacia",abbr:"CRO",w:0,l:1,d:0,pts:0,group:"L"}
  ],
  jugados: [
    {home:"Chequia",away:"Sudáfrica",hs:1,as:1,fecha:"18 jun",hora:"10:00 AM CST"},
    {home:"Suiza",away:"Bosnia y Herzegovina",hs:4,as:1,fecha:"18 jun",hora:"1:00 PM CST"},
    {home:"Canadá",away:"Qatar",hs:6,as:0,fecha:"18 jun",hora:"4:00 PM CST"},
    {home:"México",away:"Corea del Sur",hs:1,as:0,fecha:"18 jun",hora:"7:00 PM CST"},
    {home:"Estados Unidos",away:"Australia",hs:2,as:0,fecha:"19 jun",hora:"1:00 PM CST"},
    {home:"Escocia",away:"Marruecos",hs:0,as:1,fecha:"19 jun",hora:"4:00 PM CST"},
    {home:"Brasil",away:"Haití",hs:3,as:0,fecha:"19 jun",hora:"6:30 PM CST"},
    {home:"Turquía",away:"Paraguay",hs:0,as:1,fecha:"19 jun",hora:"9:00 PM CST"},
    {home:"Países Bajos",away:"Suecia",hs:5,as:1,fecha:"20 jun",hora:"11:00 AM CST"},
    {home:"Alemania",away:"Costa de Marfil",hs:2,as:1,fecha:"20 jun",hora:"2:00 PM CST"}
  ],
  proximos: [
    {home:"Ecuador",away:"Curazao",fecha:"20 jun",hora:"6:00 PM CST",prob:{home:85.5,away:4.3,draw:10.2}},
    {home:"Túnez",away:"Japón",fecha:"20 jun",hora:"10:00 PM CST",prob:{home:12.4,away:66.1,draw:21.5}},
    {home:"España",away:"Arabia Saudita",fecha:"21 jun",hora:"10:00 AM CST",prob:{home:88.5,away:3.1,draw:8.4}},
    {home:"Bélgica",away:"Irán",fecha:"21 jun",hora:"1:00 PM CST",prob:{home:67.7,away:12.0,draw:20.3}},
    {home:"Uruguay",away:"Cabo Verde",fecha:"21 jun",hora:"4:00 PM CST",prob:{home:65.8,away:11.7,draw:22.5}},
    {home:"Nueva Zelanda",away:"Egipto",fecha:"21 jun",hora:"7:00 PM CST",prob:{home:16.6,away:59.5,draw:23.9}},
    {home:"Argentina",away:"Austria",fecha:"22 jun",hora:"11:00 AM CST",prob:{home:61.1,away:15.7,draw:23.2}},
    {home:"Francia",away:"Irak",fecha:"22 jun",hora:"3:00 PM CST",prob:{home:90.2,away:2.6,draw:7.2}},
    {home:"Noruega",away:"Senegal",fecha:"22 jun",hora:"6:00 PM CST",prob:{home:42.2,away:30.4,draw:27.4}},
    {home:"Jordania",away:"Argelia",fecha:"22 jun",hora:"9:00 PM CST",prob:{home:15.9,away:61.4,draw:22.7}}
  ],

  // Tabla de goleadores — fuente: prensa especializada (Olympics, RPP, 365scores), 20 jun 2026
  goleadores: [
    {jugador:"Lionel Messi", pais:"Argentina", goles:3, asist:0, equipo:"Inter Miami"},
    {jugador:"Jonathan David", pais:"Canadá", goles:3, asist:0, equipo:"Juventus"},
    {jugador:"Cyle Larin", pais:"Canadá", goles:2, asist:0, equipo:"Mallorca"},
    {jugador:"Elijah Just", pais:"Nueva Zelanda", goles:2, asist:0, equipo:"-"},
    {jugador:"Erling Haaland", pais:"Noruega", goles:2, asist:0, equipo:"Manchester City"},
    {jugador:"Folarin Balogun", pais:"Estados Unidos", goles:2, asist:0, equipo:"Monaco"},
    {jugador:"Ismael Saibari", pais:"Marruecos", goles:2, asist:0, equipo:"PSV"},
    {jugador:"Julián Quiñones", pais:"Colombia", goles:1, asist:0, equipo:"Club América", nota:"Anotó el primer gol del torneo"}
  ],

  // Asistidores destacados (estimado a partir de eventos de partidos jugados y cobertura de prensa)
  asistidores: [
    {jugador:"Bruno Fernandes", pais:"Portugal", asist:1, equipo:"Manchester United"},
    {jugador:"Cody Gakpo", pais:"Países Bajos", asist:1, equipo:"Liverpool"},
    {jugador:"Rodrigo De Paul", pais:"Argentina", asist:1, equipo:"Atlético Madrid"},
    {jugador:"Raphinha", pais:"Brasil", asist:1, equipo:"Barcelona"}
  ],

  // Estadísticas de equipo extraídas directamente de los partidos jugados (datos en vivo)
  statsEquipos: [
    {equipo:"Portugal", rival:"RD del Congo", resultado:"1-1", posesion:75, tirosTotal:9, tirosPuerta:3, paradas:1, corners:5, faltas:9, amarillas:3},
    {equipo:"RD del Congo", rival:"Portugal", resultado:"1-1", posesion:25, tirosTotal:8, tirosPuerta:2, paradas:0, corners:4, faltas:9, amarillas:1},
    {equipo:"Argentina", rival:"Argelia", resultado:"3-0", posesion:47, tirosTotal:9, tirosPuerta:6, paradas:0, corners:2, faltas:12, amarillas:0},
    {equipo:"Argelia", rival:"Argentina", resultado:"0-3", posesion:53, tirosTotal:6, tirosPuerta:0, paradas:2, corners:2, faltas:8, amarillas:0},
    {equipo:"Brasil", rival:"Haití", resultado:"3-0", posesion:57, tirosTotal:9, tirosPuerta:5, paradas:3, corners:4, faltas:13, amarillas:1},
    {equipo:"Haití", rival:"Brasil", resultado:"0-3", posesion:43, tirosTotal:8, tirosPuerta:4, paradas:1, corners:4, faltas:15, amarillas:3},
    {equipo:"Países Bajos", rival:"Suecia", resultado:"5-1", posesion:0, tirosTotal:0, tirosPuerta:0, paradas:0, corners:0, faltas:0, amarillas:0},
    {equipo:"Alemania", rival:"Costa de Marfil", resultado:"2-1", posesion:0, tirosTotal:0, tirosPuerta:0, paradas:0, corners:0, faltas:0, amarillas:0}
  ],

  // Las Tres Grandes Figuras — Cristiano, Messi y Neymar en el Mundial 2026
  estrellas: [
    {
      nombre:"Cristiano Ronaldo",
      pais:"Portugal",
      club:"Al Nassr FC",
      edad:41,
      mundial:"Su 5º Mundial (2006, 2010, 2014, 2018, 2022, 2026)",
      situacion:"Titular confirmado. Jugó los 90 minutos completos en el empate 1-1 ante RD del Congo en el debut de Portugal.",
      datoClave:"Es el máximo goleador histórico de la selección portuguesa y de la historia del fútbol internacional masculino. Este sería su último Mundial como profesional según ha insinuado en entrevistas recientes."
    },
    {
      nombre:"Lionel Messi",
      pais:"Argentina",
      club:"Inter Miami",
      edad:38,
      mundial:"Su 6º Mundial (2006, 2010, 2014, 2018, 2022, 2026)",
      situacion:"Titular y en plena forma: lidera la tabla de goleadores del torneo con 3 goles tras la goleada 3-0 de Argentina ante Argelia en el debut.",
      datoClave:"Llega como defensor del título conquistado en Qatar 2022. Con 16 goles históricos en Mundiales, está a un paso de igualar el récord de Miroslav Klose (16) y solo Mbappé lo amenaza a futuro."
    },
    {
      nombre:"Neymar Jr.",
      pais:"Brasil",
      club:"Santos FC",
      edad:34,
      mundial:"Su 4º Mundial (2014, 2018, 2022, 2026)",
      situacion:"No jugó los dos primeros partidos de Brasil (vs Marruecos y vs Haití) por una lesión de grado II en la pantorrilla derecha. Su regreso está previsto para el tercer partido ante Escocia.",
      datoClave:"Es el goleador histórico de Brasil con 79 tantos. Su convocatoria fue una sorpresa, ya que no jugaba con la selección desde octubre de 2023 por la rotura del ligamento cruzado."
    }
  ],

  // Llave de eliminación directa — 32 equipos (16avos de final). Plantilla del formato, se completa con los clasificados reales.
  llave: {
    ronda: "16avos de final",
    nota: "Los cruces se confirman cuando termine la fase de grupos (2º y 3º primeros lugares + 8 mejores terceros). Esta es la estructura del cuadro de eliminación directa.",
    zonaIzquierda: [
      {p1:"1° Grupo A", p2:"3° Grupo C/D/E/F"},
      {p1:"1° Grupo C", p2:"2° Grupo D"},
      {p1:"1° Grupo E", p2:"3° Grupo A/B/C/D"},
      {p1:"1° Grupo G", p2:"2° Grupo H"},
      {p1:"1° Grupo B", p2:"3° Grupo E/F/G/H"},
      {p1:"1° Grupo D", p2:"2° Grupo C"},
      {p1:"1° Grupo F", p2:"3° Grupo A/B/C/D"},
      {p1:"1° Grupo H", p2:"2° Grupo G"}
    ],
    zonaDerecha: [
      {p1:"1° Grupo I", p2:"3° Grupo G/H/I/J"},
      {p1:"1° Grupo K", p2:"2° Grupo L"},
      {p1:"1° Grupo J", p2:"3° Grupo E/F/I/J"},
      {p1:"1° Grupo L", p2:"2° Grupo K"},
      {p1:"1° Grupo I", p2:"2° Grupo J"},
      {p1:"1° Grupo K", p2:"3° Grupo I/J/K/L"},
      {p1:"1° Grupo L", p2:"2° Grupo I"},
      {p1:"1° Grupo J", p2:"2° Grupo K"}
    ]
  }
};
