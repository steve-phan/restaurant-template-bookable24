import * as functions from 'firebase-functions';
// import { doc, collection, setDoc } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

import express, { Express } from 'express';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

import cors from 'cors';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase

import * as admin from 'firebase-admin';

import * as serviceAccount from './adminConfig.json';

admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
});

// const firebaseConfig = {
//   apiKey: 'AIzaSyCCLBY-auBrtosq7uCNCzp6uy466stpLq4',
//   authDomain: 'shoponline-eu.firebaseapp.com',
//   projectId: 'shoponline-eu',
//   storageBucket: 'shoponline-eu.appspot.com',
//   messagingSenderId: '814240023185',
//   appId: '1:814240023185:web:1883c5a3ae68b18bd47530',
//   measurementId: 'G-J71GHWSL2Q',
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app: Express = express();
// app.use(
//   cors({
//     origin: '*.shoponline-eu.firebaseapp.com',
//   })
// );

// const corsHandler = cors({ origin: true });
app.post('/test', cors({ origin: true }), async (req: functions.Request, res: functions.Response) => {
  try {
    const { name, email } = req.body;
    console.log({ name, email });

    await admin
      .firestore()
      .collection('mail')
      .add({
        to: email,
        template: {
          name: 'following',
          data: {
            username: name,
            name: 'Vu Nam',
          },
        },
      });
    // {
    //   subject: "@{{username}} is now following you!",
    //   html: "Just writing to let you know that <code>@{{username}}</code> ({{name}}) is now following you.",
    // }
    // .then(() => console.log('Queued email for delivery!'));

    // await db.collection("mail").add()
    // const mailRef = collection(db, 'mail');
    // await setDoc(doc(mailRef), {
    //   from: `bookable24.de@gmail.com`,
    //   to: ['phanhaingoc@gmail.com'],
    //   template: {
    //     name: 'hello',
    //     data: {
    //       phone: 'this a a phone',
    //     },
    //   },
    // });
    //     to: ['someone@example.com'],
    // message: {
    //   subject: 'Hello from Firebase!',
    //   text: 'This is the plaintext section of the email body.',
    //   html: 'This is the <code>HTML</code> section of the email body.',
    // }
    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(400).json({ message: 'fail' });
  }
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions.region('europe-west3').https.onRequest(app);

export const helloWorld = functions.region('europe-west3').https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});
