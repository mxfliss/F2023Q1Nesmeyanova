const array=[1,2,3,6,9,12]
const otvet=[]
const div = 2
for(i = 0; i < array.length; i++){
    if(array[i] % div === 0)
    otvet.push(array[i])
}
if(otvet.length === 0)
console.log(`Нет ответа`)
else
console.log(`Данные числа кратны ${div}: ${otvet}`)

