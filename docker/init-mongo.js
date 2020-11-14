// eslint-disable-next-line no-undef
db.createUser(
  {
    user: 'admin',
    pwd: 'Cpp7j483012',
    roles: [
      {
        role: 'readWrite',
        db: 'isi'
      }
    ]
  }
)
