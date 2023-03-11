export const bodyParser= (req, callback) => {
  let body = [];
  // contorlador de pedaços da chamada do body
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    const content = Buffer.concat(body).toString();
    const data = JSON.parse(content);
    req.body = data;
    callback();
  })
}