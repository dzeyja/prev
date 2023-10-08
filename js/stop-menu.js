document.addEventListener("DOMContentLoaded", function () {
  fetch("https://provence-backend.onrender.com/provence/stop_menu/all")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
});
