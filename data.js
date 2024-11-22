const datosComunes = {
  frase:'Hay momentos en la vida que son especiales por si solos, compartirlos con las personas que quieres los convierte en inolvidables.',
  imagenes:{
    imgHeader:'header',
    imgBanner1:'banner1',
    imgBanner2:'banner2',
    imgBanner3:'banner3',
    imgFondo1:'flor1',
    imgFondo2:'flor2'
  },
  fechaDia:'20',
  fechaMes:'Diciembre',
  fechaYear:'2024',
  religiosa:{
    hora:'19',
    minutos:'00',
    lugar:'Salón Oasis',
    direccion:'Blv. H. Colegio Militar',
    direccionCol:'Las Americas II',
    direccionCd:'Iguala de la Independencia',
    ubicacion:'https://maps.app.goo.gl/niWWt2xe97jsGsfZ6',

  },
  recepcion:{
    hora:'20',
    minutos:'00',
    lugar:'Salón Oasis',
    direccion:'Blv. H. Colegio Militar',
    direccionCol:'Las Americas II',
    direccionCd:'Iguala de la Independencia.',
    ubicacion:'https://maps.app.goo.gl/niWWt2xe97jsGsfZ6'
  },
  regalos:{
    frase:'El mejor regalo es tu presencia, pero si gustas darme un Obsequio puede ser en efectivo.', //PENDIENTE
    url:''
  },
  timeLine:{
    settings:{
      bgColor:'var(--color_card)',
      color:'var(--color_principal)',
      lineColor:'var(--color_card)'
    },
    protocol:[
      {
        id:1,
        time:'19:00 Hrs', 
        name:'Ceremonia Religiosa',
        icon:'CHURCH',
        color:'var(--color_tex)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:2,
        time:'20:00 Hrs',
        name:'Recepción y Cocteleria',
        icon:'recepcion',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },

      {
        id:3,
        time:'20:30 Hrs',
        name:'Fotos',
        icon:'camara',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:4,
        time:'21:00 Hrs',
        name:'Protocolo',
        icon:'brindis',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:5,
        time:'22:00 Hrs',
        name:'Banquete',
        icon:'comida',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:6,
        time:'23:00 Hrs',
        name:'Fiesta',
        icon:'musica',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
      {
        id:7,
        time:'01:30 Hrs',
        name:'Torna Fiesta',
        icon:'torna',
        color:'var(--color_timeline)',
        textColor:'rgb(218 167 88)'
      },
    ]
  },
  hoteles:[ //PENDIENTE
    {
      nombre:'Hotel Gran Plaza',
      direccion:'Miguel Hidalgo, 7',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7333326990',
      ubicacion:'https://maps.app.goo.gl/GK7ARLS9ESHJT2pa8'
    },
    {
      nombre:'Hotel Reforma #14',
      direccion:'Refroma, 14',
      direccion_colonia:'centro, Iguala de la Independencia, Gro',
      telefono:'7331517327',
      ubicacion:'https://maps.app.goo.gl/m4UMcsUnELYm3NaH8'
    },
    {
      nombre:'Hotel Real 1900',
      direccion:'Miguel Hidalgo,6',
      direccion_colonia:'Centro, Iguala de la Independencia, Gro.',
      telefono:'7331101106',
      ubicacion:'https://maps.app.goo.gl/bcRQiHRzWotJcCNe9'
    },

  ]

}

const tipoevento={
  boda:{
    nombreNovia:'',
    nombreNovio:'',
    padresNovia:{
      papa:'',
      mama:''
    },
    padresNovio:{
      papa:'',
      mama:'',
    },
    padrinos:{
      padrino:'',
      madrina:'',
    },
    confirmacion:{
      novio:'',
      novia:''
    },
  },
  
  bautizo:{
    nombre:'',
    padres:{
      papa:'',
      mama:''
    },
    padrinos:{
      padrino:'',
      madrina:''
    }
  },
  
  XV:{
    nombre:'Dominiq Thais',
    padres:{
      papa:'Leonardo Rueda Marchan',
      mama:'Nancy Elizabeth López Viveros'
    },
    padrinos:{
      padrino:'Victor Leonardo Rueda Marchan',
      madrina:'Blanca Edith Delgado Arellano'
    },
    confirmacion:'7331585936' //PENDIENTWE
  }
}

const getData = (type)=>{
  return {...datosComunes, ...tipoevento[type]}
}

export default getData

