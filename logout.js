const logoutBtn = document.querySelector("#logoutBtn")

console.log(logoutBtn)

logoutBtn.addEventListener("click", async (e) => {
  console.log(e.target)
  const res = await fetch(
    "https://authentication-jwt-dz86.onrender.com/user/logout"
  )

  const data = await res.json()
  console.log(data)
    alert(data.messgae)
    if (data.messgae === "User logout successfully") {
        window.location.href = "signUp.html"
    } 
})
