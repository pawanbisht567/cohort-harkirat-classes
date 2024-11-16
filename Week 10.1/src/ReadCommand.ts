import { getClient } from './Utility';

async function readUsersTable() {
    let client = getClient();
    await client.connect();
    const query = `
        SELECT * FROM USERS WHERE email = $1
    `
    const username = 'pawan@example.com'
    const result = await client.query(query, [username])
    if(result.rows.length > 0) {
        console.log(result.rows)
    }
}

readUsersTable();