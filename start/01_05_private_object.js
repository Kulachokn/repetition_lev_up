const username = Symbol("username");
const password = Symbol("password");

const User = {
  [username]: username,
  [password]: password,
  age: 111,
};

console.log(User.username);
console.log(User.password);
