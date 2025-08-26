import restaurantImage from "./img/restaurant.jpg";

export const $home = document.createElement("div");
$home.id = "home";

const $title = document.createElement("h1");
$title.textContent = "Restaurante Original"
$home.appendChild($title);

const $paragraph = document.createElement("p");
$paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, turpis id pellentesque scelerisque, nulla eros fermentum erat, eget gravida tellus tortor quis leo. In aliquam lobortis sapien at rhoncus. Ut efficitur pretium turpis, in laoreet lacus dapibus a. Curabitur vel nisl elit. Proin porta nisi ut est condimentum, sodales pretium quam hendrerit. Cras accumsan dolor dolor, non porttitor lectus malesuada at. Cras luctus vulputate lectus, vitae eleifend lacus sagittis id. Nullam neque nibh, feugiat vitae velit quis, euismod venenatis erat. Donec vestibulum velit et diam fermentum lobortis.";
$home.appendChild($paragraph);

const $image = document.createElement("img");
$image.src = restaurantImage
$home.appendChild($image);

const $buttons = document.createElement("div");
$buttons.className = "buttons";

const $buttonContact = document.createElement("button");
$buttonContact.textContent = "Contact us";
$buttons.appendChild($buttonContact);   

const $buttonReservation = document.createElement("button");
$buttonReservation.textContent = "Make a reservation";
$buttons.appendChild($buttonReservation);   

$home.appendChild($buttons);   