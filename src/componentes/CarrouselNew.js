import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "http://c.files.bbci.co.uk/1032C/production/_98584366_hi042746331.jpg",
      caption: "Piramides de Guiza"
    },
    {
      image: "https://i0.wp.com/www.travindy.com/wp-content/uploads/2018/06/Greece.jpg?resize=815%2C421&ssl=1",
      caption: "Isla Santori"
    },
    {
      image: "https://azertag.az/files/galleryphoto/2019/2/1000x669/15633665963482758952_1000x669.jpg",
      caption: "Azertac"
    },
    {
      image: "https://viajesdq.com/wp-content/uploads/2021/05/ruta-outlander-7.jpg",
      caption: "Craigh Na Dun"
    },
    {
      image: "https://www.turaser.com/ve/wp-content/uploads/sites/2/2021/08/Salto-Angel-1.jpg",
      caption: "Salto Angel"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://st3.depositphotos.com/9999814/18280/i/1600/depositphotos_182800792-stock-photo-hobbiton-movie-set-for-the.jpg",
      caption: "Hobbiton"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center", fontFamily: "'Mochiy Pop P One', sans-serif", color:"white", marginTop:"30px"}}>
        <h2>Maravillas del Mundo</h2>
        <p>Lugares de ensueños que toda persona desea conocer</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;