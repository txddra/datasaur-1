/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino= function(newSpecies, newPeriod, newDiet, newExtinct = false){
  return{
species: newSpecies,
period : newPeriod,
carnivore : newDiet,
extinct: newExtinct,
}
}


//given an object
const makeSingular = function(obj){
  //returns new object
  const thisDinoObj = {
    species: obj.species,
    period: obj.period,
    carnivore: obj.carnivore,
    extinct: obj.extinct,
  };
  //if the species ends with 'us' take off those last two letters
  if(thisDinoObj.species.endsWith('us')){
    thisDinoObj.species = thisDinoObj.species.slice(0,thisDinoObj.species.length-2)
  }
  
  //   //otherwise return it as is
  return thisDinoObj;
  }

// 
const truncateSpecies = function(dino){
  
  const thisDinoObj = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }//if the length of the name is  10 or more characters long
  if (thisDinoObj.species.length > 10 ){
    //stop the string at the 7th character, adding "..." at the end
    thisDinoObj.species = thisDinoObj.species.slice(0,7)  + "..."
    
    }
    // otherwise return the object unchanged.
  return thisDinoObj
}

const makeExtinct = function(dino){
const thisDinoObj={
  species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true
}
// thisDinoObj.extinct = true
return thisDinoObj;
}

const isCarnivore = function(dino){
return dino.carnivore; 
}

const isExtinct = function(dino){
return dino.extinct;
}

const isTriassic = function(dino){
if(dino.period === 'Triassic'){
  return true;
}
return false;
}

const isJurassic = function(dinosaur){
if(dinosaur.period === 'Jurassic'){
return true;
}
return false;
}

const isCretaceous = function(givenDinosaur){
  if(givenDinosaur.period === 'Cretaceous'){
return true;
  }
  return false;
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/
//returns an array
//map functions:
const singularizeDinos = function(dino){
return dino.map(makeSingular)

}

const truncateDinos = function(dino){
  return dino.map(truncateSpecies)
} 

const makeAllExtinct = function(dino){
return dino.map(makeExtinct)
}

// filter functions
const carnivoresOnly = function(dino){
return dino.filter(isCarnivore)
}

const herbivoresOnly = function(array){
  //gets error: "false is not a function"
// return array.filter(!isCarnivore)
return array.filter(function (array){
  return !isCarnivore(array)
})

}


const extinctOnly = function(array){
return array.filter(isExtinct)
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
