// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

  //key: de3e556815064e36b659f605189029d9

  //get: https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=de3e556815064e36b659f605189029d9
  //get https://news.google.com/rss/search?q=brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419

}
/* 
export default function apiNoticia(req, res) {
  const url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-09-09&' +
    'sortBy=popularity&' +
    'apiKey=de3e556815064e36b659f605189029d9';

  const req = new Request(url);

  fetch(req)
    .then(function (response) {
      console.log(response.json());
    }
  }) */