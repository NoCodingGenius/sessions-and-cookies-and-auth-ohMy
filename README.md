# sessions-and-cookies-and-auth-ohMy
A starter repo for a instructional on sessions, cookies, and auth

# SPECS:
- to run commands make sure you have `cd`'d in to the `tutorial` folder
- There are two tracks to choose from:
  - Follow a tutorial with some minor changes
    - The tutorial will walk you through the whole thing but uses sequelize ORM for db build and transactions. Try and review the tutorial but implement it with vanilla postgreSQL schema design and pg-promise instead.
    - if you choose this follow the specs for Track 1.
  - Do from a starter repo:
    - scroll down to Track 2.

## Track 1
  - All coding done in the folder 'tutorial'
  - All the files you will use are created but blank.
    - The `html` files are already done, you only need to write code in `server.js` and `models/user.js`.
      - if you are doing with vanilla pg you may need to create additional files
  - All the dependencies are already in the package.json so you can skip the install step of the tutorial.
  - You will need to create a db called `auth-system`. use the `createdb` command instead of those listed in the tutorial. i.e. $ `createdb auth-system`

  1. $`npm i`
  1. either create schema in vanilla pg or use sequelize per the tutorial
  1. $`npm run start`

### BUG IN TUTORIAL:
- There is a bug in the tutorial. The use of the key instanceMethods with sequelize is gone so you just need to add this line of code in the user.js file and remove the entire instanceMethods object:
```
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password,this.password)  
}
```

### Specs:
- [ ] user can sign up
- [ ] user can log in after signing up
  - [ ] signing in uses cookies to store session information
  - [ ] session expires after 6000 ms.
- [ ] If there is no active session user is redirected to the login page.
- [ ] after user sign's up they are redirected to `dashboard.html`
- [ ] after a signed up user logs in, they are redirected to `dashboard.html`
- [ ] If a user has an active session all routes except for `log out` redirect to `dashboard.html`
- [ ] There is a sticky fixed header with:
  - [ ] A `log out` link that destroys the session.
  - [ ] A `log in` button that only takes you to the `login` page if there is no session active.
  - [ ] a `sign up` link that only takes you to the sign up page if there is no session active.
- [ ] user cannot view `dashboard.html` without an active session.

## Track 2
  - All coding done in the folder `starter`
  - make sure you have `cd`'d in to the folder `starter` then:
    - $`npm i`
    - $`npm run db:create`
    - $`npm run start`

### Specs:
- [ ] user can sign up
- [ ] user can log in after signing up
  - [ ] signing in uses cookies to store session information
  - [ ] session expires after 6000 ms.
- [ ] If there is no active session user is redirected to the login page.
- [ ] after user sign's up they are redirected to `dashboard.ejs`
- [ ] after a signed up user logs in, they are redirected to `dashboard.ejs`
- [ ] If a user has an active session all routes except for `log out` redirect to `dashboard.ejs`
- [ ] There is a sticky fixed header with:
  - [ ] A `log out` link that destroys the session.
  - [ ] A `log in` button that only takes you to the `login` page if there is no session active.
  - [ ] a `sign up` link that only takes you to the sign up page if there is no session active.
- [ ] user cannot view `dashboard.ejs` without an active session.
