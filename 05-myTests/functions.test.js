const { add, subtract, divide, reverseString, sortArray, isValidEmail, formatDate, fetchData } = require("./functions");

describe("arithmetic operation", () => {
  test("should add two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("should subtract two numbers", () => {
    expect(subtract(4, 2)).toBe(2);
  });

  test("should divide two numbers", () => {
    expect(() => divide(4, 0)).toThrow("Division by zero");
    expect(divide(4, 2)).toBe(2);
  });
});

describe("moderate stuff", () => {
  test("should reverse a string", () => {
    expect(reverseString("mum")).toBe("mum");
    expect(reverseString("tracy")).toBe("ycart");
  });

  test("should sort array in descending order", () => {
    expect(sortArray([9, 4, 1, 3])).toEqual([1, 3, 4, 9]);
  });

  test("should check if email is valid", () => {
    expect(isValidEmail('tracy@gmail.com')).toBe(true)
  });

//   test("should format the date and throw an error when it is an invalid date", () => {
//     expect(() =>  formatDate(new Date(2, 30, 1997))).toThrow('Invalid Date')
//     // expect(formatDate(new Date(1997, 4, 30))).toBeTruthy()
//   })
});


jest.useFakeTimers();

describe("should do something",  () => {
    const callbackMock = jest.fn();


    beforeEach(() => {
        // Reset the callback mock before each test
        callbackMock.mockReset();
    
        // Use fake timers
        jest.useFakeTimers();
      });
    
      afterEach(() => {
        // Restore the original timers
        jest.useRealTimers();
      });
   
    it('should call the callback after 1 second', () => {
        fetchData(callbackMock);
    
        // Advance the timer by 1 second
        jest.advanceTimersByTime(1000);
    
        // Ensure that the callback was called with the expected argument
        expect(callbackMock).toHaveBeenCalledWith('Data fetched successfully');
      });

      it('should not call the callback before 1 second', () => {
        fetchData(callbackMock);
    
        // Advance the timer by less than 1 second
        jest.advanceTimersByTime(500);
    
        // Ensure that the callback was not called yet
        expect(callbackMock).not.toHaveBeenCalled();
    
        // Advance the timer by the remaining time
        jest.advanceTimersByTime(500);
    
        // Ensure that the callback was called with the expected argument
        expect(callbackMock).toHaveBeenCalledWith('Data fetched successfully');
      });
})
