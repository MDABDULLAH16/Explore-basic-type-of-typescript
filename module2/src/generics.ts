{
    //2-3: Introduction To Generics

type GenericsArray<T>=Array<T>

    // const mentor1: string[] = ['Mr.X', 'Mr.Y', 'Mr.Z'];
    // console.log(mentor1);  
        const mentor2: GenericsArray<string> = ['Mr.X', 'Mr.Y', 'Mr.Z'];
    console.log(mentor2);


// const age: number[] = [23, 532, 54, 23]     
    const age: GenericsArray<number> = [23, 532, 54, 23]     

    // const boolArray : boolean[] = [true,false,true]
    const boolArray : GenericsArray<boolean>= [true,false,true]


    const user: GenericsArray<{ name: string, age: number }> = [
        {
            name: 'Mezba',
            age: 100,
        },
        {
            name: 'Jhanker Mahbub',
            age: 23,
        },
    ];

    type GenericsTuple<X,Y> = [X,Y]

    const manush: GenericsTuple<string, string> = ['Mr.X', "Mr.Y"];

    const userWithNumber: GenericsTuple<string, { phoneNum: number }> = ['ABdullah', { phoneNum: 29234343434 }]
    console.log(userWithNumber);
    
}
