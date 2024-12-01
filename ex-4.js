// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
async function asyncsJohnProfile() {
  const johnProfile = await getJohnProfile();
  console.log(johnProfile);
}
asyncsJohnProfile();