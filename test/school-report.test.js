const SchoolReport = require("../src/school-report");

describe("SchoolReport", () => {
  describe("createReport", () => {
    it("counts one red test score", () => {
      let report = new SchoolReport("0");
      expect(report.createReport()).toEqual("Red: 1");
    });

    it("counts one amber test score", () => {
      let report = new SchoolReport("50");
      expect(report.createReport()).toEqual("Amber: 1");
    });

    it("counts one green test score", () => {
      let report = new SchoolReport("75");
      expect(report.createReport()).toEqual("Green: 1");
    });

    it("counts two same colour test scores", () => {
      let redReport = new SchoolReport("0,10");
      expect(redReport.createReport()).toEqual("Red: 2");

      let amberReport = new SchoolReport("50,74");
      expect(amberReport.createReport()).toEqual("Amber: 2");

      let greenReport = new SchoolReport("75,100");
      expect(greenReport.createReport()).toEqual("Green: 2");
    });
  });
});
