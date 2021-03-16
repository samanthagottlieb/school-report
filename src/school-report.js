class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    if (this.results == "0") {
      return "Red: 1";
    } else if (this.results == "50") {
      return "Amber: 1";
    } else {
      return "Green: 1";
    }
  }
}

module.exports = SchoolReport;
