function urLify(string) {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(" ")
    .join("-");
}

console.log(urLify("My blog name!"));
console.log(urLify("Anna's blog"));
