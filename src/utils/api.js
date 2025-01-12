import axios from 'axios';

const API_BASE_URL = 'https://api.travelpayouts.com'; // Exemple

export const fetchFlights = async (params) => {
    const response = await axios.get(`${API_BASE_URL}/v1/flights`, { params });
    return response.data;
};

export const fetchFlightDetails = async (flightId) => {
    const response = await axios.get(`${API_BASE_URL}/v1/flights/${flightId}`);
    return response.data;
};