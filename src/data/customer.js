const customer = JSON.parse(localStorage.getItem('customer')) || null

export const customerFound = customer != null ? true : false;

export const customerData = {
    name: customer ? customer.name : null,
    district: customer ? customer.district : null,
    address: customer ? customer.address : null
};