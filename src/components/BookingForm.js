import React, { useState } from 'react';

const BookingForm = ({ flight }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        luggage: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Réservation confirmée !');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Réservation pour le vol</h3>
            <p>Compagnie : {flight.airline}</p>
            <p>Prix : {flight.price}€</p>

            <label>
                Nom complet :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email :
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Bagages supplémentaires :
                <input
                    type="checkbox"
                    name="luggage"
                    checked={formData.luggage}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Confirmer la réservation</button>
        </form>
    );
};

export default BookingForm;
