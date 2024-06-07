import midtransClient from "midtrans-client";

// let coreApi = new midtransClient.CoreApi({
//   isProduction: false,
//   serverKey: process.env.MIDTRANS_SECRET,
//   clientKey: process.env.NEXT_MIDTRANS_CLIENT,
// });

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SECRET,
  clientKey: process.env.NEXT_MIDTRANS_CLIENT,
});

export const CreateTransaction = async (params) => {
  const { total_price, products } = params;

  //   return console.log(products);

  let parameter = {
    item_details: products,
    transaction_details: {
      order_id: "order-1",
      gross_ammount: total_price,
    },
  };

  console.log(parameter);

  const token = await snap.createTransactionToken(parameter);
  console.log(token);
};
