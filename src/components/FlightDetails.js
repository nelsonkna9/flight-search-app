import BookingForm from './BookingForm';

const FlightDetails = ({ flight }) => {
    return (
        <div className="flight-details">
            <h2>Détails du vol</h2>
            <p>Compagnie aérienne : {flight.airline}</p>
            <p>Prix : {flight.price}€</p>
            <p>Temps de trajet : {flight.duration}</p>
            <p>Date de départ : {flight.departureDate}</p>
            <BookingForm flight={flight} />
        </div>
    );
};

export default FlightDetails;
