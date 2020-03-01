let divbox = document.getElementsByClassName("certbox")

for (let i = 0; i < divbox.length; i++) {
    divbox[i].onmouseover = function () {
        let image = divbox[i].querySelector("img");

        image.onmouseover = function () {
            divbox[i].style.zIndex = "10";
            image.style.width = "30em";
        }

        image.onmouseleave = function () {
            divbox[i].style.zIndex = "";
            image.style.width = "";
        }
    }
}
