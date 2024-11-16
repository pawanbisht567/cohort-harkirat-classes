import { Client } from 'pg';
export function getClient() {
    return new Client({
        connectionString: 'postgresql://postgres:Samsung$1234@localhost/TestFridayDB'
    })
}