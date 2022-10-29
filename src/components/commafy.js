const commafy = value => {
  if (value === '0') return value;
  let output = "";
  let decimal = "";
  let isNeg = false;
  if (value.toString().includes(".")) {
    output = value.toString().substring(0, value.toString().indexOf("."));
    decimal = value.toString().substring(value.toString().indexOf("."));
  } else {
    output = value;
  }
  if (parseFloat(value) < 0) {
    isNeg = true;
    output = output.toString().substring(1);
  }
    // console.log(`value`, value);
    // console.log(`typeof value:`, typeof value);
    // console.log(`parsFloat(value)`, parseFloat(value));
    // console.log(`isNeg:`, isNeg);
    // console.log(`output:`, output);
    // console.log(`decimal`, decimal);

  return isNeg
    ? '−' + parseFloat(output).toLocaleString() + decimal
    : parseFloat(output).toLocaleString() + decimal;
};

export default commafy;