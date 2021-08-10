console.log(Account.prototype.getInfo);

const mark = new Account({
  login: 'Markkkkk',
  email: 'mark_2@gmail.com',
});

mark.getInfo(); 

const mary = new Account({
  login: 'Mary',
  email: 'mary2537@mail.com',
});

mary.getInfo();