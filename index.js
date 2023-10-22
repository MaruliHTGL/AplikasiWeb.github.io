const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const response = await fetch(`https://ets-pemrograman-web-f.cyclic.app/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("user berhasil login");
    } else {
      alert("user gagal login");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  try {
    const response = await fetch("https://ets-pemrograman-web-f.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert("berhasil register");
    } else {
      alert("email telah terdaftar");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Email tidak valid");
    return;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password tidak memenuhi kriteria");
    return;
  }

  try {
    const response = await fetch(`https://ets-pemrograman-web-f.cyclic.app/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Berhasil registrasi
    } else {
      // Gagal registrasi
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
