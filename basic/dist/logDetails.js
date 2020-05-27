"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title and " + item + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user + ".");
}
logDetails(123, "test");
logDetails("123", "test");
logInfo(123, "Leandro");
logInfo("123", "Leandro");
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Linux");
