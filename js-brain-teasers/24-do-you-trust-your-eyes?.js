const str1 = "Château";
const str2 = "Château";

console.log(str1 === str2);

const string1 = "Château";
const string2 = "Château";

const normalizedString1 = string1.normalize("NFC");
const normalizedString2 = string2.normalize("NFC");

console.log(normalizedString1 === normalizedString2);
