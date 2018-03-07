import {db, bcrypt} from './db'

const encryptedPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
};

const create = (user) => {
  return db.one(`
    INSERT INTO
      users (full_name, email, password)
    VALUES
      ($1, $2, $3)
  `, [user.full_name, user.email, user.password])
};

const signUp = (user) => {
  return encryptedPassword(user.password).then((hash) => {
    user.password = hash
    return create(user);
  }).catch(error => {
    console.log('Error occurred while executing user.encryptedPassword', error);
  });
};

module.exports = {
  signUp
};
