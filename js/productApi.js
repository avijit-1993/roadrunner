const product = [
    {
        name:"GX Elite Dynamic",
        oldPrice:399.00,
        newPrice:249.00,
        description:"Engineered for speed and comfort, SprintMax Pro delivers superior traction and breathability. Ideal for high-performance runs.",
        onty:1,
        newArrive:true,
        mostPopular:true,
        fetureDeal:true,
        imagePath:"Elite-Dynamic.jpg",
        id:2233,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
        

    },
    {
        name:"Air Max Plus",
        oldPrice:499.00,
        newPrice:349.00,
        description:"Conquer rugged trails with shock-absorbing soles and a waterproof mesh upper. Built for off-road adventure.",
        onty:1,
        newArrive:false,
        mostPopular:true,
        fetureDeal:true,
        imagePath:"NikeAirMaxPlus.jpg",
        id:2211,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
        
    },
    {
        name:"Pegasus Turbo",
        oldPrice:249.00,
        newPrice:199.00,
        description:"Light as air with responsive cushioning, the AirGlide 360 makes every stride smooth and effortless.",
        onty:1,
        newArrive:true,
        mostPopular:true,
        fetureDeal:false,
        imagePath:"NikePegasusTurbo.jpg",
        id:1199,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
        
    },
    {
        name:"Air Jordan",
        oldPrice:649.00,
        newPrice:449.00,
        description:"Designed for serious runners, the RunElite V2 offers dynamic support and long-lasting comfort mile after mile.",
        onty:1,
        newArrive:false,
        mostPopular:true,
        fetureDeal:true,
        imagePath:"air-jordan.jpg",
        id:1188,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
        
    },
    {
        name:"Elite Dynamic",
        oldPrice:249.00,
        newPrice:199.00,
        description:"With flexible grooves and bounce-back foam, FlexStride Zoom keeps you light on your feet during intense workouts.",
        onty:1,
        newArrive:true,
        mostPopular:true,
        fetureDeal:false,
        imagePath:"EliteDynamic.jpg",
        id:1177,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
    {
        name:"BYW X Shoes",
        oldPrice:499.00,
        newPrice:299.00,
        description:"Perfect for city runners, UrbanRun Evo combines sleek design with high-grip outsoles for maximum street performance.",
        onty:1,
        newArrive:false,
        mostPopular:true,
        fetureDeal:false,
        imagePath:"BYW-X-Shoes.jpg",
        id:1166,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
    {
        name:"Mobius OG",
        oldPrice:449.00,
        newPrice:399.00,
        description:"Rain or shine, StormRunner GTX’s weatherproof layer keeps your feet dry and secure on any terrain.",
        onty:1,
        newArrive:false,
        mostPopular:true,
        fetureDeal:true,
        imagePath:"Mobius-OG.jpg",
        id:1155,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
    {
        name:"Air Max 270",
        oldPrice:749.00,
        newPrice:499.00,
        description:"Get energized with every step—PulseCore Ignite features responsive midsoles for explosive sprints and fast recovery.",
        onty:1,
        newArrive:true,
        mostPopular:true,
        fetureDeal:false,
        imagePath:"Air-Max-270.jpg",
        id:1144,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
    {
        name:"React Miler 3",
        oldPrice:299.00,
        newPrice:199.00,
        description:"Minimal weight, maximum speed. Velocity Nova is your go-to shoe for race day and fast-paced training.",
        onty:1,
        newArrive:true,
        mostPopular:false,
        fetureDeal:false,
        imagePath:"Lace-Up-Sneakers.jpg",
        id:1133,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
    {
        name:"Split Fuel",
        oldPrice:549.00,
        newPrice:399.00,
        description:"Fusion of fashion and function—Striker Fusion offers bold looks and unbeatable foot support for active lifestyles.",
        onty:1,
        newArrive:false,
        mostPopular:false,
        fetureDeal:true,
        imagePath:"SplitFuel.jpg",
        id:1122,
        sizeAvailable: [7,8,9,10],
        sizeSelected:7,
        isWishItem:false
    },
]



const ApiData = JSON.parse(localStorage.getItem('data'));

const initialData = {
    item : product,
    cart:[],
    wishlist:[],
    totalItem:0,
    totalQnt:0,
    totalPrice:0,
    checkoutProduct:null,
    checkoutProductList:{
        product:[],
        checTotalPrice:0,
    },
    userDetails:{
        name:"",
        country:"",
        state:"",
        address:"",
        poseCode:"",
        email:"",
        phone:"",
        
    }


}

const data = ApiData ? ApiData : initialData;