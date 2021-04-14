console.log('welcome to Node.js ! ')

//----core modules------------------

const fs = require('fs')

fs.readFile('text' , (err,data)=>{

if (err) {

    console.log(err)
}

else {

console.log(data.toString())

}

})


const http = require ('http')

http.createServer ((req,res) => {


res.write('hello world !!');
res.end();


}).listen(1111)

console.log('the server is running at port 1111')


const math = require ('./math')

console.log('the sum is aqual to ',math.somme(4,5))
console.log('the soutraction is aqual to ',math.moins(4,5))
console.log('the product is aqual to ',math.multiply(4,5))


const uuid = require ('uuid')


const persons = [

{ id : uuid.v4()  ,
  name:"Mohamed"  ,
 age :30

},

{id :uuid.v4()  ,
    name:"Ali"  ,
   age : 45


},

{id :uuid.v4()  ,
    name:"Mostfa"  ,
   age : 35



}]

console.log(persons)


console.log(__dirname)
console.log(__filename)