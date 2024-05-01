{
    //spread operator;
    const bros1: string[] = ['saidur', 'romjan', 'rashed'];
const bros2: string[] = ['aziz', 'nur', 'arif'];
bros1.push(...bros2);

const mentor1 = {
    typeScript: 'Mesba',
    redux: 'Mir Vai',
    dbms:"Mizan",    
}
const mentor2 = {
    prisma: 'Firoz',
    nextJs: 'Tonmoy',
    cloud: 'Nahid'
    }
const mentorList={
    ...mentor1,
    ...mentor2
}

 //rest operator;
    const greatFriend = (friend1: string, friend2: string ,friend3:string) => {
                console.log(`Hi ${friend1} ${friend2} ${friend3}`);
            }
    greatFriend('abdullah', 'babul','jamil')
    const greatFriend2 = (...friends:string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend:string) => { console.log(friend);        
            
        });
            }
    greatFriend2('abdullah', 'babul','jamil')
}