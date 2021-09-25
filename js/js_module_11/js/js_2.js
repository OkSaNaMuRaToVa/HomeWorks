const users = [
    { name: 'kate', active: true },
    { name: 'bob', active: false },
    { name: 'alex', active: true },
    { name: 'mary', active: false },
  ];
  
  const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  
  
 
  toggleUserState(users, 'kate').then(logger);
  toggleUserState(users, 'mary').then(logger);