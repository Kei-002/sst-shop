module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function (item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.sell_price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += parseFloat(cartItem.item.sell_price);
    };

    this.update = function (item, quantity, id) {
        var cartItem = this.items[id];
        // if (!cartItem) {
        //     cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
        //     cartItem.quantity = 1;
        // }
        console.log("update ", cartItem);
        var total = this.totalItems - cartItem.quantity;
        var price = this.totalPrice - cartItem.price;
        cartItem.quantity = parseInt(quantity);
        cartItem.price = cartItem.item.sell_price * cartItem.quantity;

        this.totalItems = parseInt(total) + parseInt(quantity);
        this.totalPrice = parseFloat(price) + cartItem.price;
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
