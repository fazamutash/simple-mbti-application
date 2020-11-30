const Email = require("../models").Email;

module.exports = {
  create,
  get
};

async function create(email) {
  const account = await Email.findOne({ where: { email } });

  if (account) {
    return account;
  } else {
    const account = new Email({ email });
    await account.save();
    return account;
  }
}

async function get(email) {
  return await Email.findOne({ where: { email } });
}