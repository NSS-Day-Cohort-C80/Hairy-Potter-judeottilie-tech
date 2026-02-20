
export function firePottery (wheelPottery, kilnTemperature) {         
    wheelPottery.fired = true;
    
    if (kilnTemperature > 2200) {
        wheelPottery.cracked = true;
    } else {
        wheelPottery.cracked = false;
    }

    return wheelPottery;
}