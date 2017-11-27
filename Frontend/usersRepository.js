const users = [
    { id: 1, username: 'admin', password: 'qwe', email: 'bob@example.com' },
    { id: 2, username: 'user', password: '1234', email: 'joe@example.com' }
];

exports.getUserByNameAndPassword = function(name, password) {
  const user = users.find(user => user.username === name);
  return user.password === password ? user : null;
};

exports.getUserById = function(id) {
    return users.find(user => user.id === id);
};