db.createUser(
  {
      user: "admin",
      pwd: "Cpp7j,>Z%",
      roles:[
          {
              role: "readWrite",
              db:   "isi"
          }
      ]
  }
);