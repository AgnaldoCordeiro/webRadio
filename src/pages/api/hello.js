// cahve api noticias 0b46b06b7f26328e60e94c8870b8e8be
// documentação da api https://mediastack.com/documentation
//https://mediastack.com/sources/brazil-news-api
// Dados de notícias ao vivo http : //api.mediastack.com/v1/ news ? access_key = YOUR_ACCESS_KEY


      
    
// parâmetros opcionais: 

//& sources = cnn , bbc & categories = business , sports & countries = us , au & languages = en , - de & keywords = virus , - corona & sort = publicado_desc & offset = 0 & limit = 100  
      
      


/* 

const nodemailer = require("nodemailer");


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sendEmail(req, res) {

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: '587',
    secure: false,
    auth: {
      user: process.env.USEREMAIL,
      pass: process.env.PASSMAIL
    }
  })

  transporter.sendMail({
    from: `"Contato de Ouvinte" <${process.env.USEREMAIL}>`, // sender address
    to: process.env.USEREMAIL, // list of receivers
    replyTo: req.body.email,
    subject: "CONTATO", // Subject line
    text: req.body.mensage, // plain text body
    html: `<b>${req.body.name}</b><br />${req.body.mensage}`, // html body

  }).then((response) => { res.send(response) })
    .catch((error) => { res.send(error) })

  //key: de3e556815064e36b659f605189029d9

  //get: https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=de3e556815064e36b659f605189029d9
  //get https://news.google.com/rss/search?q=brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419

}



 */











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



  /************************************************************ */
  /************************************************
   * 
   require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {

  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${text}
    `,
  };
  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
}); 

  console.log(name, email, text);
  res.send("success");
};


*/

/*
método fetch em contact.js:

 fetch("/api/contact", {
        method: "POST",
        headers: {
          //Accept: "application/json, text/plain, *//*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: mailName,
          email: mailAddress,
          text: mailText,
        }),
      }).then((res) => {
        console.log("Fetch: ", res);
        res.status === 200
        ?
        router.push("/success")
          : router.push("/error");
          
*/