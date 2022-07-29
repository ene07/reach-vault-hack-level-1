import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(stdlib.parseCurrency(10000));
const accBalance=async (who)=>stdlib.formatCurrency((await stdlib.balanceOf(who)))
console.log(`Alice balance before:${accBalance(accAlice)}`)
console.log(`Bob balance before:${accBalance(accBob)}`)

console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const decisions=["I’m not here","“I’m still here"]

const timer=()=>({
  showTime:(t)=>{
    console.log(t)
  }
})

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ... timer(),
    deposit:stdlib.parseCurrency(5000),
    makeDecision:()=>{
      const decision=Math.floor(Math.random()*2)
      console.log(`Alice made a decison:${decisions[decision]}`)

      return (decision==0? false:true)
    }
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ... timer(),
    acceptTerms:(num)=>{
      console.log(`Bob accepts the terms for ${stdlib.formatCurrency(num)}`)
      return true
    }
    // implement Bob's interact object here
  }),
]);
console.log(`Alice balance after:${accBalance(accAlice)}`)
console.log(`Bob balance after:${accBalance(accBob)}`)

console.log('Goodbye, Alice and Bob!');
