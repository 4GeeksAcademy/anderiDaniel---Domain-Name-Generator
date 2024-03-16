window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];

  // El uso del console.log es parte del ejercicio

  for (let dom of domains) {
    console.log(`the "${dom}" domains:`);
    for (let pro of pronouns) {
      for (let adj of adjectives) {
        for (let noun of nouns) {
          console.log(`  ==>    ${pro}${adj}${noun}${dom}`);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
