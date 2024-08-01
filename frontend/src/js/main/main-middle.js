//ik.imagekit.io/fangweij/highline/highline_1.webp
 
//设置中间帖子的图片（遍历）
export const setMiddleHighlineImg = () => {
    document
        .querySelectorAll(".main-middle-card.popup-trigger > img")
        .forEach(
            (img, index) =>
            (img.src = `//ik.imagekit.io/fangweij/highline/highline_${index + 1
                }.webp`)
        );
};
 
// //ik.imagekit.io/fangweij/profile/profile_${index + 1}.webp
//设置中间人物的图片
export const setMiddleProfileImg = () =>
    document
        .querySelectorAll(".main-middle-card.popup-trigger > .profile-photo > img")
        .forEach(
            (value, index) =>
            (value.src = `//ik.imagekit.io/fangweij/profile/profile_${index + 1
                }.webp`)
        );

 //弹出窗口的触发器和关闭按钮
export const popupTrigger = document.querySelectorAll(".popup-trigger");
export const popupClose = document.querySelectorAll(".popup-close");

 //点击弹出窗口的触发器时，将弹出窗口的下一个兄弟元素（通常是弹出窗口本身）显示为flex布局
export const popupTriggerLogic = function () {
    this.nextElementSibling.style.display = "flex";
};
 //点击关闭按钮时，找到当前元素的最近祖先元素，如果它具有类名"popup"，则隐藏这个弹出窗口
export const popupCloseLogic = function () {
    this.closest(".popup").style.display = "none";
};
 
// 随机函数
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
 
//把上述随机逻辑用到图片中
export function getRandomImages() {
    const images = [
        "//ik.imagekit.io/fangweij/highline/highline_1.webp",
        "//ik.imagekit.io/fangweij/highline/highline_2.webp",
        "//ik.imagekit.io/fangweij/highline/highline_3.webp",
        "//ik.imagekit.io/fangweij/highline/highline_4.webp",
        "//ik.imagekit.io/fangweij/highline/highline_5.webp",
        "//ik.imagekit.io/fangweij/highline/highline_6.webp",
        "//ik.imagekit.io/fangweij/highline/highline_7.webp",
        "//ik.imagekit.io/fangweij/highline/highline_8.webp",
    ];
    const images2 = [
        "//ik.imagekit.io/fangweij/profile/profile_1.webp",
        "//ik.imagekit.io/fangweij/profile/profile_2.webp",
        "//ik.imagekit.io/fangweij/profile/profile_3.webp",
        "//ik.imagekit.io/fangweij/profile/profile_4.webp",
        "//ik.imagekit.io/fangweij/profile/profile_5.webp",
        "//ik.imagekit.io/fangweij/profile/profile_6.webp",
        "//ik.imagekit.io/fangweij/profile/profile_7.webp",
        "//ik.imagekit.io/fangweij/profile/profile_8.webp",
        "//ik.imagekit.io/fangweij/profile/profile_9.webp",
        "//ik.imagekit.io/fangweij/profile/profile_10.webp",
        "//ik.imagekit.io/fangweij/profile/profile_11.webp",
        "//ik.imagekit.io/fangweij/profile/profile_12.webp",
        "//ik.imagekit.io/fangweij/profile/profile_13.webp",
        "//ik.imagekit.io/fangweij/profile/profile_14.webp",
        "//ik.imagekit.io/fangweij/profile/profile_15.webp",
        "//ik.imagekit.io/fangweij/profile/profile_16.webp",
        "//ik.imagekit.io/fangweij/profile/profile_17.webp",
    ];
    const images3 = [
        "//ik.imagekit.io/fangweij/post/post_1.webp",
        "//ik.imagekit.io/fangweij/post/post_2.webp",
        "//ik.imagekit.io/fangweij/post/post_3.webp",
        "//ik.imagekit.io/fangweij/post/post_4.webp",
        "//ik.imagekit.io/fangweij/post/post_5.webp",
        "//ik.imagekit.io/fangweij/post/post_6.webp",
        "//ik.imagekit.io/fangweij/post/post_7.webp",
        "//ik.imagekit.io/fangweij/post/post_8.webp",
        "//ik.imagekit.io/fangweij/post/post_9.webp",
        "//ik.imagekit.io/fangweij/post/post_10.webp",
        "//ik.imagekit.io/fangweij/post/post_11.webp",
    ];
 
    //从各组图片array中分别选择6张、6张、4张图片
    const shuffledImages = shuffleArray(images);
    const selectedImages = shuffledImages.slice(0, 6);
 
    const shuffledImages2 = shuffleArray(images2);
    const selectedImages2 = shuffledImages2.slice(0, 6);
 
    const shuffledImages3 = shuffleArray(images3);
    const selectedImages3 = shuffledImages3.slice(0, 4);
 
    //将选中的图片分别放到对应的位置，让图片的src属性等于选中的图片
    const imageContainers = document.querySelectorAll(".main-middle-card > img");
    imageContainers.forEach((img, index) => {
        img.src = selectedImages[index];
    });
 
    const profileContainer = document.querySelectorAll(
        ".main-middle-card > .profile-photo > img"
    );
    profileContainer.forEach((img, index) => {
        img.src = selectedImages2[index];
    });
    const postContainer = document.querySelectorAll(".info-picture > img");
    postContainer.forEach((img, index) => {
        img.src = selectedImages3[index];
    });
}
 
