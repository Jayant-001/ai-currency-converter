import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi("fca_live_h2OlVg9mVXLiI5V2gtP3cXZAjjOGiHa4EATS7hr6");

export const Convert = async (fromCurrency, toCurrency, units) => {

    try {
        const data = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        })
    
        const multiplier = data.data[toCurrency]
        return units * multiplier;
        
    } catch (error) {
        throw Error("ERROR: ", error.message);
    }
}