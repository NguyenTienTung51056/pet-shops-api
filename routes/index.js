const authRouter = require('./auth');
const productRouter = require('./product');
const cartRouter = require('./cart')
const orderRouter = require('./order');
const userRouter = require('./user');
const stripeRoute = require('./stripe');

function route(app){
    app.use('/auth', authRouter);
    app.use('/products', productRouter);
    app.use('/carts',cartRouter)
    app.use('/users',userRouter)
    app.use('/orders',orderRouter)
    app.use("/checkout", stripeRoute);
}


module.exports = route;