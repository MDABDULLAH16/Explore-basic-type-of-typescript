{
    //1-12 Never,Unknown And Nullable Type


    // Nullable Type

    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching');
            
        } else {
            console.log('not working');
            
        }
    }
    searchName("Parsian");

    // unknown types

    const getSpeedPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const converted = (value * 100) / 3600;
            console.log(converted);           
            
        }
       else if (typeof value === 'string') {
            const [result,unit] = value.split(' ')
            const converted = (parseFloat(result) * 100) / 3600;
            console.log({converted});
            
        }
        else {
            console.log('wrong input');
            
        }
    }
    getSpeedPerSecond(null)
    //never types
    
    const throwError = (mgs: string):never => {
        throw new Error(mgs)
    }
    // throwError('muskil se error handling kar raha he')

}