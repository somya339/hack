const form1 = document.querySelector(".temp");
const email1 = document.querySelector(".typo");
const container = document.querySelector(".container");



form1.addEventListener("submit", e => {
  e.preventDefault();
 console.log(email1);
  if (email1.value !== null && email1.value !== '') {
    container.insertAdjacentHTML("beforeend", `
    <form action="http://localhost:3400/admin-orig" id="form" class="form">
          <h2>Register With Us</h2>
          <div class="form-control">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" value="${email1.value}" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Enter password again"
            />
            <small>Error message</small>
          </div>
          <button type="submit">Submit</button>
        </form>
    `);
    container.firstElementChild.style.display = "none";
    // formControl.className = 'form-control success';
  } else {
    alert("Enter A Valid Email Address");
  }
// redirect();
});




const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

const updateForm = email => {
  document.querySelector(".form").action = `mailto:${email.value}`;
  document.querySelector(".form").method = "post";
  document.querySelector(".form").enctype = "text/plain";
};

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  updateForm(email);
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});