//每5秒调用一次getRandomImages函数，即每5秒钟随机选择一组图片
export const randPickImage = () => (
    setInterval(() => getRandomImages(), 5000)
)

//发帖子的输入框
export const mainMiddleInput = (profile) =>
(document.querySelector(
    ".main-middle-thought-wrapper>input"
).placeholder = `What is on your mind, ${profile.name}?`);

//设置中间帖子的图片
export const setMiddlePostPhoto = profile => {
    document.querySelector(".main-middle-thought-wrapper > .profile-photo > img").src = profile.img_src;
};
 
//把中间部分的代码放到一个函数中，包括图片、下面的评论、点赞等
const postWrapper = document.querySelector(".main-middle-post-wrapper");
export const generateMiddlePostList = (cards) => {
    //postWrapper的初始状态是空
    postWrapper.innerHTML = "";
    //遍历cards数组，对每个元素创建一个article元素，设置其innerHTML为下面的内容
    cards.forEach(value => {
        const newArticle = document.createElement("article");
        newArticle.innerHTML = `
        <div class="info-profile">
            <div class="profile">
                <div class="profile-photo"><img alt="profile photo" src=${value.profile.src} loading="lazy"/></div>
                <div class="profile-description">
                    <h2>${value.profile.name}</h2>
                    <p>${value.profile.position}, ${value.profile.time}</p>
                </div>
            </div>
            <i class="uil uil-ellipsis-h"></i>
        </div>
        <div class="info-picture"><img width="100%" src=${value.picture.img_src} alt="post image"/></div>
        <div class="info-control">
            <div class="main-control"><i class="uil uil-heart control_heart"></i><i class="uil uil-comment-dots"></i><i class="uil uil-share-alt"></i></div>
            <i class="uil uil-bookmark"></i>
        </div>
        <div class="info-comment">
            <div class="profile-photo-list">
                <img src=${value.comment.img_src_list[0]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                <img src=${value.comment.img_src_list[1]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                <img src=${value.comment.img_src_list[2]} class="profile-photo" alt="profile-photo" loading="lazy"/>
                <span class="like-info">Liked by <strong> ${value.comment.first_people_name} </strong> and <strong> ${value.comment.like_peoples_number}</strong> others</span>
            </div>
            <span class="comment-info">${value.comment.comment_info}</span>
            <span class="view-btn">View all ${value.comment.view_number} comments</span>
        </div>
    `;
 
        setBoarderColor(newArticle.querySelector(".profile-photo"));
        //每个人像的边框颜色为随机颜色
        newArticle
            .querySelectorAll(".profile-photo-list > .profile-photo")
            .forEach((value) => setBoarderColor(value));
        //把新的article元素添加到postWrapper中
        postWrapper.appendChild(newArticle);
 
    })
 
}
 //边框颜色为随机颜色
export function setBoarderColor(element) {
    element.style.borderColor = getRandomColor();
}
 
export function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++)
        color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    return color;
}