"use strict";
/**
 * Partials also works like Pick but used to create a new type by making all properties of an existing type optional.
 */
function showPartials(user) {
    console.log(user === null || user === void 0 ? void 0 : user.age, user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.name);
}
showPartials({ email: '@gmail.com', });
