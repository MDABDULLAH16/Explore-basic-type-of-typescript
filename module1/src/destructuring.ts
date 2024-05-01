{   
    
    const user = {
        name: {
        fistName: 'Mezba',
        middleName: 'Abedin',
        lastName: 'Parsian',
   },
        profession: {
            company: 'Programming Hero',
            salary:100000,     
        },

        country: "Bangladesh"
}
    const { country, name: { fistName: aliasName },
         profession: { salary }
    } = user;


    //array Destructuring

    const myFriends = ['salam', 'rofiq', 'sofiq,', 'jobbar', 'borkot']
    
    // const [a, b, mama] = myFriends;
    // const [, , mama] = myFriends;
    const [, , mama,...rest] = myFriends;


}