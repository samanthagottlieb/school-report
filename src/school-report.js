class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    const resultsNum = parseInt(this.results);
    const colourFrequency = 1;

    return `${this.determineColour(resultsNum)}: ${colourFrequency}`;
  }

  determineColour(result) {
    const redLowestScore = 0;
    const redAmberThreshold = 50;
    const amberGreenThreshold = 75;
    const greenHighestScore = 100;

    if (result >= redLowestScore && result < redAmberThreshold) {
      return "Red";
    } else if (result >= redAmberThreshold && result < amberGreenThreshold) {
      return "Amber";
    } else if (result >= amberGreenThreshold && result <= greenHighestScore) {
      return "Green";
    }
  }
}

module.exports = SchoolReport;
