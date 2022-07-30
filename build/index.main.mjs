// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v126 = stdlib.protect(ctc0, interact.deposit, 'for Alice\'s interact field deposit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v126],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v126, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v130], secs: v132, time: v131, didSend: v29, from: v129 } = txn1;
      
      sim_r.txns.push({
        amt: v130,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v29, from: v129 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v139], secs: v141, time: v140, didSend: v38, from: v138 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '2')), {
    at: './index.rsh:40:22:application',
    fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:16:function exp)'],
    msg: 'showTime',
    who: 'Alice'
    });
  
  const v147 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '2'));
  let v148 = v147;
  let v149 = true;
  let v150 = v140;
  let v157 = v130;
  
  while (await (async () => {
    
    return v149;})()) {
    const v164 = stdlib.sub(stdlib.UInt_max, v150);
    const v165 = stdlib.sub(v164, v147);
    const v166 = stdlib.ge(v165, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v166, {
      at: 'reach standard library:578:15:application',
      fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:64:11:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v167 = stdlib.add(v150, v147);
    const v171 = stdlib.protect(ctc1, await interact.makeDecision(), {
      at: './index.rsh:60:54:application',
      fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)'],
      msg: 'makeDecision',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v129, v138, v147, v148, v157, v167, v171],
      evt_cnt: 1,
      funcNum: 3,
      lct: v150,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:63:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v173], secs: v175, time: v174, didSend: v64, from: v172 } = txn3;
        
        ;
        const v177 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:68:13:decimal', stdlib.UInt_max, '0'));
        if (v177) {
          const v182 = stdlib.sub(v157, v157);
          sim_r.txns.push({
            kind: 'from',
            to: v129,
            tok: undefined /* Nothing */
            });
          const v183 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
          const cv148 = v183;
          const cv149 = v173;
          const cv150 = v174;
          const cv157 = v182;
          
          await (async () => {
            const v148 = cv148;
            const v149 = cv149;
            const v150 = cv150;
            const v157 = cv157;
            
            if (await (async () => {
              
              return v149;})()) {
              const v164 = stdlib.sub(stdlib.UInt_max, v150);
              const v165 = stdlib.sub(v164, v147);
              const v166 = stdlib.ge(v165, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
              ;
              const v167 = stdlib.add(v150, v147);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v138,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        else {
          const v184 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
          const cv148 = v184;
          const cv149 = v173;
          const cv150 = v174;
          const cv157 = v157;
          
          await (async () => {
            const v148 = cv148;
            const v149 = cv149;
            const v150 = cv150;
            const v157 = cv157;
            
            if (await (async () => {
              
              return v149;})()) {
              const v164 = stdlib.sub(stdlib.UInt_max, v150);
              const v165 = stdlib.sub(v164, v147);
              const v166 = stdlib.ge(v165, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
              ;
              const v167 = stdlib.add(v150, v147);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v138,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v167],
      tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v129, v138, v147, v148, v157, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v150,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v187, time: v186, didSend: v90, from: v185 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v138,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v187, time: v186, didSend: v90, from: v185 } = txn4;
      ;
      const v188 = stdlib.addressEq(v129, v185);
      const v189 = stdlib.addressEq(v138, v185);
      const v190 = v188 ? true : v189;
      stdlib.assert(v190, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:64:36:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:46:29:application',
        fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:15:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:64:36:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v173], secs: v175, time: v174, didSend: v64, from: v172 } = txn3;
      ;
      const v176 = stdlib.addressEq(v129, v172);
      stdlib.assert(v176, {
        at: './index.rsh:63:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v177 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:68:13:decimal', stdlib.UInt_max, '0'));
      if (v177) {
        const v182 = stdlib.sub(v157, v157);
        ;
        const v183 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
        const cv148 = v183;
        const cv149 = v173;
        const cv150 = v174;
        const cv157 = v182;
        
        v148 = cv148;
        v149 = cv149;
        v150 = cv150;
        v157 = cv157;
        
        continue;}
      else {
        const v184 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
        const cv148 = v184;
        const cv149 = v173;
        const cv150 = v174;
        const cv157 = v157;
        
        v148 = cv148;
        v149 = cv149;
        v150 = cv150;
        v157 = cv157;
        
        continue;}}
    
    }
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v29, from: v129 } = txn1;
  ;
  const v137 = stdlib.protect(ctc1, await interact.acceptTerms(v130), {
    at: './index.rsh:33:47:application',
    fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v129, v130, v132, v137],
    evt_cnt: 1,
    funcNum: 1,
    lct: v131,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v139], secs: v141, time: v140, didSend: v38, from: v138 } = txn2;
      
      ;
      
      const v147 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '2'));
      const v148 = v147;
      const v149 = true;
      const v150 = v140;
      const v157 = v130;
      
      if (await (async () => {
        
        return v149;})()) {
        const v167 = stdlib.add(v150, v147);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v138,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v139], secs: v141, time: v140, didSend: v38, from: v138 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showTime(stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '2')), {
    at: './index.rsh:40:22:application',
    fs: ['at ./index.rsh:39:7:application call to [unknown function] (defined at: ./index.rsh:39:16:function exp)'],
    msg: 'showTime',
    who: 'Bob'
    });
  
  const v147 = stdlib.add(v132, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '2'));
  let v148 = v147;
  let v149 = true;
  let v150 = v140;
  let v157 = v130;
  
  while (await (async () => {
    
    return v149;})()) {
    const v164 = stdlib.sub(stdlib.UInt_max, v150);
    const v165 = stdlib.sub(v164, v147);
    const v166 = stdlib.ge(v165, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v166, {
      at: 'reach standard library:578:15:application',
      fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:64:11:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v167 = stdlib.add(v150, v147);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: ['time', v167],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v129, v138, v147, v148, v157, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v150,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v187, time: v186, didSend: v90, from: v185 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v138,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v187, time: v186, didSend: v90, from: v185 } = txn4;
      ;
      const v188 = stdlib.addressEq(v129, v185);
      const v189 = stdlib.addressEq(v138, v185);
      const v190 = v188 ? true : v189;
      stdlib.assert(v190, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:64:36:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      return;
      
      }
    else {
      const {data: [v173], secs: v175, time: v174, didSend: v64, from: v172 } = txn3;
      ;
      const v176 = stdlib.addressEq(v129, v172);
      stdlib.assert(v176, {
        at: './index.rsh:63:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v177 = stdlib.eq(v148, stdlib.checkedBigNumberify('./index.rsh:68:13:decimal', stdlib.UInt_max, '0'));
      if (v177) {
        const v182 = stdlib.sub(v157, v157);
        ;
        const v183 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
        const cv148 = v183;
        const cv149 = v173;
        const cv150 = v174;
        const cv157 = v182;
        
        v148 = cv148;
        v149 = cv149;
        v150 = cv150;
        v157 = cv157;
        
        continue;}
      else {
        const v184 = stdlib.sub(v148, stdlib.checkedBigNumberify('./index.rsh:75:36:decimal', stdlib.UInt_max, '1'));
        const cv148 = v184;
        const cv149 = v173;
        const cv150 = v174;
        const cv157 = v157;
        
        v148 = cv148;
        v149 = cv149;
        v150 = cv150;
        v157 = cv157;
        
        continue;}}
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEEWFACJgIBAAAiNQAxGEECaylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQADqSSQMQABRJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf+ABJEnNPOwMgY0AyVbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgGVSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/VyAgNf6BQFs1/YFIWzX8IQRbNftJNQUXNfqABGWxA100+hZRBwhQsDIGNAMlWwxENP8xABJENPwiEkEAJbEisgE0+7III7IQNP+yB7M0/zT+NP00/CMJNPoyBjT7SQlCAK00/zT+NP00/CMJNPoyBjT7QgCaSSMMQABKIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABA+/xjQ0/xZRBwhQsDQDgShbIQUINf40A1cAIDEANP5JIzIGNAOBIFtCAEpIgaCNBogBGCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADyMQA0/xZQMgcWUChLAVcAMGdIIzUBMgY1AkIAhDX/Nf41/TX8Nfs1+jX5NP1BAEKB////////////ATT+CTT7CSIPRDT+NPsINfg0+TT6UDT7FlA0/BZQNP8WUDT4FlAoSwFXAGBnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT6sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v139",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v173",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v139",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v173",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200106d3803806200106d8339810160408190526200002691620001f0565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515162000089903414600762000120565b620000b7604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381015151818401908152426040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001179260029201906200014a565b505050620002cf565b81620001465760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001589062000292565b90600052602060002090601f0160209004810192826200017c5760008555620001c7565b82601f106200019757805160ff1916838001178555620001c7565b82800160010185558215620001c7579182015b82811115620001c7578251825591602001919060010190620001aa565b50620001d5929150620001d9565b5090565b5b80821115620001d55760008155600101620001da565b60008183036040808212156200020557600080fd5b80518082016001600160401b0380821183831017156200023557634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200024f57600080fd5b8351945060208501915084821081831117156200027c57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c90821680620002a757607f821691505b60208210811415620002c957634e487b7160e01b600052602260045260246000fd5b50919050565b610d8e80620002df6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780639a3e391214610098578063a7661d54146100ab578063ab53f2c6146100be578063e2186a08146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a6366004610aa7565b6100f4565b61005d6100b9366004610aa7565b610295565b3480156100ca57600080fd5b506100d361044b565b60405161007a929190610aca565b61005d6100ef366004610aa7565b6104e8565b6101046001600054146009610795565b61011e8135158061011757506001548235145b600a610795565b60008080556002805461013090610b27565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610b27565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b78565b90506101d96040518060200160405280600081525090565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338460405161020a929190610c12565b60405180910390a161021e34156008610795565b6002826040015161022f9190610c45565b815261023961095e565b825181516001600160a01b03909116905280513360209182015282518251604090810191909152835182840180519190915280516001908401528051439201919091529084015190516060015261028f816107ba565b50505050565b6102a56004600054146013610795565b6102bf813515806102b857506001548235145b6014610795565b6000808055600280546102d190610b27565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd90610b27565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b50505050508060200190518101906103629190610c5d565b90506103768160a001514310156015610795565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516103a7929190610cf1565b60405180910390a16103bb34156011610795565b80516103ef906001600160a01b031633146103e55760208201516001600160a01b031633146103e8565b60015b6012610795565b80602001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610430573d6000803e3d6000fd5b5060008080556001819055610447906002906109b9565b5050565b60006060600054600280805461046090610b27565b80601f016020809104026020016040519081016040528092919081815260200182805461048c90610b27565b80156104d95780601f106104ae576101008083540402835291602001916104d9565b820191906000526020600020905b8154815290600101906020018083116104bc57829003601f168201915b50505050509050915091509091565b6104f8600460005414600e610795565b6105128135158061050b57506001548235145b600f610795565b60008080556002805461052490610b27565b80601f016020809104026020016040519081016040528092919081815260200182805461055090610b27565b801561059d5780601f106105725761010080835404028352916020019161059d565b820191906000526020600020905b81548152906001019060200180831161058057829003601f168201915b50505050508060200190518101906105b59190610c5d565b90506105c88160a0015143106010610795565b7fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e3533836040516105f9929190610c12565b60405180910390a161060d3415600c610795565b8051610625906001600160a01b03163314600d610795565b606081015161070957805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561066b573d6000803e3d6000fd5b5061067461095e565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608201516106af90600190610d26565b602080830151919091526106c99060408501908501610d3d565b602080830180519215159290910191909152514360409091015260808201516106f29080610d26565b602082015160600152610704816107ba565b505050565b61071161095e565b815181516001600160a01b03918216905260208084015183519216910152604080830151825190910152606082015161074c90600190610d26565b602080830151919091526107669060408501908501610d3d565b6020808301805192151592909101919091528051436040909101526080830151905160600152610704816107ba565b816104475760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152816020015160200151156109155761080e60008360000151604001518460200151604001516000196107fb9190610d26565b6108059190610d26565b1015600b610795565b81600001516040015182602001516040015161082a9190610c45565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151831681850190815286516040908101518187019081528389018051516060808a0191825291518201516080808b019182528b5160a0808d019182526004600055436001558751998a019a909a529651909916948701949094529151908501525194830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061028f9291906109f6565b8160000151602001516001600160a01b03166108fc8360200151606001519081150290604051600060405180830381858888f19350505050158015610430573d6000803e3d6000fd5b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016109b460405180608001604052806000815260200160001515815260200160008152602001600081525090565b905290565b5080546109c590610b27565b6000825580601f106109d5575050565b601f0160209004906000526020600020908101906109f39190610a7a565b50565b828054610a0290610b27565b90600052602060002090601f016020900481019282610a245760008555610a6a565b82601f10610a3d57805160ff1916838001178555610a6a565b82800160010185558215610a6a579182015b82811115610a6a578251825591602001919060010190610a4f565b50610a76929150610a7a565b5090565b5b80821115610a765760008155600101610a7b565b600060408284031215610aa157600080fd5b50919050565b600060408284031215610ab957600080fd5b610ac38383610a8f565b9392505050565b82815260006020604081840152835180604085015260005b81811015610afe57858101830151858201606001528201610ae2565b81811115610b10576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b3b57607f821691505b60208210811415610aa157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b7357600080fd5b919050565b600060608284031215610b8a57600080fd5b6040516060810181811067ffffffffffffffff82111715610bbb57634e487b7160e01b600052604160045260246000fd5b604052610bc783610b5c565b815260208301516020820152604083015160408201528091505092915050565b80358015158114610b7357600080fd5b80358252610c0760208201610be7565b151560208301525050565b6001600160a01b038316815260608101610ac36020830184610bf7565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c5857610c58610c2f565b500190565b600060c08284031215610c6f57600080fd5b60405160c0810181811067ffffffffffffffff82111715610ca057634e487b7160e01b600052604160045260246000fd5b604052610cac83610b5c565b8152610cba60208401610b5c565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190610d18908401610be7565b151560408301529392505050565b600082821015610d3857610d38610c2f565b500390565b600060208284031215610d4f57600080fd5b610ac382610be756fea26469706673582212207c70d35fe17c90bdd046441c2e5a123f7358a6f5ef360dbb4314cb3513955b9664736f6c634300080c0033`,
  BytecodeLen: 4205,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:79:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:36:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
