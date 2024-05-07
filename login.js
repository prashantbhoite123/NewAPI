const logInform = document.querySelector("#loginForm")
const logInputs = document.querySelectorAll(".loginInput")
const signinmsg = document.querySelector("#siginMessage")
const logoutBtn = document.querySelector("#logoutBtn")
const loginpass = document.querySelector("#loginpass")

console.log(logInputs)
// console.log(logInform)

const logInformdata = {}

logInputs.forEach((inp) =>
  inp.addEventListener("change", async (e) => {
    logInformdata[e.target.name] = e.target.value
    console.log(logInformdata)
  })
)

logInform.addEventListener("submit", async (e) => {
  e.preventDefault()
  console.log("button was clicked")
  let responce = await fetch(
    "https://authentication-jwt-dz86.onrender.com/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(logInformdata),
    }
  )

  const data = await responce.json()
  console.log(data)
  alert(data.message)
  if (data.message === "User is not exist") {
    signinmsg.innerHTML = "Please sign in frist"
  } else if (data.message === "User login succesfuly") {
    signinmsg.innerHTML = "Login successfull"
    window.location.href = "index.html"
  } else if (data.message === "Incorect username or password") {
    loginpass.style.border = "2px solid red"
    loginemail.style.border = "2px solid red"
  }
  logInputs.forEach((input) => input.value === "")
})
