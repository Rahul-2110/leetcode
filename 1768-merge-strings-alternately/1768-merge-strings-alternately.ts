function mergeAlternately(word1: string, word2: string): string {
    let word1Index = 0
    let word2Index = 0
    let combinedWord = ''
    while(word1Index < word1.length  && word2Index < word2.length){
        combinedWord += word1[word1Index] + word2[word2Index]
        word1Index++
        word2Index++
    }

    if(word1Index < word1.length){
        combinedWord += word1.slice(word1Index)
    }
    else if(word2Index < word2.length){
        combinedWord += word2.slice(word2Index)
    }
    return combinedWord
};