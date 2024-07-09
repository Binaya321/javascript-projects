// Code your orbitCircumference function here:
function findOrbitCircumference(radius) {
        return Math.round(2*Math.PI*radius);
}

//console.log(findOrbitCircumference(5)); 

// Code your missionDuration function here:
function missionDuration(numberOfOrbits,orbitRadius = 2000,orbitSpeed = 28000){
  let time = numberOfOrbits*(findOrbitCircumference(orbitRadius))/orbitSpeed;
  return (Math.round(time*100)/100);
}
let orbitNumber = 8;
//console.log(missionDuration(5));
//let distance = numberOfOrbits*findOrbitCircumference(2000);
// Copy/paste your selectRandomEntry function here:
console.log (`The mission will travel ${orbitNumber*findOrbitCircumference(2000)} km around the planet, and it will take ${missionDuration(orbitNumber)} hours to complete.`);

// Code your oxygenExpended function here:
function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
function oxygenExpended(candidateObject){
  missionDuration(3);
  candidateObject.o2Used
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 