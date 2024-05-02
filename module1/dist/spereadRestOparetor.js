"use strict";
{
    //spread operator;
    const bros1 = ['saidur', 'romjan', 'rashed'];
    const bros2 = ['aziz', 'nur', 'arif'];
    bros1.push(...bros2);
    const mentor1 = {
        typeScript: 'Mesba',
        redux: 'Mir Vai',
        dbms: "Mizan",
    };
    const mentor2 = {
        prisma: 'Firoz',
        nextJs: 'Tonmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    //rest operator;
    const greatFriend = (friend1, friend2, friend3) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    };
    greatFriend('abdullah', 'babul', 'jamil');
    const greatFriend2 = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => {
            console.log(friend);
        });
    };
    greatFriend2('abdullah', 'babul', 'jamil');
}
