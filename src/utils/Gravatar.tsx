import md5 from 'md5';

//TODO viendo forma de poner un avatar de Gravatar
const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/'; //! debería ponerlo en una global
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;