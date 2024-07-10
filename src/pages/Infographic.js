import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Link, Divider,Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// Importa makeStyles desde @mui/styles en lugar de @mui/material/styles
import { makeStyles } from '@mui/styles';
import imagenPatente from '../resources/patenteimg.jpeg';
import imagenProyecto from '../resources/proyectoimg.jpeg';
import imagenGozinto from '../resources/gozintoimg.jpeg';
import patentedimg from '../resources/patented.jpg';
import ejpractico from '../resources/ejemplopractico.jpeg';
import ZoomableImage from '../components/ZoomableImage';
import VideoComponent from '../components/VideoComponent';
import FloatingNotePad from '../components/FloatingNotePad';

const useStyles = makeStyles((theme) => ({

  
  scrollTop: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: theme.zIndex.appBar + 1,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    opacity: 0,
    '&:hover': {
      opacity: 0.8,
    }
  }
  ,
  container: {
     // Color de fondo rosita semi transparente
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
    boxShadow: theme.shadows[3],
  },
  
  show: {
    opacity: 1,
  }
}));



function Infographic() {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
  
    window.addEventListener('scroll', checkScrollTop);
  
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);
  

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Patentes"
              height="300"
              image={imagenPatente}
              title="Patentes"
              color="rgba(255, 182, 193, 0.25)"
            />
            <CardContent>
              <Typography variant="h4" component="h4" gutterBottom id="titulo1">
                Patentes
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tema 1 de la presentación <strong><Link href="#tituloPat">Click!</Link></strong>
              </Typography>
              <ul>
                <li><Link href="#patentes1">¿Qué son las Patentes?</Link></li>
                <li><Link href="#patentes2">¿Para Qué Sirven las Patentes?</Link></li>
                <li><Link href="#patentes3">Uso de las Patentes en los Procesos de Producción</Link></li>
                <li><Link href="#patentes4">Casos en los que se usa</Link></li>
                <li><Link href="#patentes5">Procedimiento para Obtener una Patente</Link></li>
                <li><Link href="#patentes6">Desafíos y Consideraciones</Link></li>
                <li><Link href="#patentes7">Conclusión</Link></li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Proyecto General de Instalaciones Industriales"
              height="186"
              image={imagenProyecto}
              title="Proyecto General de Instalaciones Industriales"
            />
            <CardContent>
              <Typography variant="h4" component="h4" gutterBottom id="titulo2">
                P. G. de Instalaciones Industriales
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tema 2 de la presentación <strong><Link href="#tituloPr">Click!</Link></strong>
              </Typography>
              <ul>
                <li><Link href="#instalaciones1">¿Qué es un Proyecto Gral. de Instalación Industrial? </Link></li>
                <li><Link href="#instalaciones2">¿Porqué es importante la buena planeación de un Proyecto Gral. de Instalación Industrial? </Link></li>
                <li><Link href="#instalaciones3">¿Qué es una instalación industrial? </Link></li>
                <li><Link href="#instalaciones4">¿Que abarca una Instalación Industrial? </Link></li>
                <li><Link href="#instalaciones5">¿Qué funciones conlleva una Instalación Industrial? </Link></li>
                <li><Link href="#instalaciones6">Tipos de instalaciones industriales</Link></li>
                <li><Link href="#instalaciones7">Ventajas</Link></li>
                <li><Link href="#instalaciones8">Desventajas</Link></li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Diagrama de Gozinto"
              height="348"
              image={imagenGozinto}
              title="Diagrama de Gozinto"
            />
            <CardContent>
              <Typography variant="h4" component="h4" gutterBottom id="titulo3">
                Diagrama de Gozinto
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Tema 3 de la presentación <strong><Link href="#tituloGoz">Click!</Link></strong>
              </Typography>
              <ul>
                <li><Link href="#gozinto1">Origen</Link></li>
                <li><Link href="#gozinto2">¿Que es?</Link></li>
                <li><Link href="#gozinto3">¿Para que sirve?</Link></li>
                <li><Link href="#gozinto4">Realizacion</Link></li>
                <li><Link href="#gozinto5">Ventajas</Link></li>
                <li><Link href="#gozinto6">Desventajas</Link></li>
                <li><Link href="#gozinto7">Ejemplos</Link></li>
                
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Subtítulos */}
      

      <section id="tituloPat">
      <Divider sx={{ margin: '20px 0', height: 4}} />
      <Typography variant="h4" component="h4" gutterBottom>
          <strong>PATENTES</strong>
        </Typography>
        <Divider sx={{ margin: '20px 0', height: 4 }} />
        </section>
      
        <Box className={classes.container} sx={{backgroundColor: 'rgba(255, 182, 193, 0.25)'}} >
      
      <section id="patentes1">
        <Typography variant="h4" component="h4" gutterBottom>
          ¿Qué son las Patentes?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Una patente es un derecho exclusivo otorgado por un estado a un inventor por un período limitado a cambio de la divulgación pública de una invención.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Este derecho exclusivo permite al titular de la patente excluir a otros de fabricar, usar, vender y distribuir la invención sin autorización. Las patentes se aplican a productos, procesos o mejoras nuevas y útiles.
        </Typography>
      </section>
      <section id="patentes2">
        <Typography variant="h4" component="h4" gutterBottom>
          ¿Para Qué Sirven las Patentes?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Las patentes tienen varios propósitos clave:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Protección de la Innovación:</strong> Garantizan que los inventores puedan beneficiarse de su trabajo y esfuerzo, evitando que otros copien o usen su invención sin permiso.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Incentivo a la Investigación y Desarrollo (I+D):</strong> Ofrecen una recompensa económica a los inventores, incentivando la inversión en innovación y desarrollo tecnológico.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Divulgación Pública:</strong> A cambio de la protección, los inventores deben divulgar detalles técnicos de su invención, lo que contribuye al conocimiento público y puede inspirar futuras innovaciones.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Competitividad:</strong> Las patentes pueden ser una ventaja competitiva significativa al permitir a las empresas proteger sus avances tecnológicos y diferenciarse en el mercado.
        </Typography>
      </section>

      <section id="patentes3">
        <Typography variant="h4" component="h4" gutterBottom>
          Uso de las Patentes en los Procesos de Producción
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Las patentes juegan un papel crucial en los procesos de producción al proteger los métodos y técnicas utilizados para fabricar productos.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Mejora Continua:</strong> Al proteger los métodos de producción, las patentes fomentan la innovación continua en la eficiencia y calidad de los procesos industriales.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Control de Calidad:</strong> Las patentes pueden ser utilizadas para estandarizar y controlar los procesos de producción, asegurando consistencia y cumplimiento de estándares.
        </Typography>
      </section>

      <section id="patentes4">
        <Typography variant="h4" component="h4" gutterBottom>
          Casos en los que se usa
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Las patentes se aplican en una amplia gama de industrias y sectores, incluyendo:
          </Typography>
          
        <ul>
          <li><Typography variant="body2" color="textSecondary" component="p">
          Industria farmacéutica y biotecnología.
         </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">
          Tecnología de la información y comunicación.
         </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Automoción y fabricación.</Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Electrónica y semiconductores.</Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Química y materiales.</Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Alimentos y bebidas.</Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Energía y medio ambiente.</Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Entre otros.</Typography></li>
        </ul>
        
       
      </section>
      <section id="patentes5">
        <Typography variant="h4" component="h4" gutterBottom>
          Procedimiento para Obtener una Patente
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          El procedimiento para obtener una patente puede variar según el país y la jurisdicción, pero generalmente implica los siguientes pasos:
          </Typography>
        <ol>
          <li><Typography variant="body2" color="textSecondary" component="p">Investigación y evaluación de la novedad. </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Preparación de la solicitud de patente. </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Presentación de la solicitud ante la oficina de patentes. </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Evaluación y examen por parte de la oficina de patentes. </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Publicación y divulgación de la patente. </Typography></li>
          <li><Typography variant="body2" color="textSecondary" component="p">Concesión o rechazo de la patente. </Typography></li>
        </ol>
    
       
      </section>

      <Box>
      <ZoomableImage src={patentedimg}alt="Obtencion de la patente" />
      </Box>

      <section id="patentes6">
        <Typography variant="h4" component="h4" gutterBottom>
          Desafíos y Consideraciones
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          A pesar de sus beneficios, las patentes también presentan desafíos y consideraciones importantes:
          </Typography >
        <ul>
          <li>  <Typography variant="body2" color="textSecondary" component="p">Costos y recursos necesarios para obtener y mantener una patente.</Typography ></li>
          <li>  <Typography variant="body2" color="textSecondary" component="p">Procesos legales y litigios relacionados con la infracción de patentes.</Typography ></li>
          <li>  <Typography variant="body2" color="textSecondary" component="p">Periodo limitado de protección (generalmente 20 años).</Typography ></li>
          <li>  <Typography variant="body2" color="textSecondary" component="p">Equilibrio entre la protección de derechos y la promoción de la competencia y la innovación abierta.</Typography ></li>
        </ul>
      
       
      </section>
      <section id="patentes7">
        <Typography variant="h4" component="h4" gutterBottom>
          Conclusión
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Las patentes desempeñan un papel crucial en la protección y promoción de la innovación tecnológica y industrial. Al otorgar derechos exclusivos a los inventores, fomentan la inversión en investigación y desarrollo, la mejora continua de los procesos industriales y la competitividad en el mercado global.
        </Typography>
      </section>

      </Box>


      <section id="tituloPr">
      <Divider sx={{ margin: '20px 0', height: 4}} />
      <Typography variant="h4" component="h4" gutterBottom>
          <strong>PROYECTO GENERAL DE INSTALACIONES INDUSTRIALES</strong>
        </Typography>
        <Divider sx={{ margin: '20px 0', height: 4}} />

        </section>

        <Box className={classes.container} sx={{backgroundColor: 'rgba(150, 255, 193, 0.25)'}} >
        <section id="instalaciones1">
        <Typography variant="h4" component="h4" gutterBottom>
        ¿Qué es un Proyecto Gral. de Instalación Industrial? 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Es una idea que se piensa materializar mediante la utilización de todos los recursos como cálculos o dibujos que se realizan con la finalidad de definir qué se quiere alcanzar, objetivos del proyecto y la manera en la que se ejecutará.
           </Typography>
      </section>

      <section id="instalaciones2">
        <Typography variant="h4" component="h4" gutterBottom>

        ¿Porqué es importante la buena planeación de un Proyecto Gral. de Instalación Industrial? 
        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Es importante porque la implementación de este establece el uso adecuado de los recursos físicos, económicos y humanos, dando como resultado un manejo correcto y logrando el éxito del proyecto. 

       </Typography>
      </section>

      <section id="instalaciones3">
        <Typography variant="h4" component="h4" gutterBottom>

        ¿Qué es una instalación industrial? 
        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Las instalaciones industriales se pueden definir como la combinación e integración de diversos suministros y servicios destinados a facilitar la ejecución de plantas industriales funcionales destinadas a la fabricación o a la transformación de productos. 

       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       Se entiende por planta industrial a un sistema compacto encargado de la realización de un proceso industrial que comprende varias etapas de proceso. 
       Además, incluye las instalaciones en las que se almacenan los productos acabados y las materias primas para la fabricación. 

       </Typography>
      </section>

    <Box>
      <VideoComponent />
    </Box>
      <section id="instalaciones4">
        <Typography variant="h4" component="h4" gutterBottom>

        ¿Que abarca una Instalación Industrial? 
        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">

        La planificación, diseño, construcción, y mantenimiento de instalaciones que albergan procesos industriales. Esto es fundamental para asegurar que las operaciones industriales se realicen de manera eficiente, segura y cumpliendo con las normativas vigentes. 

       </Typography>
      </section>
      <section id="instalaciones5">
        <Typography variant="h4" component="h4" gutterBottom>

        ¿Qué funciones conlleva una Instalación Industrial? 
        
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Combina el trabajo humano con la maquinaria para transformar las materias primas y la energía, según un proceso previamente definido. 

       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       Para aprovechar al máximo los equipos, los operarios deben seguir ciertas reglas, que varían según el tipo de planta industrial y de empresa. 

       </Typography>
      </section>

      <section id="instalaciones6">
        <Typography variant="h4" component="h4" gutterBottom>

        Tipos de instalaciones industriales
       
        </Typography>

        
        
        <ul> 
            <li><Typography variant="body2" color="textSecondary" component="p"><strong>Instalaciones industriales eléctricas:</strong></Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Incluyen trabajos como la entrada de servicio de la compañía eléctrica, la generación 
            eléctrica in situ, la distribución de esta energía eléctrica hacia la planta, el control de la energía, la puesta a tierra, y la protección eléctrica. 
            

            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">

            También realiza instalaciones de otros sistemas eléctricos, como la gestión de la energía, la automatización de procesos, la conexión de la maquinaria y los sistemas de seguridad. 

            </Typography>
            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
                <strong>Instalaciones industriales mecánicas:</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                Pueden abarcar desde la instalación de tuberías de proceso y la instalación de sistemas mecánicos industriales, hasta la instalación de sistemas de bombeo y el montaje mecánico de las líneas de producción. 

                </Typography>

            </li>

            <li>
            <Typography variant="body2" color="textSecondary" component="p">
                <strong>Instalaciones industriales neumáticas:</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Este tipo de instalaciones se basan en la instalación de tuberías para distribuir aire 
