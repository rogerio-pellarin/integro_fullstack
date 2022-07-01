const is_palindrome = (input) => {
  // Remove capital letters and accents
  const clean_text = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Convert to array and remove punctuation and spaces
  const array = clean_text.split("").filter((element) => {
    return (
      element !== " " && element !== "," && element !== ";" && element !== "."
    );
  });

  // Create a new array in reverse order
  const reverse_array = Object.values(array).reverse();

  // Convert to string and check if it's a palindrome
  console.log(array.join("") === reverse_array.join(""));
};

const input =
  "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

is_palindrome(input);
