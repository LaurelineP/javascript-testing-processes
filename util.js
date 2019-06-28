const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};


exports.checkAndGenerate = ( name, age ) => {
  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return false;
  }
  return generateText(name, age)

}

/**
 * Adjusting our code led us to use,
 * within functions such as "checkAndGenerate",
 * the function previously exported
 * ( generateText, validateInput )
 * But in order to use them in our integration test
 * we neede to transform them as regular const we
 * then export here ( export in order to be tested )
*/
exports.generateText = generateText;
exports.validateInput = validateInput;