import Hero from "./landing/Hero"
import History from "./landing/History";
import Resources from "./landing/Resources";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function Home(){
    return(
        <>
        <Header/>
        <Hero />
        <History />
        <Resources />
        <Footer />
        </>
    )
}