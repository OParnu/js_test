function registerEventHandling() {
    document
      .getElementById("search-input")
      .addEventListener("keyup", searchGuest);
    document
      .getElementById("add-guest-btn")
      .addEventListener("click", addGuest);
  }

function displayGuest(guestItem) {
    const firstname = guestItem.firstname;
    const lastname = guestItem.lastname;

    const guestElement = document.createElement("div");

    const spanNameElement = document.createElement("span");
    spanNameElement.textContent = `${firstname} ${lastname}`;

    const spanRemoveElement = document.createElement("span");
    spanRemoveElement.classList.add("remove-icon");
    spanRemoveElement.setAttribute("id", `${firstname}-${lastname}`);
    spanRemoveElement.style.cursor = "pointer";
    spanRemoveElement.style.color = "red";
    spanRemoveElement.textContent = "[X]";
    spanRemoveElement.addEventListener("click", removeGuest);

    guestElement.appendChild(spanNameElement);
    guestElement.appendChild(spanRemoveElement);

    document.getElementById("display-area").appendChild(guestElement);
  }

function displayGuests(guestResult) {
    Array.from(document.getElementById("display-area").children || []).forEach(
      (child) => child.remove()
    );

    guestResult.forEach((result) => {
      displayGuest(result);
    });
  }
