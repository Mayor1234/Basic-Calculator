import { Calculator } from './Calculator';

const calculator = new Calculator({
  currentOperand: '',
  prevOperand: '',
});
calculator.eventing();
calculator.toggleTheme();
