export default function login() {
  const LOGINS = "./logins.json"
  const LOGGED_IN_CONTENT = "./loggedInContent.json"

  const loginForm = document.getElementById("login-form")
  const formMessage = document.getElementById("form-message")
  const userMessage = document.getElementById("user-message")
  const retrievedLogin = JSON.parse(sessionStorage.getItem("usernamePassword"))
  const loggedInContentBox = document.querySelector(".logged-in-content")
  const loggedInContentHome = document.getElementById("logged-in-content-home")
  const loggedInContentAbout = document.getElementById(
    "logged-in-content-about"
  )
  const loggedInContentContact = document.getElementById(
    "logged-in-content-contact"
  )
  const retrievedContent = JSON.parse(sessionStorage.getItem("extraContent"))

  let storedLogin = []
  let loggedInContent = []

  async function logins() {
    try {
      const response = await fetch(LOGINS)

      if (response.ok) {
        storedLogin = await response.json()
      } else {
        formMessage.textContent = "Failed to fetch logins."
      }
    } catch (e) {
      console.error(e)
    }
  }

  logins()

  // Content only available after log in
  async function extraContent() {
    try {
      const response = await fetch(LOGGED_IN_CONTENT)

      if (response.ok) {
        loggedInContent = await response.json()
      } else {
        formMessage.textContent = "Failed to fetch extra content."
      }
    } catch (e) {
      console.error(e)
    }
  }

  extraContent()

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let userName = document.getElementById("username").value
      let passWord = document.getElementById("password").value

      const matchedLogin = storedLogin.find(
        (login) => login.username === userName && login.password === passWord
      )

      if (matchedLogin) {
        // Get userMessage, populate loggedInContentHome directly from JSON.
        userMessage.textContent = `User: ${matchedLogin.username}`

        populateContent(loggedInContentHome, loggedInContent, 0)

        // Apply class here (and at end of script)
        loggedInContentBox.classList.add("border")

        sessionStorage.setItem("usernamePassword", JSON.stringify(matchedLogin))
        sessionStorage.setItem("extraContent", JSON.stringify(loggedInContent))
        formMessage.textContent =
          "You will be logged out after you close the browser window"
      } else {
        formMessage.textContent = "Invalid username or password."
      }
      loginForm.reset()
    })
  }

  if (retrievedLogin) {
    // Get userMessage and loggedInContent[...] from session storage
    userMessage.textContent = `User: ${retrievedLogin.username}`

    populateContent(loggedInContentHome, retrievedContent, 0)
    populateContent(loggedInContentAbout, retrievedContent, 1)
    populateContent(loggedInContentContact, retrievedContent, 2)

    // Apply border style again
    loggedInContentBox.classList.add("border")
  }
}

function populateContent(targetElement, contentData, contentIndex) {
  if (targetElement) {
    targetElement.innerHTML = contentData[contentIndex].content
  }
}
