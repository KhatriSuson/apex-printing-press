import React from "react";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";


const Portfolionav = () => {
    return (
        <div className="bg-apex-white">
            <Navigation />
            <Portfolio />
            <Services />
            <Footer />
        </div>
    );
};
export default Portfolionav;