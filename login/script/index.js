
const form = document.getElementById("form");

form.addEventListener("submit", async ( ev ) => {
    ev.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    await fetch("localhost:4500/api/auth/login", {
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
})