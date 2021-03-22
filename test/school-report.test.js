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

    it("counts test scores of different colours", () => {
      let report = new SchoolReport("0,50");
      expect(report.createReport()).toEqual("Amber: 1\nRed: 1");

      let report2 = new SchoolReport("0,10,50");
      expect(report2.createReport()).toEqual("Amber: 1\nRed: 2");

      let report3 = new SchoolReport("1,10,45,60,80,100");
      expect(report3.createReport()).toEqual("Green: 2\nAmber: 1\nRed: 3");
    });
  });
});
