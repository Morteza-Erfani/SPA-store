const validate = (data) => {
  const errors = {};

  if (!data.name.trim().length) {
    errors.name = "Username required";
  } else {
    delete errors.name;
  }

  if (!data.email.length) {
    errors.email = "Email required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)) {
    errors.email = "Invalid email";
  } else {
    delete errors.email;
  }

  if (!data.password.length) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "Password must have at least 6 characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "You must confirm your password";
  } else if (data.confirmPassword === data.password) {
    delete errors.confirmPassword;
  } else {
    errors.confirmPassword = "Password do not match";
  }

  if (!data.isAccepted) {
    errors.isAccepted = "Accept our regulations";
  } else {
    delete errors.isAccepted;
  }

  return errors;
};

export { validate };
