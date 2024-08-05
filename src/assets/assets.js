import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import profile_image from './profile_image.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.png'


export const assets ={
    logo,
    add_icon,
    order_icon,
    profile_image,
    upload_area,
    parcel_icon
}

export const order_list= [
    {
        id:1,
        items:[{name: "Maxican Salad",
              description: "Salad",
              Price: "50"
              },
              {name: "Indian Salad",
              description: "Salad",
              Price: "80"
              },
              {name: "Veg Salad",
              description: "Salad",
                Price: "90"
               }
            ],
            amount:122,
            address:{
                firstName:"vini",
                lastName:"Rathod",
                email: "vinisha.rathod.000@gmail.com",
                street:"Patel marg Kukshi",
                city: "Kukshi",
                state:"Madhya Pradesh",
                zipcode:"454331",
                country: "India",
                phone:"9171212231",
            },
            status:"Food Processing",
    },
    {
        id:2,
        items:[{name: "Pasta",
              description: "Pasta",
              Price: "90"
              },
              {name: "Indian Pasta",
              description: "Special Pasta",
              Price: "80"
              },
              {name: "Veg Salad",
              description: "Salad",
                Price: "90"
               }
            ],
            amount:262,
            address:{
                firstName:"Pooja",
                lastName:"Patidar",
                email: "pooja.patidar@gmail.com",
                street:"Lok Manya Tilak",
                city: "Pithampur",
                state:"Madhya Pradesh",
                zipcode:"454332",
                country: "India",
                phone:"9171212231",
            },
            status:"Food Processing",
    },
    {
        id:3,
        items:[{name: "Pizza",
              description: "Pizza",
              Price: "190"
              },
              {name: "Indian Pasta",
              description: "Special Pasta",
              Price: "80"
              },
              {name: " Salad",
              description: "Salad",
                Price: "70"
               }
            ],
            amount:342,
            address:{
                firstName:"Rishika",
                lastName:"Jaiswal",
                email: "rishu.jaiswal@gmail.com",
                street:"Bengali Square",
                city: "Indore",
                state:"Madhya Pradesh",
                zipcode:"4542010",
                country: "India",
                phone:"9171212231",
            },
            status:"Food Processing",
    },
    {
        id:4,
        items:[{name: "Pasta",
              description: "Pasta",
              Price: "90"
              },
              {name: "Indian Pasta",
              description: "Special Pasta",
              Price: "80"
              },
            ],
            amount:172,
            address:{
                firstName:"Vini",
                lastName:"Rathod",
                email: "vini.rathod@gmail.com",
                street:"Mahavir Chowk",
                city: "Kukshi",
                state:"Madhya Pradesh",
                zipcode:"454331",
                country: "India",
                phone:"9171212231",
            },
            status:"Food Processing",
    }
]
    

export const url = 'https://food-order-app-backend-aayu.onrender.com'