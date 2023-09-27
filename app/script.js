$(document).ready(function () {
  $("#loginform").submit(function (event) {
    event.preventDefault();
    validationPassword();
    let data = [];
    const useremail = $("#email").val();
    const userpassword = $("#password").val();
    const value = {
      id: new Date().getTime(),
      email: useremail,
      password: userpassword,
    };
    data.push(value);
    console.log(data);
  });
});
function validationPassword() {
  let password = $("#password").val();
  if (password.length == "") {
    alert("enter a password");
  }
  if (password.length > 8) {
    alert("Password must be eight character");
  }
}
function clearform() {
  $("#loginform")[0].reset();
}
