import React from "react";

import Bangkok from "../imagenes/TopCities/Bangkok.jpg";
import Londres from "../imagenes/TopCities/Londres.jpg";
import Paris from "../imagenes/TopCities/Paris.jpg";
import Dubai from "../imagenes/TopCities/Dubai.jpg";
import Singapur from "../imagenes/TopCities/Singapur.jpg";
import NewYork from "../imagenes/TopCities/NewYork.jpg";
import Kuala from "../imagenes/TopCities/Kuala.jpg";
import Tokio from "../imagenes/TopCities/Tokio.jpg";
import Estambul from "../imagenes/TopCities/Estambul.jpg";



function Citiescard() {
  return (
   
   <div>

<div className="tarjeta">
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Bangkok
                    </div>
                </div>
                <img src={Bangkok} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Bangkok, Thailandia</h5>
                        <p className="card-text pl-2 mt-2">"La ciudad de los ángeles", como se conoce entre sus habitantes. Bangkok ha crecido y se ha desarrollado como una ciudad cosmopolita del siglo XXI. La estancia en Bangkok incluye una visita al Gran Palacio Real,el Templo Buda de Esmeralda (Wat Phra Kaeo), el Templo del Amanecer (Wat Arun) y Wat Pho, especialmente conocido por acoger al enorme Buda Reclinado, el Museo Nacional, la Mansión Vimanmek y el Palacio Suan Pakkad, auténticos tesoros nacionales. </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Londres
                    </div>
                </div>
                <img src={Londres} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Londres, Reino Unido</h5>
                        <p className="card-text pl-2 mt-2">Londres es uno de los centros neurálgicos en el ámbito de las artes, el comercio, la educación, el entretenimiento, la moda, las finanzas, los medios de comunicación, la investigación, el turismo o el transporte. Es el principal centro financiero del mundo junto con Nueva York. Cuenta con cuatro enclaves declarados Patrimonio de la Humanidad: la Torre de Londres, el Real Jardín Botánico de Kew, el sitio formado por el Palacio, la Abadía de Westminster, la Iglesia de Santa Margarita y Greenwich. </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Paris
                    </div>
                </div>
                <img src={Paris} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Paris, Francia</h5>
                        <p className="card-text pl-2 mt-2">París, la ciudad del amor. Cada año, más de 14 millones de turistas deciden visitarla atraídos por sus magníficos monumentos, sus calles de época y grandes bulevares. Es una de las capitales gastronómicas más reputadas del mundo. Ver la imponente Torre Eiffel, perderse en los Campos Elíseos, disfrutar de un espectáculo de cabaret en Moulin Rouge o pasear por el bohemio barrio de Montmartre. Algunas de estas cosas la hacen única, un lugar de ensueño donde vivir un cuento.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</div>


<div className="tarjeta">
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Dubai
                    </div>
                </div>
                <img src={Dubai} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Dubai, Emiratos Arabes</h5>
                        <p className="card-text pl-2 mt-2">Dubái es una ciudad emirato de los Emiratos Árabes Unidos conocida por su lujoso comercio, la arquitectura ultramoderna y su vida nocturna animada. Burj Khalifa, una torre de 830 m de alto, domina el paisaje lleno de rascacielos. A sus pies se encuentra la Fuente de Dubái, con coreografías de chorros y luces al ritmo de la música. En las islas artificiales justo frente a la costa están Atlantis, la Palma, un centro turístico con agua y parques de animales marinos. </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Singapur
                    </div>
                </div>
                <img src={Singapur} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Singapur, Singapur</h5>
                        <p className="card-text pl-2 mt-2">Singapur es un popular destino turístico, por lo cual el turismo es uno de los sectores económicos más grandes del país. El distrito comercial de Orchard Road es una de las atracciones más famosas que ofrece Singapur. Para atraer a más visitantes, el Gobierno decidió en 2005 legalizar el juego y permitir que se construyeran dos casinos o centros turísticos integrados en la zona de Marina South y la isla de Sentosa. </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        New York
                    </div>
                </div>
                <img src={NewYork} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">New York, Estados Unidos</h5>
                        <p className="card-text pl-2 mt-2">Los principales destinos incluyen el Edificio Empire State, la Isla Ellis, las producciones teatrales de Broadway, el Museo Metropolitano de Arte, y otras atracciones como Central Park, Washington Square Park, Rockefeller Center, Times Square, el Zoológico del Bronx, el Jardín Botánico, las tiendas de lujo de la Quinta Avenida y la Avenida Madison, el Festival de cine de Tribeca, y espectáculos gratuitos en Central Park en Summerstage y el Teatro Delacorte, La Estatua de la Libertad, etc.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</div>

<div className="tarjeta">
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Kuala
                    </div>
                </div>
                <img src={Kuala} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Kuala, Lumpur</h5>
                        <p className="card-text pl-2 mt-2">Kuala Lumpur es la capital de Malasia. En su moderno perfil, se destacan las Torres Petronas de 451 m de altura, un par de rascacielos cubiertos de vidrio y acero con diseños islámicos. Las torres también cuentan con una pasarela pública en altura y un mirador. La ciudad también alberga sitios icónicos de la era colonial británica, como la Estación de Tren de Kuala Lumpur y el Edificio del Sultán Abdul Samad.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Tokio
                    </div>
                </div>
                <img src={Tokio} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Tokio, Japon</h5>
                        <p className="card-text pl-2 mt-2">Japón cuenta con 19 sitios del patrimonio mundial, incluyendo el castillo de Himeji, los monumentos históricos de la antigua Kioto y Nara. Las atracciones turísticas más populares incluyen Tokio e Hiroshima, el Monte Fuji, estaciones de esquí como Niseko en Hokkaido, la isla de Okinawa, la variedad de templos religiosos, plazas, calles que reflejan el día a día de su gente y su evolución constante, así como mercados callejeros y sitios de comida famosos por sus exóticos platos.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<div className="col-4 mb-2 m-auto center" >
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="mask">
                    <div className="align-end">
                        Estambul
                    </div>
                </div>
                <img src={Estambul} alt="imagen"/>
            </div>
            <div className="flip-card-back">
                <div className="row no-gutters">
                    <div className="card-body">
                        <h5 className="card-title">Estambul, Turkia</h5>
                        <p className="card-text pl-2 mt-2">La variedad de estilos arquitectónicos y ambientes es el resultado de la mezcla de culturas y te transportarán a otras épocas y a rincones de algunas capitales europeas o de Oriente Medio. La mayoría de monumentos y lugares turístico se encuentran en la conocida como “península histórica”: el Gran Bazar, la Basílica Cisterna, el Palacio de Topkap, el Bazar Egipcio o de las Especias, la Mezquita de Süleyman e importantes museos como el arqueológico, el de las alfombras o el de arte turco e islámico.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>


</div>

</div>
    
    
  );
}
export default Citiescard;
