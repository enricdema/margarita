const margarita={
    count : 0,
    petalos: (min,max)=> new Promise((resolve,reject)=>{
        if(min>1 && max<15){
            resolve(Math.floor(Math.random() * (max-min+1) + min))
        }else{
            reject(new Error('numero massa petit o gran'))
        }
    }),
     mqnq: async (num) =>{
        let count=1
        return await new Promise(resolve => {
          const interval = setInterval(() => {
            if (num>count) {
                if(count%2){
                    console.log('me quiere')
                }else{
                    console.log('no me quiere')
                }
                count += 1
            }else {
            clearInterval(interval);
            if(count%2){
                resolve('me quiere')
            }else{
                resolve('no me quiere')
            }        
            }
          }, 1000);
        },reject=>{new Error('fallu al contar')});
      }
}

export default margarita;

/*
    mqnq: async(num)=>{
    const imprimir = await contar;
    count++;
    if(count%2){
        console.log('Me quiere');
        count += 1;
    }else if(!count%2){
        console.log('No me quiere');
        count += 1;
    }
    else clearInterval(margarita.contar);   
    }*/