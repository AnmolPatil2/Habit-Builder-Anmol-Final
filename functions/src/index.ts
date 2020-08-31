
//const functions = require('firebase-functions');
//const admin = require('firebase-admin');
//admin.initializeApp(functions.config().firebase);
//const admin = require('firebase-admin');
//admin.initializeApp();

//const SENDGRID_API_KEY = functions.config().sendgrid.key;
//const SENDGRID_API_KEY = functions.config().sendgrid.key;


//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(SENDGRID_API_KEY);
//exports.firebaseEmail = functions.firestore.document('users/{userId}/followers/{followerId}').onCreate((event) => {


//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(SENDGRID_API_KEY);
//exports.firebaseEmail = functions.firestore.document('users/{userId}/followers/{followerId}').onCreate((event) => {
//console.log(SENDGRID_API_KEY);
//console.log('hello');
//const userId = event.params.userId;

//const newValue = snap.data();
//const db = admin.firestore();
// return db.collection('users').doc(userId).get().then(doc => {
//const user = doc.data();

//const msg = {
// to: 'test@example.com',
// from: 'anmol.patil004@gmail.com',
//// subject: 'Sending with Twilio SendGrid is Fun',
// text: 'and easy to do anywhere, even with Node.js',
// html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
//return sgMail.send(msg);



// };
// console.log(msg)
// return sgMail.send(msg)



// })
// .then(() => console.log('Email sent'))
// .catch(err => console.log(err))
//})
//})