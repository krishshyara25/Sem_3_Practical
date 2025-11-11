import { NextResponse } from "next/server";

let orders = [
  { id: 1, customer: "Vanshika", item: "Margherita Pizza", quantity: 2, status: "Pending" },
  { id: 2, customer: "Krish", item: "Veg Burger", quantity: 1, status: "Delivered" },
];

export async function GET() {
  return NextResponse.json({ success: true, orders });
}

export async function POST(request) {
  const data = await request.json();
  const newOrder = {
    id: orders.length + 1,
    customer: data.customer,
    item: data.item,
    quantity: data.quantity || 1,
    status: "Pending",
  };
  orders.push(newOrder);
  return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
}
