import React from 'react';
import './styles/FindUs.css';

function FindUs() {
    return (
        <div className="find-us-container">
            <h1>Znajdziesz nas na Tumskiej 7 w Płocku</h1>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4594.04051884827!2d19.683716590209915!3d52.54517146465464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c709e47c1b7cb%3A0x66a9eca529158f49!2sKWIACIARNIA!5e0!3m2!1spl!2spl!4v1729619059213!5m2!1spl!2spl"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                ></iframe>
            </div>
        </div>
    );
}


export default FindUs;
