const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId} = mongodb
const url = 'mongodb://localhost:27017'
const dbName = 'task-manager'
const collectionName = 'tasks'

MongoClient.connect(url, {useNewUrlParser: true},(err, client)=>{
  if(err){
    return console.log('Error Occured')
  }
  console.log('DB connected')
  const db = client.db(dbName);
  // db.collection('users').insertOne({"name":"Ramesh","City":"Sanford"})
  // db.collection(collectionName).insertOne({name:"Deepesh Karan",age:34})
  // const val = db.collection('users').find({name:'Ramesh'})
  // db.collection('users').insertMany([{name:'Rajesh',age:22},{name: 'Mohan Lal',age:40 }],(err, result)=>{
  //   if(err){
  //     return console.log('Error inserting Many data')
  //   }
  //   console.log(result.ops)
  // })

  //Find one recored using findOne()
  // db.collection('users').findOne({_id: new ObjectId ("5cb244d8d0524f0481dd46bf")},(err,result)=>{
  //   if(err){
  //     return console.log('Error occured during reading one element')
  //   }
  //   console.log(result)
  // })
//Find By find() method
  // db.collection('users').find({}).toArray((err, data)=>{
  //   if(err){
  //     return console.log('Error occured during data fetch',err)
  //   }
  //   console.log(data)
  // })

  // db.collection(collectionName).insertOne({description:'Final App', completed:false, days:12},(err, res)=>{
  //   if(err){
  //     return console.log('Error occured during insertion')
  //   }
  //   console.log(res.ops)
  // })

  // db.collection(collectionName).insertMany([{description:'Final App', completed:false, days:12},{description:'AWS', completed:true, days:15}],(err,res)=>{
  //   if(err){
  //     return console.log('Error during insertion: '+err)
  //   }
  //   console.log(res.ops)
  // })

  //Find among all tasks
    // var allTasks = db.collection(collectionName).find({completed:true})
    // allTasks.toArray((err,res)=>{
    //   if(err){
    //     return console.log('Error occured during conversion')
    //   }
    //   console.log(res)
    // })

    //Updating things using promise

    const updatePromis = db.collection(collectionName).updateOne({completed:false},{$set: {
      days:11
    }})
    updatePromis.then((result)=>{
      console.log('DB updated: '+result)
    }).catch((err)=>{
      console.log('Error: '+err)
    })

  client.close()
})
