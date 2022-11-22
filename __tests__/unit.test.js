
// TODO - Part 2

//testing from unit-test-me.js
const unitTest = require('../code-to-unit-test/unit-test-me.js');

//2 ture and 2 false for each function
// matches valid phone numbers
// function isPhoneNumber(phoneNumber) {
//     const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
//     return phoneRegex.test(phoneNumber);
// }
test( 'if (253)299-1111 is a valid phone number', () => {
    expect(unitTest.isPhoneNumber("(253)299-1111")).toBe(true);
});
test( 'if (999)299-2341 is a valid phone number', () => {
    expect(unitTest.isPhoneNumber("(999)299-2341")).toBe(true);
});
//2 false numbers
test( 'if 243. 1111 is a valid phone number', () => {
    expect(unitTest.isPhoneNumber("243. 1111")).toBe(false);
});
test( 'if (253)abc-1111 is a valid phone number', () => {
    expect(unitTest.isPhoneNumber("(253)abc-1111")).toBe(false);
});
  
// matches valid emails
// function isEmail(email) {
//     const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     return emailRegex.test(email);
// }
test('if jjiang@ucsd.edu is a valid Email', () => {
    expect(unitTest.isEmail("jjiang@ucsd.edu")).toBe(true);
});
test('if jjiang@gmail.com is a valid Email', () => {
    expect(unitTest.isEmail("jjiang@gmail.com")).toBe(true);
});

test('if jjiang^ucsd.edu is a valid Email', () => {
    expect(unitTest.isEmail("jjiang^ucsd.edu")).toBe(false);
});
test('if j.jiang@gmail.com is a valid Email', () => {
    expect(unitTest.isEmail("j.jiang@ucsd.edu")).toBe(false);
});
  
  /**
   * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
   */
//   function isStrongPassword(password) {
//     const pwRegex = /^[a-zA-Z]\w{3,14}$/;
//     return pwRegex.test(password);
//   }
test('if sdfisi43uih is a strong password', () => {
    expect(unitTest.isStrongPassword("sdfisi43uih")).toBe(true);
});
test('if ss123456789 is a strong password', () => {
    expect(unitTest.isStrongPassword("ss123456789")).toBe(true);
});

test('if sdfisi43uih is a strong password', () => {
    expect(unitTest.isStrongPassword("12345678")).toBe(false);
});
test('if s12fdg32fwdweg456 is a strong password', () => {
    expect(unitTest.isStrongPassword("s12fdg32fwdweg456")).toBe(false);
});
  
  // 	This regular expressions matches dates of the form XX / XX / YYYY where 
  // XX can be 1 or 2 digits long and YYYY is always 4 digits long.
//   function isDate(date) {
//     const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
//     return dateRegex.test(date);
//   }
test('if 11/21/2022 is a valid date', () => {
    expect(unitTest.isDate("11/21/2022")).toBe(true);
});
test('if 1/21/2022 is a valid date', () => {
    expect(unitTest.isDate("1/21/2022")).toBe(true);
});

test('if a/7/2022 is a valid date', () => {
    expect(unitTest.isDate("a/7/2022")).toBe(false);
});
test('if 11/21/202 is a valid date', () => {
    expect(unitTest.isDate("11/21/202")).toBe(false);
});
  
  // Matches valid 3 or 6 character hex codes used for HTML or CSS.
//   function isHexColor(color) {
//     const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
//     return colorRegex.test(color);
//   }
test('if #aaa is a valid hex color', () => {
    expect(unitTest.isHexColor("#aaa")).toBe(true);
});
test('if #aaafff is a valid hex color', () => {
    expect(unitTest.isHexColor("#aaafff")).toBe(true);
});

test('if #aa is a valid hex color', () => {
    expect(unitTest.isHexColor("#aa")).toBe(false);
});
test('if #aaagde is a valid hex color', () => {
    expect(unitTest.isHexColor("#aaagde")).toBe(false);
});