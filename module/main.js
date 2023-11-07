import { increase, decrease } from "./counter.js";
import { increaseBtn as btnIncrease, decreaseBtn as btnDecrease } from "./document.js";

btnIncrease.addEventListener("click", increase)
btnDecrease.addEventListener("click", decrease)
