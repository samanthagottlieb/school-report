const SchoolReport = require("../src/school-report");

describe("SchoolReport", () => {
  describe("createReport", () => {
    it("counts one test score", () => {
      let report = new SchoolReport("0");
      expect(report.createReport()).toEqual("Red: 1");
    });
  });
});
