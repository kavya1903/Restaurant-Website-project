// Get the menu items from an array of objects
let menuItems = [
  {
    name: "Samosa Surprise",
    category: "Starters",
    price: 35,
    image: "images/img9.jpg",
    caption:
      "Crispy triangular pastries stuffed with spiced potatoes and peas.",
  },
  {
    name: "Veg Salad",
    category: "Starters",
    price: 80,
    image: "images/veg-salad.jpg",
    caption: "A fresh and healthy veg salad.",
  },
  {
    name: "Paneer Tikka Delight",
    category: "Starters",
    price: 80,
    image: "images/paneer-tikka.jpg",
    caption: "Grilled cottage chees marinated in atomic spices and yogurt.",
  },
  {
    name: "Chicken Pakora Bliss",
    category: "Starters",
    price: 80,
    image: "images/chicken-pakora.jpg",
    caption:
      "Tender Chicken pieces coated in a spiced batter and deep-fried to perfection.",
  },
  {
    name: "Vegetable Spring Rolls",
    category: "Starters",
    price: 80,
    image: "images/vegetable-spring-roll.jpg",
    caption:
      "Thin, crispy rolls filled with a mix of finely chopped vegetables.",
  },
  {
    name: "Aloo Tikki Temptation",
    category: "Starters",
    price: 80,
    image: "images/aloo-tikki.jpg",
    caption:
      "Golden brown potato patties filled with a mix of spices and herbs.",
  },
  {
    name: "Fish Amritsari",
    category: "Starters",
    price: 80,
    image: "images/fish.jpg",
    caption:
      "Succulent fish fillets marinated in a blend of Indian spices and gram flour.",
  },
  {
    name: "Papdi Chaat Sensation",
    category: "Starters",
    price: 80,
    image: "images/papdi.jpg",
    caption:
      "Crispy papdis topped with yogurt, tamarind chutney, and a variety of savory toppings.",
  },
  {
    name: "Dahi Vada Delight",
    category: "Starters",
    price: 80,
    image: "images/dahi-vada.jpg",
    caption:
      "Soft lentil dumplings soaked in creamy yogurt and topped with a mix of chutneys.",
  },
  {
    name: "Chicken Tikka Skewers",
    category: "Starters",
    price: 80,
    image: "images/chicken-tikka.jpg",
    caption:
      "Succulent pieces of marinated chicken cooked to perfection on skewers.",
  },
  {
    name: "Masala Dosa",
    category: "Main Course",
    price: 250,
    image: "images/img2.jpg",
    caption:
      "Dosa filled with a spicy potato filling, served with sambar and coconut chutney.",
  },
  {
    name: "Palak Paneer",
    category: "Main Course",
    price: 250,
    image: "images/palak-paneer.jpg",
    caption: "Soft cottage cheese cubes cooked in creamy spinach-based gravy.",
  },
  {
    name: "Vegetable Korma",
    category: "Main Course",
    price: 250,
    image: "images/korma.jpeg",
    caption:
      "A mix of seasonal vegetables cooked in a creamy coconut-based gravy with a blend of aromatic spices.",
  },
  {
    name: "Malai Kofta",
    category: "Main Course",
    price: 250,
    image: "images/malai-kofta.jpg",
    caption:
      "Soft and creamy cottage cheese dumplings cooked in a creamy tomato-based gravy.",
  },
  {
    name: "Chicken Biryani",
    category: "Main Course",
    price: 250,
    image: "images/img12.jpg",
    caption: "A flavorful and aromatic chicken biryani.",
  },
  {
    name: "Dal Makhani",
    category: "Main Course",
    price: 250,
    image: "images/dal-makani.jpg",
    caption:
      "Slow-cooked black lentils simmered in a creamy tomato-based gravy.",
  },
  {
    name: "Chana Masala",
    category: "Main Course",
    price: 250,
    image: "images/chana-masal.jpg",
    caption:
      "Tender chickpeas cooked in a spicy tomato-based gravy with blend of aromatic spices.",
  },
  {
    name: "Rogan Josh Joy",
    category: "Main Course",
    price: 250,
    image: "images/rogan.jpg",
    caption:
      "Tender lamb cooked in a spicy gravy of onions, tomatoes, and aromatic spices.",
  },
  {
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 200,
    image: "images/paneer-butter.jpg",
    caption: "A creamy and spicy paneer butter masala.",
  },
  {
    name: "Tandoori Chicken",
    category: "Main Course",
    price: 250,
    image: "images/tandoori.jpg",
    caption:
      "Succulent chicken marinated in a blend of yogurt and aromatic spices and cooked in a tandoor oven.",
  },
  {
    name: "Gulab Jamun",
    category: "Dessert",
    price: 50,
    image: "images/gulab-jamun.jpg",
    caption: "A sweet and soft gulab jamun.",
  },
  {
    name: "Ras Malai",
    category: "Dessert",
    price: 60,
    image: "images/rasmali.jpg",
    caption:
      "Delicate cheese balls soaked in fragrant milk, garnished with pistachios.",
  },
  {
    name: "Kulfi",
    category: "Dessert",
    price: 60,
    image: "images/kulfi.jpeg",
    caption:
      "Rich and creamy frozen dessert made with condensed milk and flavored with cardamom and saffron.",
  },
  {
    name: "Jalebi",
    category: "Dessert",
    price: 60,
    image: "images/jalebi.jpg",
    caption:
      "Crispy and crunchy spirals of deep-fried dough soaked in sugar syrup.",
  },
  {
    name: "Payasam",
    category: "Dessert",
    price: 60,
    image: "images/payasa.jpeg",
    caption:
      "A sweet rice pudding made with milk, sugar, and flavored with cardamom and saffron.",
  },
  {
    name: "Ladoo",
    category: "Dessert",
    price: 60,
    image: "images/ladoo.jpg",
    caption:
      "Small and round sweets made with various ingredients like chickpea flour, sesame seeds and coconut.",
  },
  {
    name: "Barfi",
    category: "Dessert",
    price: 60,
    image: "images/barfi.jpeg",
    caption:
      "A fudgy and creamy sweet made with condensed milk, nuts, and flavored with cardamom.",
  },
  {
    name: "Halwa",
    category: "Dessert",
    price: 60,
    image: "images/halwa.jpeg",
    caption:
      "A dense and sweet dessert made with semolina, ghee, and sugar, garnished with nuts.",
  },
  {
    name: "Ice Cream",
    category: "Dessert",
    price: 60,
    image: "images/ice-cream.jpg",
    caption: "A cold and creamy ice cream",
  },
];

