/*
Calculator Application
2022/01/13 R0.0.1 CREATED BY CDR
*/

(function main() {
  function Calculator() {
    function DisplayLCD() {
      this.printValue = function (inValue) {
        let PrintLCD = document.querySelector("#printLCD");
        PrintLCD.innerHTML = inValue;
      };
    }
    let MyLCD = new DisplayLCD();

    function KboardCal() {
      this.mouseClick = function () {
        const clickInfo = document.querySelectorAll(".keyPad>div");
        // for문을 while문으로 변경
      };
    }

    let MyKBD = new KboardCal();
    MyKBD.mouseClick();
  }
  let myCal = new Calculator();
})();
