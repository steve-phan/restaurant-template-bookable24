import { Handler } from '@netlify/functions';
import * as admin from 'firebase-admin';
import * as serviceAccount from './adminConfig.json';

admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
});

export const handler: Handler = async (event, context) => {
  try {
    const email = 'phanhaingoc@gmail.com';
    const username = ' Phan Hai Ngoc ';
    await admin
      .firestore()
      .collection('mail')
      .add({
        to: email,
        template: {
          name: 'following',
          data: {
            username,
            name: 'Vu Nam',
          },
        },
      });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Success`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Fail`,
      }),
    };
  }
};
