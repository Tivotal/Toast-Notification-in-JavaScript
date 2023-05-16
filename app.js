/* Created by Tivotal */

let toastList = document.querySelector(".toast-list");
let btns = document.querySelectorAll(".btn");

let getDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success : this is success toast",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info : this is info toast",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning : this is warning toast",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error : this is error toast",
  },
};

const createToast = (id) => {
  //getting toast details based on button id
  const { icon, text } = getDetails[id];

  //creating new li tag
  let toast = document.createElement("li");

  //setting class names for li tag created
  toast.className = `toast ${id}`;

  //generating inner html for toast tag
  toast.innerHTML = ` <div class="column">
  <i class="fas ${icon}"></i>
  <span>${text}</span>
</div>
<i class="fas fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  //appending created toast to toast list
  toastList.appendChild(toast);

  //setting timeout for toast after specified duration
  toast.timeoutId = setTimeout(() => {
    removeToast(toast);
  }, getDetails.timer);
};

let removeToast = (toast) => {
  toast.classList.add("hide");

  //clearing timeout for the toast
  if (toast.timeoutId) clearTimeout(toast.timeoutId);

  //removing the toast after 500ms
  setTimeout(() => {
    toast.remove();
  }, 500);
};

//creating toast based on button click
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    createToast(btn.id);
  });
});
