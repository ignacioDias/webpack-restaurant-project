import aboutImage from "./img/about.png";
import chef from "./img/chef.jpg";
import waiter from "./img/waiter.jpg";

export const $about = document.createElement("div");
$about.id = "about-us";

const $imageAbout = document.createElement("img");
$imageAbout.src = aboutImage;
$about.appendChild($imageAbout);

const $aboutText = document.createElement("p");
$aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, turpis id pellentesque scelerisque, nulla eros fermentum erat, eget gravida tellus tortor quis leo. In aliquam lobortis sapien at rhoncus. Ut efficitur pretium turpis, in laoreet lacus dapibus a. Curabitur vel nisl elit. Proin porta nisi ut est condimentum, sodales pretium quam hendrerit. Cras accumsan dolor dolor, non porttitor lectus malesuada at. Cras luctus vulputate lectus, vitae eleifend lacus sagittis id. Nullam neque nibh, feugiat vitae velit quis, euismod venenatis erat. Donec vestibulum velit et diam fermentum lobortis.";
$about.appendChild($aboutText);

const $chefDiv = document.createElement("div");

const $imageChef = document.createElement("img");
$imageChef.src = chef;
$chefDiv.appendChild($imageChef);

const $chefText = document.createElement("p");
$chefText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, turpis id pellentesque scelerisque, nulla eros fermentum erat, eget gravida tellus tortor quis leo. In aliquam lobortis sapien at rhoncus. Ut efficitur pretium turpis, in laoreet lacus dapibus a. Curabitur vel nisl elit. Proin porta nisi ut est condimentum, sodales pretium quam hendrerit. Cras accumsan dolor dolor, non porttitor lectus malesuada at. Cras luctus vulputate lectus, vitae eleifend lacus sagittis id. Nullam neque nibh, feugiat vitae velit quis, euismod venenatis erat. Donec vestibulum velit et diam fermentum lobortis.";
$chefDiv.appendChild($chefText);

$about.appendChild($chefDiv);

const $waiterDiv = document.createElement("div");

const $imageWaiter = document.createElement("img");
$imageWaiter.src = waiter;
$waiterDiv.appendChild($imageWaiter);

const $waiterText = document.createElement("p");
$waiterText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, turpis id pellentesque scelerisque, nulla eros fermentum erat, eget gravida tellus tortor quis leo. In aliquam lobortis sapien at rhoncus. Ut efficitur pretium turpis, in laoreet lacus dapibus a. Curabitur vel nisl elit. Proin porta nisi ut est condimentum, sodales pretium quam hendrerit. Cras accumsan dolor dolor, non porttitor lectus malesuada at. Cras luctus vulputate lectus, vitae eleifend lacus sagittis id. Nullam neque nibh, feugiat vitae velit quis, euismod venenatis erat. Donec vestibulum velit et diam fermentum lobortis.";
$waiterDiv.appendChild($waiterText);

$about.appendChild($waiterDiv);