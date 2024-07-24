export default function signUpUser(firstName, lastName) {
  const content = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(content);
  });
}
