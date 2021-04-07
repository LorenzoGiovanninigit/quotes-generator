const frasi =  ['Parcheggia!', 'lo sto a faaaaaa', 'sto a fa er frappuccino', 'sei astuto come una palla a primavera', 'porco due nooooOOO', 'ci servono solo tre teamfight', 'non ho mai vinto ad heroes','forse se ti fai i cazzi tuoi ci riesco'];



const gen = document.getElementById('generatore');
const picsDisplay = document.getElementById('pics');
const contenitore = document.getElementById('container');




gen.onclick = (function(){
  arr = [];
  if(arr.length === 0 ){
    refill()
  }
  
  //pics generator
let r = Math.floor((Math.random() * 6) + 1);
picsDisplay.innerHTML = `<img src="pics/lol${r}.jpg" style=:width: 300px;" > `
  
  // quotes generator 
  let cit = arr.splice(Math.random() * arr.length, 1)[0]
  contenitore.innerHTML = cit;
  function refill(){
    arr = ['Parcheggia!', 'lo sto a faaaaaa', 'sto a fa er frappuccino', 'sei astuto come una palla a primavera', 'porco due nooooOOO', 'ci servono solo tre teamfight', 'non ho mai vinto ad heroes','forse se ti fai i cazzi tuoi ci riesco']
  }
})
