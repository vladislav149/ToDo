function calc(mathSymbol,a,b) {
  const isValueNoValid = typeof(a) !== 'number' || typeof(b) !== 'number'

  if (isValueNoValid) {
    return 'error';
  }

  switch (mathSymbol) {
    case 'sum':
      return a + b;
    
    case 'sub':
      return a - b;

    case 'mult':
      return a * b;
    
    case 'div':
      return a / b;

    case 'pow':
      return a ** b;

    case 'rem':
      return a % b;
    
    default:
      return 'unknown operation';
  }
}

console.log(calc('sum',12,13));
console.log(calc('sum','text',13));
console.log(calc('',3,13));
console.log(calc('xz',3,13));
console.log(calc('mult','',13));
console.log(calc('mult',2,13));