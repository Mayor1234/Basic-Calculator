"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(data) {
        this.data = data;
        this.operation = '';
        this.equals = '';
    }
    static buildCalc() {
        return new Calculator({
            currentOperand: '',
            prevOperand: '',
        });
    }
    clear() {
        this.data.currentOperand = '';
        this.data.prevOperand = '';
        this.operation = '';
        this.equals = '0';
    }
    del() {
        this.data.currentOperand = this.data.currentOperand.slice(0, -1);
    }
    operationSelect(operation) {
        if (this.data.currentOperand === '')
            return;
        if (this.data.prevOperand !== '') {
            this.computation();
        }
        this.data.prevOperand = this.data.currentOperand;
        this.operation = operation;
        this.data.currentOperand = '';
    }
    appendNumber(numberSets) {
        if (numberSets === '.' && this.data.currentOperand.includes('.'))
            return;
        if (numberSets === '+/-') {
            if (this.data.currentOperand === '')
                return;
            const x = -this.data.currentOperand;
            return (this.data.currentOperand = x.toString());
        }
        this.data.currentOperand += numberSets;
    }
    eventing() {
        const btn = document.querySelector('.calc-buttons');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
            if (e !== null && e.target !== null) {
                const element = e.target;
                if (element.matches('[data-number')) {
                    const numberData = element.textContent;
                    if (numberData !== null) {
                        this.appendNumber(numberData);
                        this.updateDisplay();
                    }
                }
                else if (element.matches('[data-operation]')) {
                    const dataOperation = element.textContent;
                    if (dataOperation !== null) {
                        this.operationSelect(dataOperation);
                        this.updateDisplay();
                    }
                }
                else if (element.matches('[data-clear]')) {
                    const dataOperation = element.textContent;
                    if (dataOperation !== null) {
                        this.clear();
                        this.updateDisplay();
                    }
                }
                else if (element.matches('[data-delete]')) {
                    const dataOperation = element.textContent;
                    if (dataOperation !== null) {
                        this.del();
                        this.updateDisplay();
                    }
                }
                else if (element.matches('[data-equals]')) {
                    const dataOperation = element.textContent;
                    if (dataOperation !== null) {
                        this.computation();
                        this.updateDisplay();
                    }
                }
            }
        });
    }
    computation() {
        let ans = 0;
        const prev = parseFloat(this.data.prevOperand);
        const curr = parseFloat(this.data.currentOperand);
        if (isNaN(prev) || isNaN(curr))
            return;
        switch (this.operation) {
            case '+':
                ans = prev + curr;
                break;
            case '-':
                ans = prev - curr;
                break;
            case 'x':
                ans = prev * curr;
                break;
            case '/':
                ans = prev / curr;
                break;
            case '%':
                ans = (prev / 100) * curr;
                break;
            case '+/-':
                ans = -curr;
                break;
            default:
                break;
        }
        this.equals = parseFloat(ans.toFixed(4)).toString();
        this.data.prevOperand = '';
        this.operation = '';
        this.data.currentOperand = this.equals;
    }
    updateDisplay() {
        const prevOp = document.querySelector('.input-screen .prev-op');
        const currOp = document.querySelector('.input-screen .curr-op');
        const outputScreen = document.querySelector('.output-screen');
        const operator = document.querySelector('.input-screen .operator');
        if (prevOp !== null &&
            currOp !== null &&
            operator !== null &&
            outputScreen !== null) {
            prevOp.textContent = this.data.prevOperand;
            currOp.textContent = this.data.currentOperand;
            operator.textContent = this.operation;
            outputScreen.textContent = this.equals;
        }
    }
    toggleTheme() {
        const container = document.querySelector('.container');
        const toggle = document.querySelector('.theme-toggle input');
        const label = document.querySelector('.theme-toggle label');
        if (toggle !== null && label !== null) {
            toggle.addEventListener('click', () => {
                if (toggle.checked) {
                    container.classList.replace('light', 'dark');
                    label.style.background = '#333';
                }
                else {
                    container.classList.replace('dark', 'light');
                    label.style.background = '#d3d4d6';
                }
            });
        }
    }
}
exports.Calculator = Calculator;
