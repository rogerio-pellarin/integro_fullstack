//This is not a requirement, but i did this to prove if test4 is working well
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.post('/palindrome', (req, res, next) => {
    if (req.body.palindrome) {
        next();
    }else{
        res.status(400).send('did not send the palindrome');
    }
    
})

app.post('/palindrome', (req, res) => {
    const palindrome = req.body.palindrome.split(' ').join('').split(',').join('').split('.').join('');
    if(palindrome.split('').reverse().join('') === palindrome){
        res.json(true);
    }else{
        res.json(false);
    }
})

app.listen(3001, () => {
    console.log('listening on port ' + 3001);
})