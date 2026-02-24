let soldPottery = []

export function toSellOrNotToSell (firedPottery) {         
    
    if (firedPottery.cracked === false) {
        if (firedPottery.weight >= 6) {
            firedPottery.price = 40;
        } else {
            firedPottery.price = 20;
        }
        soldPottery.push(firedPottery);
    }

    return firedPottery;
}

export function usePottery () {
    return JSON.parse(JSON.stringify(soldPottery));
}