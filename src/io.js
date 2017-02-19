//@flow

import P from 'bluebird';
import Readline from 'readline';

export function question(text: string) {
  const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // `readline.question` does not conform to the node `function with callback`
  // style (the callback does not take a first error argument). So we dummy up
  // the function.
  // See comment on: http://bluebirdjs.com/docs/api/promise.promisify.html
  const questionAsync = P.promisify((text, nodeStyleCallback) => {
    readline.question(text, nodeStyleCallback.bind(readline, undefined /* unused err arg */));
  });
  return questionAsync(text).then(answer => {
    readline.close();
    return answer;
  }).catch(err => {
    readline.close();
    return Promise.reject(err);
  });
}

export function println(str: string) {
  console.log(str);
}
