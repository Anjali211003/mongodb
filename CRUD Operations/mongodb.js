
const { MongoClient } = require( "mongodb" );

const url="mongodb+srv://mongo:Sweety@mongodb-demo.j1yshn9.mongodb.net/?retryWrites=true&w=majority";

const client =  new MongoClient(url)
const dbConnect = async ()=>{
    try{
        //connect to db
    await client.connect();
    console.log("db connected successfull");


    //create new db
    const db = client.db("school");
    //create collection
    const students =db.collection("students");

    /*create document(student)-single
    const student1= await students.insertOne({
        name: "anjali",
        city: "Lucknow",
    });

    create document(student)-multiple
    const student2= await students.insertMany([
    {name:"Sweety" , city:"Kanpur"},
    { name: "anjali"
   , city: "Lucknow"}]);
*/
    

   // find all students
    const allstudents= await students.find().toArray();
 console.log(allstudents);

  /* find a student by name anjali

  const foundtSt =  await students.findOne({
    name:"anjali"
  });
  */
     
      /*find a student by from lucknow
      const foundtSt =  await students.find({
        city:"Lucknow"
      }).toArray();
      console.log(foundtSt);*/


      //update record 
      const updatedStudent = await students.updateOne({name : "anjali"}, {
        $set:{name : "anu", city:"Mirzapur"}, 
      });




// delete 
const deletedStudent = await students.deleteOne({name : "anu"});
      console.log(deletedStudent);
    }
     
    catch (error){
 console.log(error);
    }
};

dbConnect();
