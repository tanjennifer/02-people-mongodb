//1.
db.people.insertOne({
    first_name: "Billy",
    last_name: "Koppel",
    email: "tuxedocat@hotmail.com",
    gender: "Male",
    age: 60,
    state: "Michigan",
    children: []
  })

  //2. 
  db.people.insertOne({
    first_name: "Gerard",
    last_name: "Butler",
    email: "southpark@hotmail.com",
    gender: "Male",
    age: 40,
    state: "Colorado",
    children: [{name: "Ike", age: 2}, {name: "Kyle", age: 7}]
})

//3.
db.people.updateOne({ first_name: "Clarence" },
    {$set: { state: "South Dakota" }}
  )

//4.
db.people.updateOne(
    { first_name: "Rebecca", last_name: "Hayes" },
    {
      $unset: { email: "" }
    }
  )

  //5. update Missouri bday?
  db.people.updateMany(
    { state: "Missouri" },
    { $inc: { age: 1 } }
  )

  //6.

  db.people.updateOne(
    { "first_name": "Jerry", "last_name": "Baker" },
    {
      $set: {
        first_name: "Jerry",
        last_name: "Baker-Mendez",
        email: "jerry@classic.ly",
        gender: "Male",
        age: 28,
        state: "Vermont",
        children: [
          { name: "Alan", age: 18 },
          { name: "Jenny", age: 3 }
        ]
    }}
  )

  //7.
  db.people.deleteOne({first_name: "Wanda", last_name: "Bowman" })
//   db.people.deleteOne({first_name: "Wanda"})

//8 existence of a field is specified $exists operator
db.people.deleteMany({
    $or: [
      { email: { $exists: false } },
      { email: null }
    ]
  })



//9. slide 174
// db.people.createIndex({ email: 1 })

//10. 
// db.people.createIndex({ "first_name": 1, "last_name": 1 })

//11. submissions
db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("654a979e69c42519ce37aee7")},
{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("654a979e69c42519ce37af15")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("654a979e69c42519ce37af98")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("654a979e69c42519ce37af1e")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("654a979e69c42519ce37aee5") }]
)

//12.
db.submissions.updateOne(
    { title: "The River Bend" },
    { $inc: { "upvotes": 2 } }
  )

//13. --not sure what this is asking--
db.submissions.updateMany(
    { upvotes: { $gte: 10 } },
    { $set: { round2: true } }
  )

//14. --used $push to add baby
db.people.updateOne(
    { first_name: "Helen", last_name: "Clark"},
    {$push: {children: { name: "Melanie", age: 0 }}
}
  )

//15.

//16.


