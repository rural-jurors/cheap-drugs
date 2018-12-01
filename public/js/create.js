$("#submitBtn").on("click", function (event) {
  console.log("Button was clicked");
  event.preventDefault();
  var newUser = {
    firstName: $("#first_name").val().trim(),
    lastName: $("#last_name").val().trim(),
    email: $("#email").val().trim(),
    userPassword: $("#password").val().trim(),
    zipcode: $("#zip_code").val().trim()
  };

  $.post("/api/signup", newUser)
    .then(function (data) {
      window.location.href = data.redirect
    });
});