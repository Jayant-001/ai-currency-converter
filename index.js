import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import dotenv from 'dotenv'

dotenv.config();

const freecurrencyapi = new Freecurrencyapi(process.env.API_KEY);

const convert = async (fromCurrency, toCurrency, units) => {

    const data = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })

    const multiplier = data.data[toCurrency]
    console.log(units * multiplier)
    return units * multiplier;
}


convert('USD', "EUR", 34)