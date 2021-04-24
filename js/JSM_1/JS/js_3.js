
const noPass = 'Доступ заборонений, невірний пароль!';
const cancel = 'Скасовано користувачем!';
const welcome = 'Ласкаво просимо!';
const ADMIN_PASSWORD = 'jqueryismyjam';
const log = prompt('Введіть пароль');
if ( log === null || log == '' ){
 alert(cancel);
     }
     else {
      const pass = prompt('Введіть пароль');
      if ( pass === null || pass == '' ){
      alert(cancel);
      }
      else if ( pass != password ) {
           alert(noPass);
           }
           else {
           alert(welcome);
           }
     }

