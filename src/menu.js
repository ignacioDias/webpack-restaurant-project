import pizza from "./img/pizza.jpg";
import sushi from "./img/sushi.jpg";
import burger from "./img/burger.jpg";
import salad from "./img/salad.jpg";
export const $menu = document.createElement("div");
$menu.id = "menu";

let dishes = [
  {
    title: "Pizza Margarita",
    img: pizza,
    description: "Clásica pizza italiana con tomate, mozzarella y albahaca fresca."
  },
  {
    title: "Sushi Variado",
    img: sushi,
    description: "Selección de sushi fresco con salmón, atún y vegetales."
  },
  {
    title: "Hamburguesa Doble",
    img: burger,
    description: "Jugosa hamburguesa doble con queso, bacon y vegetales."
  },
  {
    title: "Ensalada César",
    img: salad,
    description: "Ensalada fresca con pollo, crutones, parmesano y aderezo César."
  },
  {
    title: "Pizza Pepperoni",
    img: pizza,
    description: "Pizza con salsa de tomate, mozzarella y abundante pepperoni."
  }
];

dishes.forEach(dish => {
  const $dishDiv = document.createElement("div");
  $dishDiv.classList.add("dish");

  const $img = document.createElement("img");
  $img.src = dish.img;
  $img.alt = dish.title;

  const $title = document.createElement("h2");
  $title.textContent = dish.title;

  const $p = document.createElement("p");
  $p.textContent = dish.description;

  $dishDiv.appendChild($img);
  $dishDiv.appendChild($title);
  $dishDiv.appendChild($p);

  $menu.appendChild($dishDiv);
});
