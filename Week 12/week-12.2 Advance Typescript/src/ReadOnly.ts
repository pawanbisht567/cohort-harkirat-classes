/**
 * Whenever we want to create our object values as ReadOnly properties
 */

interface Config {
    endpoint: string;   
    apiKey: string;
}

//Another way to write the Readonly interface
interface Config1 {
    readonly endpoint: string;  
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
};// Attempting to modify the object will result in a TypeScript error// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property

// config.apiKey = "wdwadaw"   // Can't assign new value to ReadOnly Type