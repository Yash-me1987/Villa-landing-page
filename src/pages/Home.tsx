import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Story from "../components/story/Story";
import Lifestyle from "../components/lifestyle/Lifestyle";
import Villa from "../components/villa/Villa";
import Location from "../components/location/Location";
import Gallery from "../components/gallery/Gallery";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";


function Home() {
    return (
    <>
        <Navbar />
        <Hero />
        <Story />
        <Lifestyle />
        <Villa />
        <Location /> 
        <Gallery />
        <CTA />
        <Footer />
    </>
    );
}

export default Home;