/*
Calculator Application
2022/01/13 R0.0.1 CREATED BY CDR
*/

(function main() {
  function Calculator() {
    function DisplayLCD() {
      this.printValue = function (inValue) {
        let PrintLCD = document.querySelector("#printLCD");
        PrintLCD.value += inValue;
      };
    }
    let MyLCD = new DisplayLCD();

    function KboardCal() {
      this.mouseClick = function () {
        const clickInfo = document.querySelectorAll(".keyPad>div");
        for (let i = 0; i < clickInfo.length; i++) {
          clickInfo[i].addEventListener("click", function (e) {
            const keyValue = ["C", 7, 8, 9, "/", "", 4, 5, 6, "*", "", 1, 2, 3, "-", "", 0, ".", "=", "+"];
            switch (keyValue[i]) {
              case "C":
                document.querySelector("#printLCD").value = "";
                break;
              case "=":
                let resultInput = document.querySelector("#printLCD");
                resultInput.value += "=" + eval(resultInput.value);
                break;
              default:
                MyLCD.printValue(keyValue[i]);
            }
          });
        }
      };
    }

    let MyKBD = new KboardCal();
    MyKBD.mouseClick();
  }
  let myCal = new Calculator();
})();
