class SchoolReport {
  constructor(results) {
    this.results = results;
    this.greenResults = [];
    this.amberResults = [];
    this.redResults = [];
    this.reportArray = [];
    this.invalidResults = 0;
  }

  createReport() {
    this.parseResults(this.results);
    this.results.forEach((result) => {
      return this.determineColour(result);
    });

    this.greenReport();
    this.amberReport();
    this.redReport();
    this.invalidReport();

    return this.reportArray.join("\n");
  }

  greenReport() {
    const greenFrequency = this.greenResults.length;

    if (this.greenResults.length > 0) {
      this.reportArray.push(`Green: ${greenFrequency}`);
    }
  }

  amberReport() {
    const amberFrequency = this.amberResults.length;

    if (this.amberResults.length > 0) {
      this.reportArray.push(`Amber: ${amberFrequency}`);
    }
  }

  redReport() {
    const redFrequency = this.redResults.length;

    if (this.redResults.length > 0) {
      this.reportArray.push(`Red: ${redFrequency}`);
    }
  }

  invalidReport() {
    if (this.invalidResults > 0) {
      this.reportArray.push(`Invalid: ${this.invalidResults}`);
    }
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
      this.redResults.push("Red");
    } else if (result >= redAmberThreshold && result < amberGreenThreshold) {
      this.amberResults.push("Amber");
    } else if (result >= amberGreenThreshold && result <= greenHighestScore) {
      this.greenResults.push("Green");
    } else if (result < 0 || result > 100) {
      this.invalidResults++;
    }
  }
}

module.exports = SchoolReport;
