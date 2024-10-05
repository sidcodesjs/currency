import axios from 'axios';

const EXCHANGE_API_URL = 'https://openexchangerates.org/api/latest.json'
const API_KEY = 'b5b2a8b3ab7f49238bc6e9ed30091dfc'

export const getExchangeRate = async () => {
    try {
        const response = await axios.get(`${EXCHANGE_API_URL}?app_id=${API_KEY}`)
        return response.data.rates;}
        catch (error) {
            console.error('Error fetching exchange rates:',error);
            return null;
        }
}