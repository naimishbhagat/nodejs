const {Customer,validate} = require('./../models/customer');
const express = require('express');
const router = express.Router();

router.get('/',async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();
    res.send(customer);
});

router.put('/:id',async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).send('The genre with the given ID was not found.');

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    customer.name = req.body.name;
    customer.phone = req.body.phone;
    customer.isGold = req.body.isGold;
    customer = await customer.save();
    res.send(customer);
});

router.delete('/:id', async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).send('The genre with the given ID was not found.');

    customer = await Customer.deleteOne({ _id: id });
    res.send(customer);
});

router.get('/:id', async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).send('The genre with the given ID was not found.');
    res.send(customer);
});

module.exports =  router;