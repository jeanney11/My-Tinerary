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
                        <p className="card-text pl-2 mt-2">"The City of Angels", as it is known among its inhabitants, has grown and developed as a cosmopolitan city of the 21st century. A stay here includes a visit to the Grand Royal Palace, the Emerald Buddha Temple (Wat Phra Kaeo), the Temple of Dawn (Wat Arun) and Wat Pho, especially known for hosting the enormous Reclining Buddha, the National Museum, the Vimanmek Mansion and the Suan Pakkad Palace, authentic national treasures. </p>
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
                        <p className="card-text pl-2 mt-2">London is one of the nerve centers in the field of the arts, commerce, education, entertainment, fashion, finance, the media, research, tourism and transport. It is the main financial center in the world along with New York. It has four enclaves declared World Heritage Sites: the Tower of London, the Royal Botanic Gardens of Kew, the site formed by the Palace, Westminster Abbey, the Church of Saint Margaret and Greenwich. </p>
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
                        <p className="card-text pl-2 mt-2">The city of love, every year, more than 14 million tourists decide to visit it, attracted by its magnificent monuments, its period streets and grand boulevards. It is one of the most renowned gastronomic capitals in the world. See the imposing Eiffel Tower, get lost on the Champs-Elysées, enjoy a cabaret show at the Moulin Rouge or stroll through the bohemian Montmartre district. Some of these things make it unique, a dream place where you can live a story.</p>
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
                        <p className="card-text pl-2 mt-2">Dubai is known for its luxurious shopping, ultra-modern architecture and lively nightlife. Burj Khalifa, an 830m-high tower, dominates the skyscraper-filled landscape. At its feet is the Dubai Fountain, with choreography of jets and lights to the rhythm of music. On artificial islands just off the coast are Atlantis, La Palma, a resort with water and marine animal parks. </p>
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
                        <p className="card-text pl-2 mt-2">Singapore is a popular tourist destination, making tourism one of the country's largest economic sectors. The Orchard Road shopping district is one of the most famous attractions it has to offer. To attract more visitors, the government decided in 2005 to legalize gambling and allow two integrated casinos or resorts to be built in the area of Marina South and Sentosa Island. </p>
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
                        <p className="card-text pl-2 mt-2">Major destinations include the Empire State Building, Ellis Island, Broadway theater productions, the Metropolitan Museum of Art, and other attractions such as Central Park, Washington Square Park, Rockefeller Center, Times Square, the Bronx Zoo, the Botanical Garden , Fifth Avenue and Madison Avenue, the Tribeca Film Festival, and free shows in Central Park at Summerstage and the Delacorte Theater, The Statue of Liberty, etc.</p>
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
                        <p className="card-text pl-2 mt-2">Standing out in its modern skyline are the 451m-high Petronas Twin Towers, a pair of skyscrapers covered in glass and steel with Islamic designs. The towers also have a high-rise public walkway and a lookout point. The city is also home to iconic sites from the British colonial era, such as the Kuala Lumpur Railway Station and the Sultan Abdul Samad Building.</p>
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
                        <p className="card-text pl-2 mt-2">Japan has 19 World Heritage Sites, including Himeji Castle, the Historic Monuments of Ancient Kyoto, and Nara. The most popular tourist attractions are Tokyo and Hiroshima, Mount Fuji, ski resorts such as Niseko, the island of Okinawa, the variety of religious temples, squares, streets that reflect the daily life of its people and its constant evolution, as well as markets. streets and food places famous for their exotic dishes.</p>
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
                        <p className="card-text pl-2 mt-2">The variety of architectural styles and environments is the result of the mixture of cultures and corners of some European or Middle Eastern capitals. Most of the monuments and tourist attractions are located in the "historic peninsula": the Grand Bazaar, the Basilica Cistern, the Topkap Palace, the Egyptian or Spice Bazaar, the Süleyman Mosque and important museums such as the archaeological, the carpets or Turkish and Islamic art.</p>
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
