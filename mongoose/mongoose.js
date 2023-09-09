const mongoose = require("mongoose");

//connect to mongoose

mongoose.connect("mongodb+srv://mongo:Sweety@mongodb-demo.j1yshn9.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("db connnected")).catch((err)=>console.log(err.message))


//schema
//name
//city
//course
const studentSchema=new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  isMarried: Boolean,
  age:Number,
});
//model
const  Student = mongoose.model("Student",studentSchema);

/*create student

Student.create({
  name:"anjali",
  city:"canada",
  courses:["Twi","ruygi","rgu"],
  isMarried:true,
  age:20,
}).then(student =>console.log(student)).catch(err=>console.log(err));

*/
/*Student.create({
    name:"anjali",
    city:"USA",
    courses:["Twi"],
    isMarried:false,
    age:30,
}).then(student =>console.log(student)).catch(err=>console.log(err));

*/
/*find all students
Student.find().then((students) =>console.log(students)).catch(err=>console.log(err))
*/
//find all students whose age === 20

//Student.find({age:20}).then(students=>console.log(students)).catch(err=>console.log(err));


// find single record

//Student.findById("64fb35e37ce22a82f1135632").then(student => console.log(student)).catch(err=>console.log(err));

//find single record

//Student.findOne({name :"anjali"}).then(student => console.log(student)).catch(err=>console.log(err));


//find update record

Student.findByIdAndUpdate("64fb35e37ce22a82f1135632",{
  age:50
},
{
  new:true,
}
).then(student => console.log(student)).catch(err=>console.log(err));
