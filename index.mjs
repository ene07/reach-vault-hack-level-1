import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(7000);

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
const accBalance=async (who)=>stdlib.formatCurrency((await stdlib.balanceOf(who)))
console.log(`Alice balance before:${await accBalance(accAlice)}`)
console.log(`Bob balance before:${await accBalance(accBob)}`)

console.log('Hello, Alice and Bob!');

console.log('Launching...');

let ctc = null;
if (isAlice) {
  ctc = accAlice.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc =  accBob.contract(backend, info);
}


const fmt = (x) => stdlib.formatCurrency(x, 4);

const interact = { };


interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

interact.showTime=(t)=>console.log(t)


console.log('Starting backends...');
if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to deposit?`,
    stdlib.parseCurrency
  );
  interact.deposit = amt;
  //interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptTerms= async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the terms of ${fmt(amt)}?`,
      ask.yesno
    );
    if(accepted) return true
    if (!accepted) {
      process.exit(0);
    }
  };
}


if (isAlice) {

interact.makeDecision = async () => {
  const decision = await ask.ask(`Are you still in?`,  ask.yesno)
  return (decision? true:false)
}
}



const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);


console.log(`Alice balance after:${await accBalance( accAlice)}`)
console.log(`Bob balance after:${await accBalance(accBob)}`)

console.log('Goodbye, Alice and Bob!');
ask.done();
