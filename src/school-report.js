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
    const redHighestScore = 49;
    const amberLowestScore = 50;
    const amberHighestScore = 74;
    const greenLowestScore = 75;
    const greenHighestScore = 100;

    if (result <= redLowestScore && redHighestScore <= 50) {
      return "Red";
    } else if (result >= amberLowestScore && result <= amberHighestScore) {
      return "Amber";
    } else if (result >= greenLowestScore && result <= greenHighestScore) {
      return "Green";
    }
  }
}

module.exports = SchoolReport;
