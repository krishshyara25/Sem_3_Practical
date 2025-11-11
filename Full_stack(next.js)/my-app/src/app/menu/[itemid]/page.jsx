// app/menu/[itemid]/page.jsx

import { notFound } from "next/navigation";

const foodItems = [
  { id: 1, name: "Margherita Pizza", desc: "Classic cheese and tomato pizza.", price: 299, image: "/pizza.jpg" },
  { id: 2, name: "Veg Burger", desc: "Crispy veggie patty with cheese and lettuce.", price: 149, image: "/burger.jpg" },
  { id: 3, name: "Pasta Alfredo", desc: "Creamy Alfredo sauce pasta with herbs.", price: 249, image: "/pasta.jpg" },
];

export default function ItemDetails({ params }) {
  const item = foodItems.find((f) => f.id === Number(params.itemid));

  if (!item) return notFound();

  return (
    <main className="p-6">
      <div className="max-w-lg mx-auto border rounded-lg shadow-lg p-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
        <p className="text-gray-700 mb-3">{item.desc}</p>
        <p className="text-xl font-semibold mb-4">Price: ₹{item.price}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </main>
  );
}
