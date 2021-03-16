# School report company

## Task
- help teachers find out how students did on tests
- string of comma separated values with test results from schools
- task: build simple report

## Scores
- Green: 75 - 100
- Amber: 50 - 74
- Red: 0 - 49
- Invalid: < 0 or > 100
- Incorrect input type error if e.g. letter input

## Input | Output
Input | Output
"0" | "Red: 1"
"50" | "Amber: 1"
"75" | "Green: 1"
"0,10" | "Red: 2"
"0,50" | "Amber: 1\nRed: 1"
"0,10,50" | "Amber: 1\nRed: 2"
"1,10,45,60,80,100" | "Green: 2\nAmber: 1\nRed: 3"
"-1" | "Invalid: 1"
"a" | Raise error: "Incorrect input type"
