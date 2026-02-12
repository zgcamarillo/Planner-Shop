// Data for our products page
require("dotenv").config(); //loading in var from .env 
const mongoose = require("mongoose"); //importing mongoose
const Product = require("./models/Product"); //importing my model 

const products = [ //this array is holding the data i want to seed 
    {
        title: "Hello Kitty Bouquet Planner", 
        description: "",
        price: 42.50,
        image: "/image/hkplanner.jpg",
        type: ["Academic", "Weekly", "Hello Kitty"],
        collection: "Hello Kitty"
    }, // https://www.barnesandnoble.com/w/2025-2026-erin-condren-hello-kitty-blushing-bouquet-planner-erin-condren/1146287042?ean=0840114774493
    {
        title: "Hello Kitty Rainbow Planner",
        description: "",
        price: 42.50,
        image: "/images/hkplannertwo.jpg",
        type: ["Weekly", "Academic", "Hello Kitty"],
        collection: "Hello Kitty"
    }, //https://www.barnesandnoble.com/w/7x9-erin-condren-2024-2025-academic-planner-hello-kitty-rainbow-relaxation-erin-condren/1145667658?ean=0840114765835
    {
        title: "Cafe Amorrette Planner",
        description: "",
        price: 29.99,
        image: "/images/coquetteplanner.jpg",
        type: ["Undated", "Weekly", "The Rosette Room"],
        collection: "The Rosette Room"
    }, //https://thehappyplanner.com/collections/cafe-coquette-collection/products/undated-cafe-coquette-customizable-planner-classic-vertical-layout-12-months
    {
        title: "Sip & Blush Planner ",
        description: "",
        price: 34.99,
        image: "/images/coquetteplannertwo.jpg",
        type: ["Undated", "Weekly", "The Rosette Room"],
        collection: "The Rosette Room"
    }, //https://thehappyplanner.com/collections/happy-planners/products/undated-cafe-coquette-customizable-planner-big-horizontal-layout-12-months
    {
        title: "Hello Kitty",
        description: "",
        price: 31.25,
        image: "/images/hkplannerthree.jpg",
        type: ["Hello Kitty", "Weekly", "Life Planning"],
        collection: "Hello Kitty"
    }, //https://www.erincondren.com/hello-kitty-healing-lifeplanner?nbt=nb%3Aadwords%3Ag%3A21736917042%3A165175716942%3A714673407814&nb_adtype=pla&nb_kwd=&nb_ti=pla-589223120814&nb_mi=111253774&nb_pc=online&nb_pi=40132&nb_ppi=589223120814&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gad_campaignid=21736917042&gbraid=0AAAAADcaQTEkmUFZhMKJBKPHscHKcDAy3&gclid=Cj0KCQiA7rDMBhCjARIsAGDBuECnPK32TTpSSRDb3aj1ufYLwHApbk-4_2kgk4dBgTt4XJvvduosbR8aAl8AEALw_wcB
    {
        title: "Earthbound Educator",
        description: "",
        price: 46.00,
        image: "/images/teach.jpg",
        type: ["Rooted in Teaching", "Undated", "Weekly", "Academic", "For Teachers"],
        collection: "Rooted in Teaching"
    }, //https://www.erincondren.com/teach-earth-tones-homeschool-planner
    {
        title: "Affirm & Achieve",
        description: "",
        price: 46.00,
        image: "/images/teachertwo.jpg",
        type: ["Rooted in Teaching", "Weekly", "Academic", "For Teachers"],
        collection: "Rooted in Teaching"
    }, //https://www.erincondren.com/mantra-teacher-lesson-planner?attr%5B85%5D=821079
    {
        title: "Moonlit Montage",
        description: "",
        price: 48.50,
        image: "/images/lifeplanner.jpg",
        type: ["Life Planning", "Weekly"],
        collection: ""
    }, //https://www.erincondren.com/cosmic-collage-lifeplanner
    {
        title: "The Canvas",
        description: "",
        price: 35.00,
        image: "/images/budgetplanner.jpg",
        type: ["Budget & Growth", "Weekly", "Budget"],
        collection: "Budget & Growth"
    }, //https://thehappyplanner.com/collections/budget-planners/products/2026-textured-canvas-customizable-budget-planner-big-budget-layout-12-month
    {
        title: "Savvy Spending",
        description: "",
        price: 35.00,
        image: "/images/budgetplannertwo.jpg",
        type: ["Undated", "Budget", "Budget & Growth", "Weekly"],
        collection: "Budget & Growth"
    }, // https://thehappyplanner.com/collections/budget-planners/products/undated-savvy-budgeter-customizable-budget-planner-classic-budget-layout-12-months
    {
        title: "Sage & Clay",
        description: "",
        price: 35.00,
        image: "/images/budgetplannerthree.jpg",
        type: ["Undated", "Budget", "Budget & Growth", "Weekly"],
        collection:"Budget & Growth"
    }, // https://thehappyplanner.com/collections/budget-planners/products/undated-sage-terracotta-customizable-budget-planner-classic-budget-layout-12-months
    {
        title: "The Intentional Teacher",
        description: "",
        price: 35.00,
        image: "/images/teacherthree.jpg",
        type: ["Rooted in Teaching", "For Teachers", "Weekly", "Academic"],
        collection: "Rooted in Teaching"
    }, //https://thehappyplanner.com/collections/teacher-planners/products/2026-teacher-notes-customizable-teacher-planner-big-teacher-layout-15-months
];

async function seed() {
   await mongoose.connect(process.env.MONGO_URI); //connecting the database;

   await Product.deleteMany({});
   await Product.insertMany(products);

   console.log("Seeded Products", products.length);
   process.exit(0);
   
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});