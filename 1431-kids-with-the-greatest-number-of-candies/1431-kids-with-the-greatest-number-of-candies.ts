function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    
    let greatest = 0
    const addExtra = candies.map((candie, i)=>{
        if(candie > greatest){
            greatest = candie
        }
        return candie + extraCandies;
    });

    return addExtra.map((candie)=>{
        if(candie >= greatest){
            return true
        }
        return false
    })

};