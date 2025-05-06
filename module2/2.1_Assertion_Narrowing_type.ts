{
    // assertion/narrowing type 
    // type assertion (amra jodi ts r theke better type declare/bujhte pari atai holo type-assertion)
    // like tmi amr theke beshi bujho atai type assertion

    let anything : any;
    anything = 'Next level Web Development';
    anything = 222;
    // we can assign anything to it(but if we can declare it again than it can detect that is type assertion)

    // now we can use this as string and can use method for string.
    (anything as string).
    // console.log(anything);




    // another example
    const kgToGm = (value : string | number): string | number | undefined =>{
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value)*1000;
            return convertedValue;
        }
        if (typeof value === 'number') {
            return value * 1000;
            
        }
    }

    // here we declare string/num/undefined as return type (if we ensure and fixed it now its called type assertion)
    const result1 = kgToGm(1000) as number;  
    // now i know amke ata sure number padhabe karon ami number kei pass korchi so ekhane ami ts theke beshi bujhchi atai type assertion
    
    // karon amra akhn jani tai bollam bhai tmr OR str|num|unf diye korar drkr nai (jeta boli sheta koro)
    const result2 = kgToGm('1000') as string;  
    // then after fixing this it fixed to that type after type assertion instead of that return of str/num/unf



    // NOTE: tobe type assertion(as) use korar shomoy shabdhan thakte hobe karon bhule abar num keo
    // string hishebe as korle she amr tai bissash kore nibe. (if we 100% sure then use this)


    // another example
    type CustomError = {
        message: string
    }
    try {   
    } catch (error) {
        // we can use type assertion here also (akhn amdr obj onujayi atar msg tao string hobe sure)
        console.log((error as CustomError).message);
    }

}