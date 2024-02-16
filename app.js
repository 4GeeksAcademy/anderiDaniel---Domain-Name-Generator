const domainNameGenerator = () => {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];

  for (dom of domains) {
    console.log(`the "${dom}" domains:`);
    for (pro of pronouns) {
      for (adj of adjectives) {
        for (noun of nouns) {
            console.log(`  ==>    ${pro}${adj}${noun}${dom}`)
        }
      }
    }
  }
};
domainNameGenerator();
