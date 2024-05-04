{
    //2-4: Generic With Interface

    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear:number,
        }
        smartWatch: T, 
        bike:X,
            
    }

    type smartWatch = 
        {
          brand: string,
          model: string,
          sleepTrack: boolean,
          walking:boolean,
        }
    type bike = {
        brand: string,
        model:string,
    }
      const poorDeveloper: Developer<smartWatch,bike> = {
            name: 'Persian',
            computer: {
                brand: 'Hp',
                model:'23-ktm',
                releaseYear:2019
            },
            smartWatch: {
                brand: 'Apple',
                model: 'something',
                sleepTrack: true,
                walking:true,   
          },
          bike: {
              brand: 'Yamaha',
              model:'ktm'
            }
        
 }




    

    // 
}