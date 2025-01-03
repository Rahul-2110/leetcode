function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if(!n){
        return true
    }
    for(let i=0; i<flowerbed.length; i++){
        if(!flowerbed[i]){
            if(!flowerbed[i-1] && !flowerbed[i+1]){
                flowerbed[i] = 1
                n--
                if(!n){
                    return true
                }
            }
        }
       
    }
    
    return false
    
};