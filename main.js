// async function getDivision(a, b){
//     if(b!=0) return (a/b);
//     return new Error('Math error');
// }

const { rejects } = require("assert")

// async function f(){
//     try{
//         let result = await getDivision(0, 5);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }
// f();

const promise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b != 0){
                resolve(a/b);
            }else{
                reject(new Error('Loi'));
            }
        }, 2000);
    })
}

promise(2, 5).then(value => { console.log(value)}).catch(error => { console.log(error)});