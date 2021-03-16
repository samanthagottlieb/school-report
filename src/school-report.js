class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    let resultsNum = parseInt(this.results);
    return `${this.determineColour(resultsNum)}: 1`;
  }

  determineColour(result) {
    if (result <= 0 && result < 50) {
      return "Red";
    } else if (result >= 50 && result < 75) {
      return "Amber";
    } else if (result >= 75 && result <= 100) {
      return "Green";
    }
  }
}

module.exports = SchoolReport;
