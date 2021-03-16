class SchoolReport {
  constructor(results) {
    this.results = results;
  }

  createReport() {
    if (this.results == "0") {
      return "Red: 1";
    } else {
      return "Amber: 1";
    }
  }
}

module.exports = SchoolReport;
