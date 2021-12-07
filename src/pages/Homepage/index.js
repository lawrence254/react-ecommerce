import React from "react";
import Directory from "../../components/Directory";
import './styles.scss'
import Header from '../../components/Header'
import Footer from "../../components/Footer";

const Homepage = props => {
    return (
        <section className="homepage">
            {/* <Header /> */}
            <Directory />
            {/* <Footer /> */}
        </section>
    )
}

export default Homepage;