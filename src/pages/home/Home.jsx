import Featured from "../../components/featured/Featured";
import FeaturedMaquinaria from "../../components/featuredMaquinaria/FeaturedMaquinaria";
// import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MaquinariaList from "../../components/maquinariaList/MaquinariaList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Busca segun el tipo de maquinaria</h1>
        <MaquinariaList/>
        <h1 className="homeTitle">Renta todo para tu obra</h1>
        <FeaturedMaquinaria/>
        <MailList/>
      </div>
      {/* <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div> */}
    </div>
  );
};

export default Home;