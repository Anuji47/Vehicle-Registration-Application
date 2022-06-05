const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000
const dbo = require('./DB/conn');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/getvehicles', (req, res) => {
//     const dbConnect = dbo.getDb();
  
//     dbConnect
//       .collection("VRA_DB.Vehicles")
//       .find({}).limit(50)
//       .toArray(function (err, result) {
//         if (err) {
//           res.status(400).send("Error fetching listings!");
//        } else {
//           res.json(result);
//         }
//       });
// })

app.get('/determineType', (req, res) => {
    var num = req.query.regnum;
    var dNum = num.replace("-"," ");
    var letters = /^[a-zA-Z]/;
    var anyNum = /(\d+)/;
    var specialCh = /[!@#$%^&ශ්‍රී]+/;
    var fdigit = '/[0-9]+\d{3}$/';

    if (dNum.match(anyNum) && endsWithNumber(dNum)){
        if(specialCh.test(dNum)){
            res.send('VINTAGE')
        } else {
            if(dNum.match(letters)){
                res.send('MODERN')
            }
            else{
                res.send("OLD")
            }
        }
    } else {
        res.send('INVALID')
    }

    function endsWithNumber(str) {
        return /[0-9]+\d{3}$/.test(str);
      }

    


    // if(num.match(letters))
    // {
    //     res.send('Modern')
    // }
    // res.send('not')
    // if (num.match(/(\d+)/)) {
    //     if(num.match(/^[A-Za-z]+$/)){
    //         res.send('Modern')
    //     }
    //     res.send('not')
    // }
    // // res.send('INVALID')
    // function onlyNumbers(str) {
    //     return /^[0-9]+$/.test(str);
    //   }
    //   function containsAnyLetter(str) {
    //     return /[a-zA-Z]/.test(str);
    //   }
      
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})