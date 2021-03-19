class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    const resultsSplit = this.results.split(",");
    const resultsArray = resultsSplit.map((result) => {
      return parseInt(result);
    });
    const colourFrequency = resultsArray.length;
    const resultsColours = resultsArray.map((result) => {
      return this.determineColour(result);
    });

    return `${resultsColours[0]}: ${colourFrequency}`;
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
