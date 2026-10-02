import "./Stylish.css";
const cards=[{ image:"https://img.magnific.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80",
                title:"Nature",
Description:"Nature is the physical world and everything in it that is not made by people, including plants, animals, mountains, weather, and the sea."
},{ image:"http://images.stockcake.com/public/6/d/8/6d8b293f-060a-4823-add5-1df5caa42333_large/vibrant-rainbow-sky-stockcake.jpg",
                title:"Sea",
Description:"The sea is a vast, continuous body of salty water that covers more than 70 percent of the Earth's surface"
},
{ image:"https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D",
                title:"night sky",
Description:"To describe the night sky, focus on the deep colors of the darkness, the soft glow of the moon, and the bright sparkle of distant stars."
}
]
function Stylish(){
    return(
        <div className="container">
            {cards.map((card,index)=>{
                let cardname="card"
                if(index===1){
                    cardname="card-center"
                }
                return(
                    <div className={cardname} key={index}>
                        <img src={card.image}
                        alt={card.title}/>
                        <div className="card-content">
                            <h1>{card.title}</h1>
                            <p>{card.Description}</p>
                        <button id="buttonid">learn more</button>
                    </div>
                </div>
            );
        })}
    </div>
);
}
export default Stylish