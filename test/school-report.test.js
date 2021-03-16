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
  });
});
