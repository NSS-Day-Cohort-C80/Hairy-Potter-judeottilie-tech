// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel

let orangeMug = makePottery("Orange-Glazed Mug", 2, 4)
let piggyBank = makePottery("Piggy Bank", 7, 4.5)
let frogVase = makePottery("Frog Vase", 10, 10)
let teaPot = makePottery("Tea Pot", 5, 5)
let terracottaPot = makePottery("Large Terracotta Pot", 20, 10)

// Fire each piece of pottery in the kiln

let firedOrangeMug = firePottery(orangeMug, 2600)
let firedPiggyBank = firePottery(piggyBank, 2000)
let firedFrogVase = firePottery(frogVase, 2100)
let firedTeaPot = firePottery(teaPot, 2700)
let firedTerracottaPot = firePottery(terracottaPot, 1900)

console.log(firedOrangeMug)
console.log(firedPiggyBank)
console.log(firedFrogVase)
console.log(firedTeaPot)
console.log(firedTerracottaPot)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

