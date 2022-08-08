escribe("Introduction to Mocha Tests - READ ME FIRST", function () {
    // Mocha 테스트는 그저 다음 기능을 하는 도구입니다!
    // - 함수를 실행할 때 오류가 발생하면, 실패합니다.
    // - 오류가 발생하지 않으면, 실패하지 않습니다.
    // mocha에 대해 더 알고 싶다면 다음을 참고하세요. mochajs.org
  
    // 먼저 아래의 테스트를 수정해 테스트가 정상적으로 작동하도록 해주세요.
    // 그리고 Diner's club과 American Express 테스트로 넘어가주세요
  
    it("오류가 발생하면 테스트가 실패합니다.", function () {
      // throw new Error("저를 지워주세요!");
    });
  
    it("오류가 발생하지 않으므로, 실패하지 않습니다.", function () {
      // 이 테스트는 실제로 아무것도 테스트하지 않습니다. 그러므로 그냥 여기는 통과하게 됩니다.
      let even = function (num) {
        return num % 2 === 0;
      };
      return even(10) === true;
    });
  
    // 우리는 테스트에서 예상 동작과 실제 동작을 비교하기를 원할 것입니다.
    // 예상 동작이 실제 동작과 다르다면, 테스트는 실패해야 합니다.
    it("예상 동작이 실제 동작과 일치하지 않을 때 오류가 발생합니다.", function () {
      let even = function (num) {
        return num % 2 === 0; // 체크하려는 함수에 뭔가 문제가 있군요!
      };
  
      if (even(10) !== true) {
        throw new Error("10은 짝수여야 합니다!");
      }
    });
  });