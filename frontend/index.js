//这些import是框架自带的，不需要改动
import "./index.css";
import { getDatabase } from "./src/js/database/database.js";
import { setNavImage } from "./src/js/nav/nav.js";
import {
    setMainLeftProfileImage,
    setMainLeftProfileText,
} from "./src/js/main/main-left.js";
import {
    setMiddleHighlineImg,
    setMiddleProfileImg,
    popupTrigger,
    popupClose,
    popupTriggerLogic,
    popupCloseLogic,
    randPickImage,
    setMiddlePostPhoto,
    mainMiddleInput,
    generateMiddlePostList,
} from "./src/js/main/main-middle.js";
 
const { cards, profile, highline, message, request } = await getDatabase();
 
console.log("cards data: ", cards);
console.log("profile data: ", profile);
console.log("highline data: ", highline);
console.log("message data: ", message);
console.log("request data: ", request);
 
// nav
setNavImage(profile);
 
// main-left
setMainLeftProfileImage(profile);
setMainLeftProfileText(profile);
 
// main-middle
setMiddleHighlineImg();
setMiddleProfileImg();
 
// main-middle card logic
popupTrigger.forEach((value) => {
    value.addEventListener("click", popupTriggerLogic);
});
 
popupClose.forEach((value) => {
    value.addEventListener("click", popupCloseLogic);
});
 
randPickImage();
 
setMiddlePostPhoto(profile);
mainMiddleInput(profile);

generateMiddlePostList(cards)