'reach 0.1';

const countDown=2;
const timer={
  showTime:Fun([UInt],Null)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    deposit:UInt,
    ...timer,
    makeDecision:Fun([],Bool),
    informTimeout: Fun([], Null),
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


  each([A,B],()=>{
    interact.showTime(countDown)
  })

  
  const informTimeout = () => {
    A.only(() => {
      interact.informTimeout();
    });
  };

  const fixedTimer=  lastConsensusSecs() + countDown

 //var stillHere = true;
 var [ count, stillHere  ] = [ fixedTimer,true] 
  invariant(balance() == balance());
   while ( stillHere== true ) {
    commit();
 
    //const count= lastConsensusSecs()
  A.only(() => {
    const decision = declassify(interact.makeDecision());
   
  });
  A.publish(decision)
  .timeout(fixedTimer, () =>closeTo(B, informTimeout))
  
 
 
  if(count==0){
    transfer(balance()).to(A)
 
  }
 // var [ count, initialValue ] = [ 1, 50 ] 

 // stillHere = decision
 [ count, stillHere  ] = [ count - 1,decision ] 
  continue;
}
transfer(balance()).to(B)
commit();

  
  exit();
});
