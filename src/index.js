"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
const calculator = new Calculator_1.Calculator({
    currentOperand: '',
    prevOperand: '',
});
calculator.eventing();
calculator.toggleTheme();