comprimido a herramientas, equipos de producción y maquinaria de la cadena de 
producción. 

                </Typography>

            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
                <strong>Instalaciones industriales hidráulicas:</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                Son muy similares a las neumáticas. La diferencia es que como medio de generación de fuerza utilizan diferentes fluidos. 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                La instalación consta de las tuberías para distribuir este fluido y varios componentes como depósitos donde se almacena el fluido, bombas hidráulicas, válvulas y actuadores como motores y cilindros. 

                  </Typography>
            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
                <strong>Instalaciones de maquinaria industrial: </strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                Las empresas especializadas en este rubro suelen realizar todo el proceso de traslado, instalación y puesta en marcha de una máquina nueva o usada. 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Tanto si se trata del traslado y reubicación de una máquina dentro de una fábrica como en otra planta de fabricación. 


                </Typography>

            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
                <strong>Instalaciones de seguridad industrial: </strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                Están destinadas a las prácticas de gestión de la seguridad que se aplican en la planta de producción.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Estos procesos tienen como objetivo proteger a los trabajadores industriales, la maquinaria, las instalaciones, las estructuras y el medio ambiente. 


</Typography>
<Typography variant="body2" color="textSecondary" component="p">

Pueden comprender trabajos de instalación de detectores perimetrales, de vallado de seguridad y sensores del vallado, protección contra Incendios, cerramientos para la maquinaria y los robots industriales, entre otros. 
</Typography>
            </li>
        </ul>

       
      </section>


      <section id="instalaciones7">
        <Typography variant="h4" component="h4" gutterBottom>

        Ventajas
        
        </Typography>
        
        <ol>
            <li>  <Typography variant="body2" color="textSecondary" component="p">
              <strong>Eficiencia operativa:</strong>
                  </Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Automatizacion de procesos </Typography></li>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Reduccion de costos:</strong></Typography>
                  <ul>
                      <li>
                        <Typography variant="body2" color="textSecondary" component="p">Economias de escala: </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">Producción en grandes volúmenes reduce los costos unitarios.  </Typography>
                      </li>
                      <li><Typography variant="body2" color="textSecondary" component="p">Mantenimiento preventivo </Typography></li>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Seguridad y salud ocupacional:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Cumplimiento normativo: </Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p"> Las instalaciones industriales diseñadas y operadas bajo normativas estrictas minimizan riesgos laborales. 

                      </Typography>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Reduccion de riesgos:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Sistemas de prevencion y control: </Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p"> Instalaciones equipadas con sistemas de prevención y control de incendios, manejo de materiales peligrosos, y respuesta a emergencias.  </Typography>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Gestion eficiente de recursos:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Reduccion de residuos: </Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p">Procesos optimizados y tecnologías de reciclaje reducen la generación de residuos.  </Typography>
                      <li><Typography variant="body2" color="textSecondary" component="p">Eficiencia energetica: </Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p"> Uso de tecnologías y prácticas que reducen el consumo de energía y aumentan la eficiencia.  </Typography>
                  </ul>
            </li>

        </ol>

       
      </section>
      <section id="instalaciones8">
        <Typography variant="h4" component="h4" gutterBottom>

        Desventajas
        
        </Typography>
        
        <ol>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Contaminacion:</strong> </Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Ruido y vibraciones:</Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p"> La operación de maquinaria pesada puede generar ruido y vibraciones que afectan a las comunidades circundantes. </Typography>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Consumo de recursos:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Degradacion ambiental:</Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p"> El uso intensivo de recursos naturales puede llevar a la degradación ambiental y agotamiento de recursos. </Typography>
                      
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Emergencias y desastres:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Desastres naturales:</Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p">Pueden ser vulnerables a desastres naturales como terremotos, inundaciones y huracanes. </Typography>
                  </ul>
            </li>
            <li>  <Typography variant="body2" color="textSecondary" component="p"><strong>Adaptacion al cambio:</strong></Typography>
                  <ul>
                      <li><Typography variant="body2" color="textSecondary" component="p">Inflexibilidad:</Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p">Las instalaciones industriales grandes y complejas pueden ser menos flexibles y más difíciles de adaptar a cambios rápidos en la demanda del mercado.   </Typography>
                      <li><Typography variant="body2" color="textSecondary" component="p">Costos de reestauracion:</Typography></li>
                      <Typography variant="body2" color="textSecondary" component="p">Puede ser costosa y llevar tiempo.</Typography>
                  </ul>
            </li>
           
        </ol>

       
      </section>

      </Box>


      <section id="tituloGoz">
      <Divider sx={{ margin: '20px 0', height: 4}} />
      <Typography variant="h4" component="h4" gutterBottom>
          <strong>DIAGRAMA DE GOZINTO</strong>
        </Typography>
        <Divider sx={{ margin: '20px 0', height: 4}} />
        </section>


        <Box className={classes.container} sx={{backgroundColor: 'rgba(144, 150, 193, 0.25)'}} >

      <section id="gozinto1">
        <Typography variant="h4" component="h4" gutterBottom>
     Origen
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Fue creado por Andrew Vazsonyi, un ingeniero y matematico húngaro-estadounidense nacido en el año 1916. El nombre de este diagrama surge de la pronunciación fonética en inglés de la expresión "goes into", que significa "va dentro de" o "se convierte en". Este nombre hace referencia a cómo cada componente de un producto "va dentro de" otro componente en la estructura del ensamblaje. La terminología se popularizó debido a su simplicidad y a la forma intuitiva en que describe la relación entre los componentes de un sistema complejo.

       </Typography>
      </section>

      <section id="gozinto2">
        <Typography variant="h4" component="h4" gutterBottom>
     ¿Que es?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        El diagrama de Gozinto es una representación gráfica de las relaciones entre un producto, sus componentes y la materia prima, el cual se obtiene a través de la realización de una fórmula:

       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       <strong>PF:</strong> Producto Final 
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       <strong>A,B,C:</strong> Componentes 
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       <strong>a,b,c,d,e,f,:</strong> Materia prima 
       </Typography>
      </section>


      <Box>
      <ZoomableImage src={imagenGozinto}alt="Diagrama de Gozinto ejemplo" />
    </Box>


      <section id="gozinto3">
        <Typography variant="h4" component="h4" gutterBottom>
     ¿Para que sirve?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Este diagrama nos sirve para determinar las cantidades y los tiempos de fabricación o ensamblaje de cada componente; Facilitar la gestión de inventario calculando la necesidad de materiales y administrándolos de manera eficiente; Ayuda en el costeo de los productos, ya que permite el cálculo del costo de los componentes y el costo del producto final; Analizar dependencias; Optimizar procesos mejorando la eficiencia en la cadena de producción.

       </Typography>
      </section>

      <section id="gozinto4">
        <Typography variant="h4" component="h4" gutterBottom>
     Realizacion
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Para realizarlo, tenemos que hacer un desglose del producto final, identificando cuáles son sus componentes y la cantidad de cada uno de estos, y la cantidad de materia prima que constituyen estos componentes. Todos estos componentes y materias primas van a estar representados por nodos. Estos nodos son unidos con flechas según el requerimiento, y se detalla la cantidad necesaria de materia prima para crear cada componente, y la cantidad de componentes requeridos para crear el producto final.

       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       Por ejemplo, si se crea un diagrama de Gozinto para una bicicleta, se comienza con la bicicleta como producto final, desglosándola en componentes principales como el marco, las ruedas, el manubrio y el asiento, y luego en subcomponentes específicos como los neumáticos, llantas y rayos para las ruedas.

       </Typography>
      </section>
      <Box>
      <ZoomableImage src={ejpractico}alt="Diagrama de Gozinto ejemplo" />
    </Box>
      <section id="gozinto5">
        <Typography variant="h4" component="h4" gutterBottom>
     Ventajas
        </Typography>
   
       <ul>
            <li>     <Typography variant="body2" color="textSecondary" component="p"><strong>Claridad:</strong>ofrece una visión nítida de las relaciones entre componentes</Typography></li>
            <li>     <Typography variant="body2" color="textSecondary" component="p"><strong>Mejor planificacion:</strong> facilita planificación de inventario </Typography></li>
            <li>     <Typography variant="body2" color="textSecondary" component="p"><strong>Facilita el costeo:</strong>permite calcular fácilmente los costos de producción </Typography></li>

       </ul>
       
      </section>

      <section id="gozinto6">
        <Typography variant="h4" component="h4" gutterBottom>
     Desventajas
        </Typography>
        
        <ul>
            <li><Typography variant="body2" color="textSecondary" component="p"><strong>Complejidad:</strong>Puede volverse muy complejo para productos con muchas partes y niveles jerárquicos. </Typography></li>
            <li><Typography variant="body2" color="textSecondary" component="p"><strong>Actualizacion constante:</strong> Requiere actualizaciones frecuentes para reflejar cambios en el diseño del producto o en el proceso de producción.  </Typography></li>
            <li><Typography variant="body2" color="textSecondary" component="p"><strong>Limitado a productos fisicos:</strong>Es menos útil para productos o servicios intangibles.  </Typography></li>

       </ul>
      
       
      </section>



      
      </Box>




      {/* Botón de scroll al inicio */}
     <button
  className={`${classes.scrollTop} ${showScroll ? classes.show : ''}`}
  onClick={scrollTop}
>
  <KeyboardArrowUpIcon />
</button>

{/* Botón de notepad*/}
    <FloatingNotePad />
    </Container>
  );
}

export default Infographic;
