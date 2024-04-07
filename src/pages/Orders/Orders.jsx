const orders = [
  {
    id: '1',
    itemName: 'Pen',
    itemPrice: 100,
    itemQuantity: 1,
    itemTotal: 100,
  },
  {
    id: '2',
    itemName: 'Pencil',
    itemPrice: 10,
    itemQuantity: 3,
    itemTotal: 100,
  },
  {
    id: '3',
    itemName: 'Book',
    itemPrice: 25,
    itemQuantity: 3,
    itemTotal: 100,
  },
];

export default function Orders() {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {orders.map((order) => (
          <li key={order.id}>{order.itemName}</li>
        ))}
      </ul>
    </>
  );
}
