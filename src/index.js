import "./style.css";
import {$home} from "./home.js";
import {$about} from "./about.js";
import {$menu} from "./menu.js";

const $content = document.getElementById("content");
const $buttons = document.querySelectorAll("header nav button");

$content.appendChild($home);


$buttons.forEach(button => {
    button.addEventListener("click", () => {
        $content.innerHTML = "";
        switch(button.id) {
            case "home-button":
                $content.replaceChildren($home);
                break;
            case "about-button":
                $content.replaceChildren($about);
                break;
            case "menu-button":
                $content.replaceChildren($menu);
                break;
        }
    });
});