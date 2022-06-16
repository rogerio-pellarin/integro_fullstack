const palindrome = (str) => {
    const regularExpression = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(regularExpression, "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
  };
  