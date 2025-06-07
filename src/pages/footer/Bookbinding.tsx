import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bookbinding = () => {
    return (
        <section className="min-h-screen bg-white py-16 px-6 md:px-12">
            <div>
                <Navigation />
            </div>
            <div>
                <h1>Hello i am boook binding pages</h1>
            </div>

            <div>
                <Footer />
            </div>

        </section>

    )
}

export default Bookbinding;