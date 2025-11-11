// app/menu/page.jsx
import Link from "next/link";

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: 299, image: "/pizza.jpg" },
  { id: 2, name: "Veg Burger", price: 149, image: "/burger.jpg" },
  { id: 3, name: "Pasta Alfredo", price: 249, image: "/pasta.jpg" },
];

export default function MenuPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🍴 Our Menu</h1>
      <div className="grid grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <Link
            key={item.id}
            href={`/menu/${item.id}`}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
