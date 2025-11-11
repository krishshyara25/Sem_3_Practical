import { NextResponse } from "next/server";

let orders = [
  { id: 1, customer: "Vanshika", item: "Margherita Pizza", quantity: 2, status: "Pending" },
  { id: 2, customer: "Krish", item: "Veg Burger", quantity: 1, status: "Delivered" },
];

export async function GET(_, { params }) {
  const { orderid } = params;
  const order = orders.find((o) => o.id === Number(orderid));

  if (!order) {
    return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, order });
}

export async function PATCH(request, { params }) {
  const { orderid } = params;
  const data = await request.json();
  const orderIndex = orders.findIndex((o) => o.id === Number(orderid));

  if (orderIndex === -1) {
    return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
  }

  orders[orderIndex] = { ...orders[orderIndex], ...data };

  return NextResponse.json({ success: true, order: orders[orderIndex] });
}
