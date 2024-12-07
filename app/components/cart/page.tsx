"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/image-3.png" },
    { id: 2, name: "LCD Monitor", price: 550, quantity: 2, image: "/image-1.png" },
  ]);

  const updateQuantity = (id:number, action: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="max-w-[1170px] my-20 md:my-36 mx-3 md:mx-auto space-y-20">
      <div className="w-full space-y-6">
        {/* Table Header */}
        <div className="flex justify-between px-4 md:px-10 pl-10 md:pl-24 py-6 shadow-md">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between px-4 md:px-10 py-6 shadow-md"
          >
            {/* Product */}
            <div className="flex gap-x-2 sm:gap-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={20}
                className="w-10 md:w-16"
              />
              <span>{item.name}</span>
            </div>

            {/* Price */}
            <span>${item.price}</span>

            {/* Quantity */}
            <span className="flex items-center gap-x-2 border-2 md:py-2 px-2 sm:px-4 rounded">
              <span>{item.quantity}</span>
<div className="flex flex-col">
              <button onClick={() => updateQuantity(item.id, "decrement")}>
                <FaAngleDown />
              </button>
              <button onClick={() => updateQuantity(item.id, "increment")}>
                <FaAngleUp />
              </button>
              </div>
            </span>

            {/* Subtotal */}
            <span>${item.price * item.quantity}</span>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <Link href={"/"}><button className="font-medium py-4 px-12 border border-black rounded">
            Return to Shop
          </button>
          </Link>
          <button className="font-medium py-4 px-12 border border-black rounded">
            Update Cart
          </button>
        </div>
      </div>

      {/* Coupon and Cart Total */}
      <div className="flex flex-col items-start md:flex-row md:gap-x-20 lg:gap-x-40 gap-y-4 lg:gap-y-0">
        {/* Coupon */}
        <div className="flex items-center gap-x-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border-black border focus:border-none focus:ring-1 focus:ring-[#DB4444] px-6 py-4 rounded w-[260px] sm:w-[300px]"
          />
          <button className="bg-[#DB4444] text-white px-4 sm:px-6 lg:px-10 py-4 content-end rounded-md hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="flex flex-col w-full sm:w-[470px] py-8 px-6 gap-y-6 border-2 border-black rounded-md">
          <div>
            <h1 className="text-xl font-medium">Cart Total</h1>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <div>
              <Link href={"/components/cart/cartsection"}><button className="bg-[#DB4444] text-white px-8 md:px-12 py-4 content-end rounded-md hover:bg-red-600">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;




















// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/image-3.png" },
//     { id: 2, name: "LCD Monitor", price: 550, quantity: 2, image: "/image-1.png" },
//   ]);

//   const updateQuantity = (id: number, action: "increment" | "decrement") => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <section className="max-w-[1170px] my-36 space-y-20 px-4 lg:px-0">
//       {/* Table Header */}
//       <div className="hidden md:flex w-full px-6 py-4 shadow-md text-center font-medium">
//         <div className="w-1/4">Product</div>
//         <div className="w-1/4">Price</div>
//         <div className="w-1/4">Quantity</div>
//         <div className="w-1/4">Subtotal</div>
//       </div>

//       {/* Cart Items */}
//       <div className="space-y-6">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col md:flex-row md:items-center justify-between px-6 py-6 shadow-md gap-y-4 md:gap-y-0"
//           >
//             <div className="flex items-center gap-4 w-full md:w-1/4">
//               <Image src={item.image} alt={item.name} width={40} height={20} />
//               <span className="text-center md:text-left">{item.name}</span>
//             </div>
//             <div className="text-center w-full md:w-1/4">${item.price}</div>
//             <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
//               <button
//                 onClick={() => updateQuantity(item.id, "decrement")}
//                 className="p-2 border rounded"
//               >
//                 <FaAngleDown />
//               </button>
//               <span className="px-4">{item.quantity}</span>
//               <button
//                 onClick={() => updateQuantity(item.id, "increment")}
//                 className="p-2 border rounded"
//               >
//                 <FaAngleUp />
//               </button>
//             </div>
//             <div className="text-center w-full md:w-1/4">
//               ${item.price * item.quantity}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col gap-4 md:flex-row justify-between">
//         <button className="font-medium py-4 px-12 border border-black rounded">
//           Return to Shop
//         </button>
//         <button className="font-medium py-4 px-12 border border-black rounded">
//           Update Cart
//         </button>
//       </div>

//       {/* Coupon and Cart Total */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-x-20 space-y-8 lg:space-y-0">
//         <div className="flex items-center gap-4 w-full">
//           <input
//             type="text"
//             placeholder="Coupon Code"
//             className="border-black border focus:ring-1 focus:ring-[#DB4444] px-6 py-4 rounded w-full lg:w-[300px]"
//           />
//           <button className="bg-[#DB4444] text-white px-12 py-4 rounded-md hover:bg-red-600">
//             Apply Coupon
//           </button>
//         </div>
//         <div className="w-full lg:w-[470px] py-8 px-6 border-2 border-black rounded-md space-y-4">
//           <h1 className="text-xl font-medium">Cart Total</h1>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, item) => acc + item.price * item.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Total</span>
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, item) => acc + item.price * item.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <button className="bg-[#DB4444] text-white px-12 py-4 rounded-md hover:bg-red-600">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;




// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/image-3.png" },
//     { id: 2, name: "LCD Monitor", price: 550, quantity: 2, image: "/image-1.png" },
//   ]);

//   const updateQuantity = (id: number, action: "increment" | "decrement") => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <section className="max-w-[1170px] my-36 space-y-20 px-4 lg:px-0">
//       {/* Header */}
//       <div className="hidden lg:flex justify-between px-10 pl-24 py-6 shadow-md">
//         <p>Product</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Subtotal</p>
//       </div>
//       <div className="block lg:hidden px-6">
//         <p className="font-medium text-center">Cart Items</p>
//       </div>

//       {/* Cart Items */}
//       <div className="space-y-6">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col lg:flex-row lg:items-center justify-between px-6 lg:px-10 py-6 shadow-md space-y-4 lg:space-y-0"
//           >
//             {/* Product */}
//             <div className="flex items-center gap-4">
//               <Image src={item.image} alt={item.name} width={40} height={20} />
//               <span>{item.name}</span>
//             </div>

//             {/* Price */}
//             <span className="lg:w-[100px] text-center">${item.price}</span>

//             {/* Quantity */}
//             <div className="flex items-center gap-2 border-2 py-2 px-4 rounded justify-center">
//               <button
//                 onClick={() => updateQuantity(item.id, "decrement")}
//                 className="p-1"
//               >
//                 <FaAngleDown />
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 onClick={() => updateQuantity(item.id, "increment")}
//                 className="p-1"
//               >
//                 <FaAngleUp />
//               </button>
//             </div>

//             {/* Subtotal */}
//             <span className="lg:w-[100px] text-center">
//               ${item.price * item.quantity}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col lg:flex-row justify-between gap-4">
//         <button className="font-medium py-4 px-12 border border-black rounded">
//           Return to Shop
//         </button>
//         <button className="font-medium py-4 px-12 border border-black rounded">
//           Update Cart
//         </button>
//       </div>

//       {/* Coupon and Cart Total */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-x-20 space-y-8 lg:space-y-0">
//         {/* Coupon */}
//         <div className="flex items-center gap-4 w-full">
//           <input
//             type="text"
//             placeholder="Coupon Code"
//             className="border-black border focus:ring-1 focus:ring-[#DB4444] px-6 py-4 rounded w-full lg:w-[300px]"
//           />
//           <button className="bg-[#DB4444] text-white px-12 py-4 rounded-md hover:bg-red-600">
//             Apply Coupon
//           </button>
//         </div>

//         {/* Cart Total */}
//         <div className="w-full lg:w-[470px] py-8 px-6 border-2 border-black rounded-md space-y-4">
//           <h1 className="text-xl font-medium">Cart Total</h1>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, item) => acc + item.price * item.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Total</span>
//             <span>
//               $
//               {cartItems.reduce(
//                 (acc, item) => acc + item.price * item.quantity,
//                 0
//               )}
//             </span>
//           </div>
//           <button className="bg-[#DB4444] text-white px-12 py-4 rounded-md hover:bg-red-600">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

















