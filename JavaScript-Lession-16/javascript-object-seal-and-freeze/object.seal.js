// ? Today We learn javascript object.seal() ---------------------------------------------------->

// ? let's try to javascript object.seal() ------------------------------------------------------>

const user = {
    name: 'Rakibul',
    age: 18
};

Object.seal(user);

user.name = 'Rahman'; // Allowed (modifying existing property);
user.city = 'Dhaka'; // Not allowed (cannot add new properties);

delete user.age; // Not allowed (cannot delete properties);

console.log(user);

// ! note:
/**
 * 
 * object.seal();
 * 
 * Prevents adding or deleting properties.
 * Allows modifying existing properties.
 * 
*/

// ? Use Object.seal() when you want to allow modifications but prevent structural changes (adding/removing properties).