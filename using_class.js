//using class

// Constructor

class SpaceShuttle {
    constructor(targetPlanet){
     this.targetPlanet = targetPlanet;
    }
 }
 var zeus = new SpaceShuttle('Jupiter');
 console.log(zeus.targetPlanet);
 
 function makeClass() {
     class Thermostat{
         constructor(temp){
             this._temp = 5/9 * (temp-32);
         }
         get temperature(){
             return this._temp;
         }
         set temperature(updatedTemp){
             this._temp=updatedTemp;
         }
     }
     return Thermostat;
 }
 const Thermostat = makeClass();
 const thermos = new Thermostat(76);
 let temp = thermos.temperature;
 console.log(temp);
 thermos.temperature =26;
 temp = thermos.temperature;
 console.log(temp);