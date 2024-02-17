const domainNameGenerator = () => {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];
  let listOfDomains = [];

  for (dom of domains) {
      listOfDomains.push(`the "${dom}" domains:`);
    for (pro of pronouns) {
      for (adj of adjectives) {
        for (noun of nouns) {
            listOfDomains.push(`  ==>    ${pro}${adj}${noun}${dom}`);
        };
      };
    };
  };
  return listOfDomains;
};

for (i of domainNameGenerator()){
  console.log(i);
}
