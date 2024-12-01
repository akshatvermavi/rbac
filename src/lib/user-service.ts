import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function createUserProfile(userId: string, data: { 
  email: string;
  username: string;
  createdAt: Date;
}) {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, {
    ...data,
    createdAt: data.createdAt.toISOString()
  });
}