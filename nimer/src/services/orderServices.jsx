import httpService from "./httpService";

export function createOrder(order) {
  return httpService.post("/orders", order);
}
function getAllOrders() {
  return httpService.get("admin/all-orders") ;
}

function getAllUsers() {
  return httpService.get("admin/all-users") ;
}

export function getAll() {
  return httpService.get("orders/my-orders") ;
}

export function deleteOrder(id) {
  return httpService.delete(`orders/${id}`); 
}

const OrderServices = {
    createOrder,
  getAll,
  deleteOrder,
  getAllOrders,
  getAllUsers,
};

export default OrderServices;