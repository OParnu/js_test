function searchGuest(event) {
    const result = guests.searchGuests(event.target.value);
    displayGuests(result);
  }

  function addGuest() {
    const firstnameInput = document.getElementById("firstname-input");
    const lastnameInput = document.getElementById("lastname-input");
    const result = guests.addNewGuest(
      firstnameInput.value,
      lastnameInput.value
    );

    displayGuest(result[result.length - 1]);

    firstnameInput.value = "";
    lastnameInput.value = "";
  }

  function removeGuest(event) {
    const name = event.target.getAttribute("id").split("-");
    guests.removeGuest({
      firstname: name[0],
      lastname: name[1],
    });
    event.target.parentElement.remove();
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  };
}
