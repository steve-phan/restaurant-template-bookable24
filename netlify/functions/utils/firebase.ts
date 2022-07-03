import * as admin from 'firebase-admin';

// Fetch the service account key JSON file contents
import serviceAccount from './firebaseAdmin.json';

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  //  @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
export const db = admin.firestore();
export default admin;
