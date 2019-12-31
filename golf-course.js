class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group){ 
    if(this.openings - group.length >=0){
      this.openings = this.openings - group.length;
      for(var i = 0; i <group.length; i++){
        this.currentlyPlaying.push(group[i].name);
      }
    }
  }
}

module.exports = GolfCourse;