{
    //Union Types
    
    // type FrontendDeveloper = 'fakiBazz' | 'junior';
    // type BackedDeveloper = 'junior' & 'expert';

    // type FullStackDeveloper = FrontendDeveloper | BackedDeveloper;
    // const developer: FrontendDeveloper = 'fakiBazz'
    // console.log(developer);
    

    type User = {
        name: string;
        age: number;
        gender: 'male' | 'female';
        bloodGroup: "O+" | "A+" | "B+";
    }

    const user: User = {
        name: 'abdullah',
        age: 23,
        gender: "male",
        bloodGroup: 'A+'
    }

     //interSection Types
    type FrontendDeveloper = {
        skills: string[];
        profession1: 'developer';
        salary: number
    }
    type BackendDeveloper = {
        skills: string[];
        profession2: 'Designer';
        salary: number
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    
    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', "CSS", "JavaScript", "REACT"],
        profession1: "developer",
        profession2:"Designer",
        salary: 38748,
    }
    console.log(fullStackDeveloper);
    

}