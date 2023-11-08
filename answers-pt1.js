//1. 
db.people.find()
//2. 
db.people.find().count()
//3. 
db.people.find({ state: "Arizona" })
//4.
db.people.find({ state: "Arizona", gender: 'Male' })

// // 4
// db.people.find({ state: "Arizona", gender: "Male" });
// // or
// db.people.find({ $and: [{ state: "Arizona" }, { gender: "Male" }] });
//5. -- same property, or, and its array of obj
db.people.find({
    $or: [
      { state: "Arizona" },
      { state: "New Mexico" }
    ]
  })

  db.people.find({
    state: { $in: ["Arizona", "New Mexico"] }
  })

//6.
db.people.find({ age: {$lt: 40}})
// to check: db.people.find({ age: {$lt: 40}}). count()

//7. best to use $and

// db.people.find({
//     state: "Florida",
//     gender: "Female",
//     age: { $gte: 40, $lte: 45 }
//   })

  db.people.find({$and: [{state: 'Florida'},{gender: 'Female'},{age: {$lte: 45, $gte: 40}}]})

//8. matching beginning -- ^
db.people.find({ first_name: /^H/ })

//or
// db.people.find({first_name: {$gte: "H", $lte: "I"}})

//9. sort method; first name asc -- dont get
db.people.find({ state: "Michigan" }).sort({ first_name: 1 })

//10.
db.people.find({
    $or: [
      { state: "Virginia" },
      { first_name: "Virginia" }
    ]
  })

//11. using projection as second argument (query and then projection, how we are seeing it and what we want to see)
db.people.find(
    { age: { $lt: 30 } },
    { first_name: true, last_name: true}
  )

//12. use false/0 to exclude
db.people.find(
    { state: "Montana" },
    { age: false }
  )

//13.

db.people.find(
    { email: /.edu$/ },
    { _id: false, email: true }
  )

//14. check property of nested array/ embedded or nested doc
db.people.find({"children.age": {$lt: 4}})

  //15. The $size operator matches any array with the number of elements specified by the argument.
  db.people.find({ "children": { $size: 0 } })

  //children--array size-0
  
//   select * from dbo.People as P
//   join dbo.Children as C
//   on P.Id == C.PeopleId
//   where C.Id is null

  //16.
  db.people.find({ "children": { $gt: [] } })

  //children - greater than - empty array