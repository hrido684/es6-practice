const age=[12,23,34,32,24,23];
const ages =[23,12,23,14,13,13];
// const allAges=age.concat(ages);
const allAgees=[...age,5,...ages];
console.log(allAgees);
const buisness = 450;
const minister= 359;
const socib= 393;

const maxium = Math.max(buisness,minister,socib);
console.log(maxium);
const takaPoisa = [1203,2833,4632];
const maxiume = Math.max(...takaPoisa);
console.log(maxiume);