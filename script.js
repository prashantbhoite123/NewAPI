const signInform = document.querySelector("#SignForm")
const signinInputs = document.querySelectorAll(".signinInput")
const signbtn = document.querySelector("#signInbtn")
console.log(signbtn)
console.log(signInform)
console.log(signinInputs)

const signUpFormData = {}
signinInputs.forEach((inp) =>
  inp.addEventListener("change", (e) => {
    signUpFormData[e.target.name] = e.target.value
    console.log(signUpFormData)
  })
)
signInform.addEventListener("submit", async (e) => {
  e.preventDefault()
  const res = await fetch(
    "https://authentication-jwt-dz86.onrender.com/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(signUpFormData),
    }
  )
  const data = await res.json()
  console.log(data)
  alert(data.message)
  if (data.message === "User register successfuly") {
    window.location.href = "login.html"
  }
  signinInputs.forEach((inpu) => inpu.value === "")
})

// const signUpFormData = {};
// signInputs.forEach((inp) =>
//   inp.addEventListener("change", (e) => {
//     signUpFormData[e.target.name] = e.target.value;
//     console.log(signUpFormData);
//   })
// );
// signUpForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const res = await fetch(
//     "https://authentication-jwt-dz86.onrender.com/user/register",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json",
//       },
//       body: JSON.stringify(signUpFormData),
//     }
//   );
//   const data = await res.json();
//   console.log(data);
//   alert(data.message);
//   signInputs.forEach((inp) => (inp.value = ""));

// });
