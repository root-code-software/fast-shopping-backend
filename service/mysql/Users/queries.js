module.exports = {
  createUser: ({ address, name, email, phone }, escFunc = (data) => data) => `
    INSERT INTO users (address, name, email, phone)
    VALUES ('${escFunc(address)}', '${escFunc(name)}', '${escFunc(
    email
  )}', '${escFunc(phone)}');
  `,
  deleteUser: ({ idUser }, escFunc = (data) => data) => `
    DELETE FROM users
    WHERE id = '${escFunc(idUser)}';
  `,
  // TODO: Get info from tickets?
  getUser: ({ key, value }, escFunc = (data) => data) => `
    SELECT *
    FROM users
    WHERE ${key} = '${escFunc(value)}';
  `,
  isUser: ({ key, value }) => `
    SELECT EXISTS(SELECT 1 FROM users WHERE ${key} = '${value}' LIMIT 1);
  `,
  updateUser: (
    { idUser, address, name, email, phone },
    escFunc = (data) => data
  ) => `
    UPDATE users
    SET
      ${address ? `address = '${escFunc(address)}',` : ''}
      ${name ? `name = '${name}',` : ''}
      ${email ? `email = '${email}',` : ''}
      ${phone ? `phone = '${phone}',` : ''}
    WHERE id = '${idUser}';
  `
}
