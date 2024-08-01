
//从db中获取图片
export const setMainLeftProfileImage = (profile) => {
    document.querySelector('.profile > .profile-photo > img').src = profile.img_src;
}

//从db中添加姓名和地址
export const setMainLeftProfileText = (profile) => {
    const h5 = document.querySelectorAll(".main-left .profile-description > h5");
    h5[0].textContent = profile.name;
    h5[1].textContent = profile.at;
}