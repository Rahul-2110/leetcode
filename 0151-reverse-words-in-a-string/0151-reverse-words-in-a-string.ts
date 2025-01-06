function reverseWords(s: string): string {
    let reverseWords = ''
    let word = ''
    for(let i=0; i<s.length; i++){
        if(s[i]==' ' && word.length){
            let space = reverseWords.length ? ' ' : ''
            reverseWords = word + space + reverseWords;
            word = ''
        }else if(s[i]!=' '){
            word+=s[i]
        }
    }
    if(word.length){
        let space = reverseWords.length ? ' ' : ''
        reverseWords = word + space + reverseWords;
    }
    return reverseWords
};