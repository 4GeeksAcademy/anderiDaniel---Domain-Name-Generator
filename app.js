const domainNameGenerator = () => {
    let pronouns = ["the", "our"];
    let adjectives = ["great", "big"];
    let nouns = ["jogger", "racoon"];
    let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];
    for(dom in domains){
        console.log(`the "${domains[dom]}" domains:`)
        for (pro in pronouns) {
        for (adj in adjectives) {
            for (noun in nouns) {
                console.log("  ==>    "+ pronouns[pro] + adjectives[adj] + nouns[noun] + domains[dom]);
            }
        }
    }
  }
};
  domainNameGenerator();