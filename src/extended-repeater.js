const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options = {
  separator: '+',
  additionSeparator: '|'
}) {
  let lilStr = '';
  let additionPart = '';
  let additionAll = '';
  let strAll = [];
  let additionPartArr = [];
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;
  if (options.separator === undefined) {
    separator = '+';
  }
  if (options.additionSeparator === undefined) {
    additionSeparator = '|';
  }
  if (options.addition !== undefined){
    additionPart = String(options.addition);
  } 
  if (options.additionRepeatTimes >= 1){
    //additionPart = additionPart + additionSeparator;
    for(let i = 0; i < options.additionRepeatTimes; i++){
      additionPartArr.push(additionPart)
    }
  }
   
  if (options.additionRepeatTimes !== undefined || options.additionRepeatTimes > 1){
    additionAll = additionPartArr.join(additionSeparator);//additionPart.repeat(options.additionRepeatTimes);
  } else {
    additionAll = additionPart;
  }

  lilStr = str + additionAll;  
  if(options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strAll.push(lilStr);
    }
    return strAll.join(separator);
  }  
  return lilStr;  
}
module.exports = {
  repeater
};
