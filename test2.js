const input = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
  ];
  const amount = 3;
  
  const apples = (input, amount) => {
    const mod = parseInt(input?.length % amount);
  
    let ouput = {},
      boxForAmount = 1,
      friend = 1,
      array = [],
      index,
      numberOfApples = 1;
  
    for (index in input) {
      if (boxForAmount - 1 === amount) {
        ouput[`friend-${friend}`] = [array];
        array = [];
        boxForAmount = 1;
        friend++;
      }
      numberOfApples++;
      array.push(parseInt(index) + 1);
      boxForAmount++;
    }
  
    array = [];
  
    if (mod > 0) {
      const actualPosition = input.length - mod;
  
      for (let index = actualPosition; index < input.length; index++) {
        array.push(input[index]);
      }
  
      ouput[`friend-${friend}`] = [array];
    }
  
    return ouput;
  };
  
  console.log(apples(input, amount));
  