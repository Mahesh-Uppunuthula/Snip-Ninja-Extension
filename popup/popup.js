import { get } from 'axios/dist/browser/axios.cjs';

$("#home").click(function () {
  console.log("redirect to home page");
  chrome.tabs.create({ url: "https://snip-ninja.netlify.app/" });
});

$(".btn").click(() => {
  // localStorage.setItem("ext-id", "snip ninja extension id 007");
  console.log("btn clicked");
  getUsers();
});

const getUsers = () => {
  get("https://reqres.in/api/users")
    .then((response) => {
      const users = response.data.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};
