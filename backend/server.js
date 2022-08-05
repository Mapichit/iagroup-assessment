"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*'
}));
// Handling GET / Request
app.get('/triangle?:base?:height', (req, res) => {
    const { base, height } = req.query;
    let area = calculateTriangleArea(Number(base), Number(height));
    res.status(200).send({
        area: area,
    });
});
app.get('/citizenId?:id', (req, res) => {
    const { id } = req.query;
    let arr = Array.from(String(id), Number);
    let lastArr = arr[12];
    let lastArrId = calculateIdNumber(arr);
    if (arr.length == 0) {
        res.status(400).send({
            success: false,
            error_code: '001',
            error_msg: 'citizen_id require'
        });
    }
    else if (lastArrId == lastArr) {
        res.status(200).send({
            success: true,
            error_code: '200',
            error_msg: '',
        });
    }
    else {
        res.status(400).send({
            success: false,
            error_code: '001',
            error_msg: 'citizen_id invalid'
        });
    }
});
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}
function calculateIdNumber(arr) {
    arr.pop();
    let arrMultiply = [];
    for (let i = 13; i >= 2; i--) { //create array of [13,12,11,...]
        arrMultiply.push(i);
    }
    let arrTotal = [];
    for (let i = 0; i < arr.length; i++) {
        arrTotal.push(arr[i] * arrMultiply[i]);
    }
    let totalSum = 0;
    for (let i = 0; i < arrTotal.length; i++) { //add some of all index in array
        totalSum += arrTotal[i];
    }
    let calculatedNumber = (11 - (totalSum % 11)).toString();
    if (calculatedNumber.length == 2) { //If 2 digits, slice the first 1
        return (Number(calculatedNumber.slice(1)));
    }
    else {
        return Number(calculatedNumber);
    }
}
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
