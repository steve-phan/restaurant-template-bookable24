import { Handler } from '@netlify/functions';

import admin, { db } from '../utils/firebase';

export const handler: Handler = async (event, context) => {
  const data = JSON.parse(event.body as string);
  const { uid } = data;

  try {
    await db
      .collection('users')
      .doc(uid)
      .set({
        ...data,
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
