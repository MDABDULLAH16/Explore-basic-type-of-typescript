{
    //TYpe Assertion : tumi ki amar cheye besi bujho?

    let anything: any;

    anything = 'NExt Level development';
  
     // what ever after (.);
    (anything as string).substring


    const kgToGm = (value: string | number): string|number|undefined => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 100;
            return converted;
        }
        if (typeof value === 'number') {
            return value * 100;         
            
        }
    }
    const result = kgToGm('500') as string
    // console.log({result});

    type CustomError = {
        massage: string;
    }
    try {
        
    } catch (error) {
        console.log(( error as CustomError).massage);
        
        
    }
    


}