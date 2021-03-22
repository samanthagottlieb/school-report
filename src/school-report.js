class SchoolReport {
  constructor(results) {
    this.results = results;
    this.greenResults = 0;
    this.amberResults = 0;
    this.redResults = 0;
    this.invalidResults = 0;
    this.reportArray = [];
  }

  createReport() {
    this.parseResults(this.results);
    this.checkInputType();

    this.results.forEach((result) => {
      return this.determineColour(result);
    });

    this.greenReport();
    this.amberReport();
    this.redReport();
    this.invalidReport();

    return this.reportArray.join("\n");
  }

  checkInputType() {
    if (this.results.includes(NaN)) {
      throw "Incorrect input type";
    }
  }

  greenReport() {
    if (this.greenResults > 0) {
      this.reportArray.push(`Green: ${this.greenResults}`);
    }
  }

  amberReport() {
    if (this.amberResults > 0) {
      this.reportArray.push(`Amber: ${this.amberResults}`);
    }
  }

  redReport() {
    if (this.redResults > 0) {
      this.reportArray.push(`Red: ${this.redResults}`);
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
      this.redResults++;
    } else if (result >= redAmberThreshold && result < amberGreenThreshold) {
      this.amberResults++;
    } else if (result >= amberGreenThreshold && result <= greenHighestScore) {
      this.greenResults++;
    } else if (result < 0 || result > 100) {
      this.invalidResults++;
    }
  }
}

module.exports = SchoolReport;
