import https from 'https';

const url = 'https://dog.ceo/api/breeds/image/random';

// async () => {
    https.get(url, (res) => {

        // res.setEncoding('utf8');
        let body = '';

        res.on('data', (data) => {
            body += data;
            console.log('reading..');
        })
        res.on('end', () => {
            body = JSON.parse(body);
            console.log(body);

            const imgUrl = body.message;
            console.log(imgUrl);
            
            https.get(imgUrl, (res) => {
                res.on('data', (data) => {
                    body += data;
                    console.log('reading..');
                })
                res.on('end', () => {
                    console.log('image here');
                    // console.log(body);
                })
            })
        })
    })
// }