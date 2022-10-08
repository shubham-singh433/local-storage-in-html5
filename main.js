function store() {
  var userName = document.getElementById("userName").value;
  var age = document.getElementById("age").value;
  var key = document.getElementById("key").value;

  const user = {
    userName,
    age,
  };

  //convert user object to string and save it
  localStorage.setItem(key, JSON.stringify(user));
}

//retrieve user data from localStorage
function retrieveUserData() {
  let key = document.getElementById("retrieveKey").value;
  console.log("retrive records");
  let userData = localStorage.getItem(key); //searches for the key in localStorage
  let paragraph = document.createElement("p");
  let info = document.createTextNode(userData);
  paragraph.appendChild(info);
  let element = document.getElementById("userData");
  element.appendChild(paragraph);
  retrieveKey.value = "";
}

//delete user data from localStorage
function removeUserData() {
  var removeKey = document.getElementById("removeKey").value;
  localStorage.removeItem(removeKey);
  removeKey.value = "";
}

//delete all user data from localStorage
function deleteAllUserData() {
  localStorage.clear();
}

//ensures the page is fully loaded before functions can be executed.
window.onload = function () {
  document.getElementById("userForm").onsubmit = store;
  document.getElementById("clearButton").onclick = deleteAllUserData;
  document.getElementById("removeButton").onclick = removeUserData;
  document.getElementById("retrieveButton").onclick = retrieveUserData;
};
