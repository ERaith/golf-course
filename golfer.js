class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg() {
    var handicapAvg = 72 + this.handicap;
    return `I usually shoot a ${handicapAvg} on average.`;
  }
  playRound(golfCourse) {
    switch (golfCourse.difficulty) {
      case "hard":
        this.frustration = 500;
        break;
      case "moderate":
        this.frustration = 100;
        break;
      default:
        this.frustration = this.frustration;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
  }
  whatYaShoot(shotNum) {
    if (shotNum == 0) {
      this.frustration += -10;
      return "Booyah!";
    } else if (shotNum < 0) {
      this.frustration = 0;
      return "I AM THE GREATEST GOLFER ALIVE!";
    } else {
      this.frustration += 20;
      return "Doh!";
    }
  }
}

module.exports = Golfer;