// Get the menu container element
let menuContainer = document.getElementById("menu-card");

// Define a function to create a table element for the menu
function createMenuTable() {
  // Create a table element
  let menuTable = document.createElement("table");
  menuTable.className = "menu-table";

  // Create an array of unique categories from the menu items array
  let categories = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (!categories.includes(menuItems[i].category)) {
      categories.push(menuItems[i].category);
    }
  }

  // Loop through the categories array and create a table section for each category
  for (let i = 0; i < categories.length; i++) {
    // Create a table header row with the category name as the only column
    let headerRow = document.createElement("tr");
    let categoryHeader = document.createElement("th");
    categoryHeader.textContent = categories[i];
    categoryHeader.colSpan = 3;

    // Append the header column to the header row
    headerRow.appendChild(categoryHeader);

    // Append the header row to the table
    menuTable.appendChild(headerRow);

    // Loop through the menu items array and create a table row for each item that belongs to the current category
    for (let j = 0; j < menuItems.length; j++) {
      if (menuItems[j].category == categories[i]) {
        // Create a table row element
        let itemRow = document.createElement("tr");

        // Create three table data elements for the name, image, and price of the item
        let nameData = document.createElement("td");
        nameData.textContent = menuItems[j].name;
        let imageData = document.createElement("td");
        // Create a figure element to wrap the image and the caption
        let figure = document.createElement("figure");
        // Create an image element with the source and class attributes
        let image = document.createElement("img");
        image.src = menuItems[j].image;
        image.className = "menu-image";
        // Create a figcaption element with the caption text
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = menuItems[j].caption;
        // Append the image and the figcaption to the figure
        figure.appendChild(image);
        figure.appendChild(figcaption);
        // Append the figure to the image data
        imageData.appendChild(figure);
        let priceData = document.createElement("td");
        priceData.textContent = menuItems[j].price;

        // Append the data elements to the row element
        itemRow.appendChild(nameData);
        itemRow.appendChild(imageData);
        itemRow.appendChild(priceData);

        // Append the row element to the table
        menuTable.appendChild(itemRow);
      }
    }
  }

  // Return the table element
  return menuTable;
}

// Call the createMenuTable function and append the result to the menu container
menuContainer.appendChild(createMenuTable());
