const defaultDBName = 'quaerere';
const defaultDBUser = 'quaerere';
const defaultDBPassword = 'password';

quaerereDBName = process.env.QUAERERE_DB_NAME;
if (typeof quaerereDBName == 'undefined') {
    quaerereDBName = defaultDBName;
}
quaerereDBUser = process.env.QUAERERE_DB_USER;
if (typeof quaerereDBUser == 'undefined') {
    quaerereDBUser = defaultDBUser;
}
quaerereDBPassword = process.env.QUAERERE_DB_PASSWD;
if (typeof quaerereDBPassword == 'undefined') {
    quaerereDBPassword = defaultDBPassword;
}

options = {};
users = [
    {
        username: quaerereDBUser,
        passwd: quaerereDBPassword,
        active: true
    }
];

console.info("Performing initial setup");
console.debug("db_name: %s, db_user: %s, db_passwd: %s",
    quaerereDBName, quaerereDBUser, quaerereDBPassword);
db._createDatabase(quaerereDBName, options, users);
