{
 //ternary operator | Optional Chaining & Nullish Coalescing Operator

    //ternary operator
    const age: number = 15;
    if (age >= 18) {
        // console.log('he is adult person'); 
                
    }
    else {
        // console.log('Nake tip dile Sada Pani pore');
        
    }

    const isMarried = age >= 18 ? 'he is married' : 'dudher baccha'
    // console.log({isMarried});
    
    // Nullish Coalescing Operator
    //null || undefined hole default akta value set korar jonno ?? use kora hoy
    
    const isAuthentication = null;

    const result1 = isAuthentication ?? 'Guest';
    const result2 = isAuthentication ? isAuthentication: 'Guest'
    console.log({result1},{result2});
    


    // Optional Chaining






}