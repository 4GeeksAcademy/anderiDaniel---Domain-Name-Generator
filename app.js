const domainNameGenerator = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let domains = [".com", ".net", ".us", ".io", ".ar", ".ve"];
    for(x in domains){
        console.log(`the "${domains[x]}" domains:`)
        for (i in pronoun) {
        for (j in adj) {
            for (k in noun) {
                console.log("  ==>    "+ pronoun[i] + adj[j] + noun[k] + domains[x]);
            }
        }
    }
  }
};
  domainNameGenerator();