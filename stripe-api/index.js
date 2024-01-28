const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const stripe = Stripe("sk_test_51M1ru6ALO2GIO6ULds10yrj31OB4aCXmSowmWDohlHuuThvIyFTd38xI9A74FgSapTBWhgSRGUKx6cm6nuOSyzZy00RiDD56qp");

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.post("/payment-sheet", async (req, res, next) => {
    try {
        const data = req.body;
        console.log(req.body);
        const params = {
            email: data.email,
            name: data.name,
        };
        const customer = await stripe.customers.create(params);
        console.log(customer.id);

        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: "2020-08-27" }
        );
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(data.amount),
            currency: data.currency,
            customer: customer.id,
            automatic_payment_methods: {
                enabled: true,
            },
        });
        const response = {
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
        };
        res.status(200).send(response);
    } catch (e) {
        next(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
