document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form-vak");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#user-name").value;
    const phone = document.querySelector("#user-phone").value;
    const resume = document.querySelector("#user-resume").value;

    const urlApi =
      "https://provence-backend.onrender.com/provence/orders/send_vacancy";

    const review = {
      name: name,
      phone: phone,
      resume: resume,
    };

    const dataGet = (method, url, review) => {
      const headers = {
        "Content-Type": "application/json",
      };

      fetch(url, {
        method: method,
        body: JSON.stringify(review),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Что то пошло не так");
          }
        })
        .then((dat) => console.log(dat))
        .catch((error) => console.log(error.message));
    };

    dataGet("POST", urlApi, review);
  });
});
