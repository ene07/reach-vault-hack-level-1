'reach 0.1';

const countDown=10;
const timer={
  showTime:Fun([UInt],Null)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    deposit:UInt,
    ...timer,
    makeDecision:Fun([],Bool)
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    acceptTerms:Fun([UInt],Bool),
    ...timer
  });
  init();
  // The first one to publish deploys the contract

  A.only(() => {
    const value = declassify(interact.deposit);
   
  });
  A.publish(value)
    .pay(value);
  commit();
  // The second one to publish always attaches
  B.only(() => {
   const terms=declassify(interact.acceptTerms(value));
    
  });
  B.publish(terms)
  commit();

  each([A,B],()=>{
    interact.showTime(countDown)
  })

  A.only(() => {
    const decision = declassify(interact.makeDecision());
   
  });
  A.publish(decision)

  if(decision){
    transfer(value).to(A)
  }else{
    transfer(value).to(B)
  }
  commit();
  // write your program here
  exit();
});