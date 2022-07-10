import { Handler } from '@netlify/functions';

import { db } from '../utils/firebase';

export const handler: Handler = async (event, context) => {
  const data = JSON.parse(event.body as string);
  const { email, restaurantName } = data;
  try {
    await db.collection('oders').doc(restaurantName).set(data);
    await db.collection('mail').add({
      to: [email, 'bookable24.de@gmail.com'],
      template: {
        name: 'oder',
        data,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `SUCCESS`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `FAIL`,
      }),
    };
  }
};
