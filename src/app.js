/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];
  let listOfDomains = [];

  for (let dom of domains) {
    // listOfDomains.push(`the "${dom}" domains:`);
    console.log(`the "${dom}" domains:`);
    for (let pro of pronouns) {
      for (let adj of adjectives) {
        for (let noun of nouns) {
          // listOfDomains.push(`  ==>    ${pro}${adj}${noun}${dom}`);
          console.log(`  ==>    ${pro}${adj}${noun}${dom}`);
        }
      }
    }
  }
  // for (let i of listOfDomains) {
  //   console.log(i);
  // }
  console.log("Hello Rigo from the console!");
};
