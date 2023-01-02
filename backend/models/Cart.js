module.exports = function Cart(cart) {
    this.items = cart.items || {};
    // this.items = cart.services || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function (item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {
                item: item,
                // itemType: itemType,
                quantity: 0,
                price: 0,
            };
        }

        cartItem.quantity++;
        cartItem.price = cartItem.item.sell_price * cartItem.quantity;
        console.log(cartItem.item);
        this.totalItems++;
        this.totalPrice += cartItem.price;
        console.log(this.items);
        // console.log(cartItem, this.totalPrice);
    };

    this.remove = function (id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    this.getItems = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
