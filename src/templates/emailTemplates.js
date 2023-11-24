const welcomeEmailTemplate = (user) => {
  return {
    from: '"Administrateur" <admin@example.com>',
    to: user.email,
    subject: "Vérification de votre e-mail",
    text: `Bonjour ${user.firstName},\n\nVoici votre Token de vérification : xxxx\n\n`,
  };
};

module.exports = {
  welcomeEmailTemplate,
};
