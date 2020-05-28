const { plants } = require("./plants")
// plants = [
//     {
//       "name": "Alder",
//       "species": "Alnus"
//     },
//     {
//       "name": "Black alder",
//       "species": "Alnus glutinosa, Ilex verticillata"
//     },
//     {
//       "name": "Common alder",
//       "species": "Alnus glutinosa"
//     },
//     {
//       "name": "False alder",
//       "species": "Ilex verticillata"
//     },
//     {
//       "name": "Gray alder",
//       "species": "Alnus incana"
//     },
//     {
//       "name": "Speckled alder",
//       "species": "Alnus incana"
//     },
//     {
//       "name": "Striped alder",
//       "species": "Ilex verticillata"
//     },
//     {
//       "name": "White alder",
//       "species": "Alnus incana, Ilex verticillata"
//     },
//     {
//       "name": "Almond",
//       "species": "Prunus amygdalus"
//     },
//     {
//       "name": "Tall ambrosia",
//       "species": "Ambrosia trifida"
//     },
//     {
//       "name": "Amy root",
//       "species": "Apocynum cannabinum"
//     },
//     {
//       "name": "Apple",
//       "species": "Malus domestica"
//     },
//     {
//       "name": "apple",
//       "species": "Maclura pomifera"
//     },
//     {
//       "name": "Apple of Sodom",
//       "species": "Solanum carolinense"
//     },
//     {
//       "name": "Apricot",
//       "species": "Prunus armeniaca"
//     },
//     {
//       "name": "Arfaj",
//       "species": "Rhanterium epapposum"
//     },
//     {
//       "name": "Arizona sycamore",
//       "species": "Platanus wrighitii"
//     },
//     {
//       "name": "Arrowwood",
//       "species": "Cornus florida"
//     },
//     {
//       "name": "Indian arrowwood",
//       "species": "Cornus florida"
//     },
//     {
//       "name": "Ash",
//       "species": "Fraxinus spp."
//     },
//     {
//       "name": "Black ash",
//       "species": "Acer negundo, Fraxinus nigra"
//     },
//     {
//       "name": "Blue ash",
//       "species": "Fraxinus pennsylvanica"
//     },
//     {
//       "name": "Cane ash",
//       "species": "Fraxinus americana"
//     },
//     {
//       "name": "Green ash",
//       "species": "Fraxinus pennsylvanica"
//     },
//     {
//       "name": "Maple ash",
//       "species": "Acer negundo"
//     },
//     {
//       "name": "Red ash",
//       "species": "Fraxinus pennsylvanica"
//     },
//     {
//       "name": "River ash",
//       "species": "Fraxinus pennsylvanica"
//     },
//     {
//       "name": "Swamp ash",
//       "species": "Fraxinus pennsylvanica"
//     },
//     {
//       "name": "White ash",
//       "species": "Fraxinus americana"
//     },
//     {
//       "name": "Water ash",
//       "species": "Acer negundo, Fraxinus pennsylvanica"
//     },
//     {
//       "name": "Azolla",
//       "species": "Azolla"
//     },
//     {
//       "name": "Carolina azolla",
//       "species": "Azolla caroliniana"
//     },
//     {
//       "name": "Bamboo",
//       "species": "Bambuseae"
//     }]



class Plant {
  
  // get allArray(){
  //   return 
  // }

  // get addToArray(plant){
  //   return allPlants.push(plant)
  // }

  constructor(name, species){
    this.name = name
    this.species = species
    this.constructor.all.push(this)
  }
  
  static all = []

  toTitleCase() {
    return this.name.replace(
      /([^\W_]+[^\s-]*) */g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1);
        }
    );
  };
  
  static filterBySpeciesPlants(plants, species){
    return plants.filter(function(plant) {
      return plant.species === species
    })
  }

  
  
}
// Plant.prototype.all = []

function makeInstances(array){
  return array.forEach(element => {
    let p = new Plant(element.name, element.species)
    Plant.all.push(p)
  })
}

makeInstances(plants)

let test = new Plant('rosemary', 'smellgood')
let test2 = new Plant('testing', 'all variable')
console.log(test.constructor)


// function toTitleCase(str) {
//     return str.replace(
//       /([^\W_]+[^\s-]*) */g,
//         function(txt) {
//             return txt.charAt(0).toUpperCase() + txt.substr(1);
//         }
//     );
//   };
  
// const titleCased = () => {
//     return plants.map(x => toTitleCase(x.name))
// }

// function filterBySpeciesPlants(plants, species) {
//     return plants.filter(function(plant) {
//         return plant.species === species
//     })
// }

// console.log(filterBySpeciesPlants(plants, 'Azolla'))