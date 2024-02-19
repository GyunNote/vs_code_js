const menuButton = document.querySelector(".menu-button");

menuButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.add("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show");
}

const sideBarCloseButton = document.querySelector(".side-bar-close-button");

sideBarCloseButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");  // 쿼리셀렉터라는 선택자라서 .을 찍음
    sideBarLayout.classList.remove("side-bar-show");  // 클래스 리스트라는 클래스라서 .필요없음
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.remove("side-bar-container-show");
}