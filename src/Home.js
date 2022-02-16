import "./Home.css";
import homeIMG from "./NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={homeIMG} alt="" />
        <div className="home_row">
          <Product
            id="45187955"
            title="Funko Pop! Marvel: Year of The Shield, Capwolf, Amazon Funkon Exclusive"
            price={10.99}
            rating={4}
            image="/518i6tpdBwL._AC_UL480_SR480,480_.jpg"
            numberRating="20,742"
          />
          <Product
            id="15183457"
            title="Funko Pop! TV: The Boys - Black Noir, Amazon Funkon Exclusive"
            price={10.99}
            rating={4}
            image="/51he1NKiuBL._AC_UL480_SR480,480_.jpg"
            numberRating="15,251"
          />
        </div>
        <div className="home_row">
          <Product
            id="17143100"
            title="Binoculars 20x50, HD Professional/Waterproof Binoculars for Adult, Durable & Clear BAK4 Prism FMC Lens Binoculars. Suitable for Outdoor Sports."
            price={99.99}
            rating={5}
            image="/71M+pz6KuWL._AC_UL480_SR480,480_.jpg"
            numberRating="5,251"
          />
          <Product
            id="27114408"
            title="Addidas Boys' Tricot Jogger Pant"
            price={49.99}
            rating={3}
            image="/71eYfiMPAyL._AC_UL480_SR297,480_.jpg"
            numberRating="25,251"
          />
          <Product
            id="47244007"
            title="Echo Dot (3rd Gen) - Smart Speaker with Alexa - Charcoal"
            price={34.99}
            rating={5}
            image="/6182S7MYC2L._AC_UL480_SR480,480_.jpg"
            numberRating="896,920"
          />
        </div>
        <div className="home_row">
          <Product
            id="07067551"
            title="Fire TV Stick 4K Streaming Device with Alexa Voice Remote (Includes TV Controls) | Dolby Vision"
            price={39.99}
            rating={5}
            image="/51CgKGfMelL._AC_UL480_SR480,480_.jpg"
            numberRating="685,674"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
