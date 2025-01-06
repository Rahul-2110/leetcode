function reverseWords(s: string): string {
    let reverseWords = ''
    let word = ''
    let space = ''
    for(let i=0; i<s.length; i++){
        if(s[i]==' ' && word.length){
            reverseWords = word + space + reverseWords;
            word = ''
            space = ' '
        }else if(s[i]!=' '){
            word+=s[i]
        }
    }
    if(word.length){
        reverseWords = word + space + reverseWords;
    }
    return reverseWords
};