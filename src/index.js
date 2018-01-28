const verbs = [
  'to abide - abode -	abode',
  'to breed -	bred - bred',
  'to arise -	arose -	arisen',
  'to bring -	brought -	brought',
  'to awake -	awoke -	awoken',
  'to build -	built -	built',
  'to bear - bore - borne',
  'to beat - beat -	beaten',
  'to burst -	burst -	burst',
  'to become - became -	become',
  'to buy -	bought - bought',
  'to begin - began - begun',
  'to cast - cast - cast',
  'to bend - bent - bent',
  'to catch - caught - caught',
  'to bet - bet - bet',
  'to choose - chose - chosen',
  'to bid - bid - bid',
  'to cling - clung - clung',
  'to bind - bound - bound',
  'to come - came - come',
  'to bite - bit - bitten',
  'to cost - cost - cost',
  'to bleed - bled - bled',
  'to creep - crept -	crept',
  'to blow - blew -	blown',
  'to cut -	cut -	cut',
  'to break - broke -	broken',
];

let nextVerb = document.querySelector('button');

(function () {
  nextVerb.addEventListener('click', () => {
    let currentVerbs = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('currentVerb').innerText = currentVerbs;
  })
})();
