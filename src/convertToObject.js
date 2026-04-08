'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const arrOfStyles = sourceString
    .split(';')
    .filter((str) => str.includes(':'));

  arrOfStyles.forEach((styleStr) => {
    const [key, value] = styleStr.split(':');
    const styleKey = key.trim();
    const styleValue = value.trim();

    stylesObject[styleKey] = styleValue;
  });

  return stylesObject;
}

module.exports = convertToObject;
