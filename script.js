"use strict";

// DONNÉES ET CHARGEMENT FOURNIS : cette partie n'est pas évaluée.
// Source : https://fakestoreapi.noksha.dev/api/products
// Capture du 28/09/2026. Prix affichés en euros par convention d'exercice.
// Garder le mode décidé par l'enseignant, identique pour toute la classe.
const MODE_DONNEES = "capture"; // alternative enseignant : "reseau"
const PRODUITS_CAPTURE = [
  {
    _id: 1,
    title: "Long sleeve Jacket",
    price: 150,
    category: "women",
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
  },
  {
    _id: 2,
    title: "Jacket with wollen hat",
    price: 65,
    category: "women",
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
  },
  {
    _id: 3,
    title: "Compact fashion t-shirt",
    price: 55.99,
    category: "women",
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
  },
  {
    _id: 4,
    title: "Blue jins",
    price: 50,
    category: "women",
    image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
  },
  {
    _id: 5,
    title: "Skirts with full setup",
    price: 695,
    category: "women",
    image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg",
  },
  {
    _id: 6,
    title: "Yellow Hoody",
    price: 180,
    category: "men",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  },
];

let produits = [];

// VOTRE TRAVAIL COMMENCE ICI.
const articles = document.getElementById("articles");
const panier = document.getElementById("panier");
function demarrer() {
  // Le tableau produits contient maintenant les six produits.
  // Construisez le catalogue et initialisez l'affichage du panier.
  PRODUITS_CAPTURE.forEach((element) => {
    console.log(element.image);
    articles.insertAdjacentHTML(
      "beforeend",
      `
      <li
            id="${element._id}"      
            class="bg-white flex flex-col rounded-md border border-slate-200 shadow-sm relative">

            <a href="#"
               class="rounded-md block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
               <img src="${element.image}""
                  class="w-full aspect-[18/24] object-cover object-top" />

               <div class="p-4">
                  <h3 class="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
                     ${element.title}
                  </h3>
                  <p class="text-base mt-2 font-semibold text-slate-700">
                     ${element.price}
                  </p>
               </div>
            </a>

            <div class="p-4 pt-0">
               <button id="${element._id}" type="button" aria-label="Add Lexicon Luxe to cart"
                  class="button w-full cursor-pointer text-sm px-3.5 py-2 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Add to cart
               </button>
            </div>
         </li>`,
    );
  });
  const boutons = document.querySelectorAll(".button");

  boutons.forEach((bouton) => {
    bouton.addEventListener("click", function handleClick(event) {
      console.log("bouton clicked", event);
      let à_ajouter = PRODUITS_CAPTURE[event.target.id];
      console.log(à_ajouter);
      produits.push(à_ajouter);
      console.log(à_ajouter);
      let existe = false;
      produits.forEach((element) => {
        if (element._id == à_ajouter._id) {
          existe = true;
        }
      });
      if (existe == false) {
        panier.insertAdjacentHTML(
          "beforeend",
          `<li>Article : ${à_ajouter.title}</li> <li>Prix : ${à_ajouter.price}</li>`,
        );
      }
    });
  });
}
// Ajoutez vos variables et vos fonctions ici.

demarrer();

const toggleSideBar = () => {
  const panier = document.querySelector(".panier");
  const sideBar = document.querySelector(".sidebar");
  panier.addEventListener("click", () => {
    sideBar.classList.toggle("w-[600px]");
  });
};

toggleSideBar();

const addToCard = () => {};

const displaySideBar = () => {};

const deleteArticle = () => {};

const calculateTotal = () => {
  let total = 0;
  produits.forEach((element) => {
    total += element.price;
  });
  return total;
};
