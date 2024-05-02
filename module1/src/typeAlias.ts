{

    //type alias : first decl an object like variable, then use it like type ;

    type User = {
     name: string,
        age: number,
        address: string,
        phoneNo: number,
 }

    const user1: {
        name: string,
        age: number,
        address: string,
        phoneNo: number,
        job?:string
    } = {
        name: 'Abdullah',
        age: 33,
        address: 'jamalpur',
        phoneNo: 170000000,
    }

    const user2: {
        name: string,
        age: number,
        address: string,
        phoneNo: number,
        job?:string
    } = {
         name: 'Rofiq',
        age: 333,
        address: 'dhaka',
        phoneNo: 1700030000,
    }

    const user3: User = {
        name: 'jobbar',
        age: 344,
        address: 'ctg',
        phoneNo: 4444,
    }

    type Name = string;
    type isMarried = boolean;
    type Age = number;
    type company = string;
    const name: Name = 'parsian Bhai'
    const married: isMarried = true;
    const boyos: Age = 45;
    const job: company= 'PH'
    

}