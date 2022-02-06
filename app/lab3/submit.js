let fullName;
let phone;
let age;
const submit = function () {
  function inputDisplay() {
    this.fullName = document.getElementById("fullname").value;
    this.phone = document.getElementById("phone").value;
    this.age = document.getElementById("age").value;
  }
  var newObject = new inputDisplay();

  var render = function () {
    p1 = document.getElementById("render");
    const container = document.createElement("div");
    container.classList.add("appended");
    container.innerHTML = `<h1>Full Name: ${newObject.fullName}</h1><h1>Age: ${newObject.age}</h1><h1>Phone: ${newObject.phone}</h1>`;
    p1.appendChild(container);
  };
  render();
};

document.getElementById("submitBtn").addEventListener("click", newHTML);
