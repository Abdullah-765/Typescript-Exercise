"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = ["Ronaldo", "Babar Azam", "Keanu Reeves", "Khabib"];
exports.guestList = guestList;
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
//Exercise 15
console.log("".concat(guestList[0], " wont be able to make it to dinner maybe next time"));
var newGuest = "Leanardo Da vinci";
guestList[0] = newGuest;
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
//Exercise 16
console.log("Great News I just found a bigger table so i can invite more peroples");
guestList.unshift("Ian Bishop");
guestList.splice(3, 0, "Sir Zia Khan");
guestList.push("Virat Kohli");
guestList.forEach((function (Element) {
    return console.log("Hello! ".concat(Element, " how are you? I would like to invite you on dinner, looking forward to your response"));
}));
