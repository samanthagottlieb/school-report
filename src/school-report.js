class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    this.parseResults(this.results);

    const colourFrequency = this.results.length;
    const resultsColours = this.results.map((result) => {
      return this.determineColour(result);
    });

    return `${resultsColours[0]}: ${colourFrequency}`;
  }

  parseResults(results) {
    const resultsSplit = results.split(",");
    this.results = resultsSplit.map((result) => {
      return parseInt(result);
    });
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
