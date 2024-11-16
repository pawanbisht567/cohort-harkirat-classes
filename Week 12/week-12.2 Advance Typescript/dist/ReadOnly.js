"use strict";
/**
 * Whenever we want to create our object values as ReadOnly properties
 */
const config = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
}; // Attempting to modify the object will result in a TypeScript error// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property
// config.apiKey = "wdwadaw"   // Can't assign new value to ReadOnly Type
