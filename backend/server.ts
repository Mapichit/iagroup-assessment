import express from 'express';
import cors from 'cors';

const app = express();
const PORT:Number=3000;

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get('/triangle?:base?:height', (req, res) => {
  const { base, height } = req.query;

  let area = calculateTriangleArea(Number(base),Number(height))

  res.status(200).send({
   area: area,
  });
})

app.get('/citizenId?:id', (req, res) => {
  const { id } = req.query;
  let arr = Array.from(String(id), Number)
  let lastArr= arr[12];
  let lastArrId = validateIdNumber(arr);

  if(arr.length == 0){
    res.status(400).send({
      success: false,
      error_code: '001',
      error_msg: 'citizen_id require'
    });
  }  else if(lastArrId == lastArr){
    res.status(200).send({
      success: true,
      error_code: '200',
      error_msg: '',
    });
  }else {
    res.status(400).send({
      success: false,
      error_code: '001',
      error_msg: 'citizen_id invalid'
    });
  }
});

function calculateTriangleArea(base:number,height:number){
  return (base * height) / 2
}

function validateIdNumber(arr:number[]){
  arr.pop()
  let arrMultiply = [];

  //create array of [13,12,11,...]
  for (let i = 13; i >= 2; i--){
    arrMultiply.push(i);
  }

  let arrTotal= [];
  for(let i = 0; i < arr.length; i++){
    arrTotal.push(arr[i] * arrMultiply[i])
  }

  let totalSum = 0;
  //add some of all index in array
  for(let i = 0; i <arrTotal.length; i++){
    totalSum += arrTotal[i]
  }

  let calculatedNumber = (11 - (totalSum % 11) ).toString()
  //If 2 digits, return last digit
  if (calculatedNumber.length == 2){
    return (Number(calculatedNumber.slice(1)));
  } else {
    return Number(calculatedNumber)
  }
}


// Server setup
app.listen(PORT,() => {
  console.log('The application is listening '
    + 'on port http://localhost:'+PORT);
})
