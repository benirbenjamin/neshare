// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main(message) {
  

  
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'gretchen.quigley@ethereal.email',
//         pass: 'muwdQrWUj49JcFvCSC'
//     }
// });
// // {
// //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
// //   to: "bar@example.com, baz@example.com", // list of receivers
// //   subject: "Hello ✔", // Subject line
// //   text: "Hello world?", // plain text body
// //   html: "<b>Hello world?</b>", // html body
// // }
  
//   let info = await transporter.sendMail({
//        from: 'duterestory@gmail.com', // sender address
//        to: "munaziriBNM@gmail.com", // list of receivers
//        subject: "Hello ✔", // Subject line
//        text: "Hello world?", // plain text body
//          html: "<b>Hello world?</b>", // html body
//      });
 
//    console.log("Message sent: %s", info.messageId);
// //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// //   // Preview only available when sending through an Ethereal account
//    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// module.exports={main};
