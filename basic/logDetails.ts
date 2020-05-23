// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title and ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

logDetails(123, "test");
logDetails("123", "test");

logInfo(123, "Leandro");
logInfo("123", "Leandro");

type Platform = "Windows" | "Linux" | "Mac Os";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Linux");
