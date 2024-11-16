import { getClient } from './Utility';

async function insertIntoUsersTable() {
    let client = getClient();
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Pawan169', 'pawan@example.com', 'user1_password');
    `)
    console.log(result);
    return;
}

insertIntoUsersTable();