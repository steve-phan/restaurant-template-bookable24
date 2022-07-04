import { Handler } from '@netlify/functions';

import admin, { db } from '../utils/firebase';

export const handler: Handler = async (event, context) => {
  const data = JSON.parse(event.body as string);
  const { uid } = data;
  // What data do we need here?
  // Customer Email,  Customer Address, Shop Email, foodItemList,

  // foodItem : foodId, quantity, require,

  try {
    // await db.collection('mail').add({
    //   to: email,
    //   template: {
    //     name: 'following',
    //     data: {
    //       username,
    //       name: 'Vu Nam',
    //     },
    //   },
    // });
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
