import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);
    const [userResult, photoResult] = await Promise.all([userPromise, photoPromise]);
    const resultArray = [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];

    return resultArray;
  } catch (error) {
    return [{ status: 'rejected', value: error.message }];
  }
}
