
let primaryPottery= 1

export function makePottery (potteryShape, potteryWeight, potteryHeight) {         return { 
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: primaryPottery++
    }
}