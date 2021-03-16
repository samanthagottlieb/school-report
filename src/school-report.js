class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    let resultsNum = parseInt(this.results);
    if (resultsNum <= 0 && resultsNum < 50) {
      return "Red: 1";
    } else if (resultsNum >= 50 && resultsNum < 75) {
      return "Amber: 1";
    } else if (resultsNum >= 75 && resultsNum <= 100) {
      return "Green: 1";
    }
  }
}

module.exports = SchoolReport;
