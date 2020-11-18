// eslint-disable-next-line no-undef
db.createUser(
  {
    user: 'admin',
    pwd: 'password123',
    roles: [
      {
        role: 'readWrite',
        db: 'isi'
      }
    ]
  }
)
