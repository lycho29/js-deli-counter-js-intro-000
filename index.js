var katzDeliLine = [];

function takeANumber (katzDeliLine, name)  {
  katzDeliLine.push(name);
  let newLine = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
  return newLine;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
  let theLineNow = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(`${i + 1}. ${katzDeliLine[i]}`);
  } 
  theLineNow = theLineNow.join(", " + "");
  return `The line is currently: ` + theLineNow;
}