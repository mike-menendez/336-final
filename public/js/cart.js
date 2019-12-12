// Set cart value and auth status

$(document).ready(function() {
  let cart = sessionStorage.getItem("cart");
  if (cart != null) {
    cart = JSON.parse(cart);
    console.log(cart);
  }
  cartPage = "";

  const ids = Object.keys(cart);
  for (const id of ids) {
    console.log(id);
  }

  
});

    // <div class="card container shadow p-5 justify-content-center mt-5">
    //     <h1 class="text-center">Cart</h1>
    //     <hr>
    //     <div class="pb-5">
    //         <div class="container">
    //           <div class="row">
    //             <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
    //               <div class="table-responsive">
    //                 <table class="table">
    //                   <thead>
    //                     <tr>
    //                       <th scope="col" class="border-0 bg-light">
    //                         <div class="p-2 px-3 text-uppercase">Product</div>
    //                       </th>
    //                       <th scope="col" class="border-0 bg-light">
    //                         <div class="py-2 text-uppercase">Price</div>
    //                       </th>
    //                       <th scope="col" class="border-0 bg-light">
    //                         <div class="py-2 text-uppercase">Quantity</div>
    //                       </th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <th scope="row" class="border-0">
    //                         <div class="p-2">
    //                           <div class="ml-3 d-inline-block align-middle">
    //                             <h5 class="mb-0">Timex Unisex Originals</h5>
    //                           </div>
    //                         </div>
    //                       </th>
    //                       <td class="border-0 align-middle"><strong>$79.00</strong></td>
    //                       <td class="border-0 align-middle"><strong>3</strong></td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>