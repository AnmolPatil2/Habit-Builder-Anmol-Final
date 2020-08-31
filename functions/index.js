
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
//// subject: 'Status of current habit',
// text: 'Hey this is my status with the habits',
// html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//dynamic_templete_data:{
// text{
//   data.habits.charts 
//}
//}
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



const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onMetadataUpdate(event => {
    console.log(event)
});
