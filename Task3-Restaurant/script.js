document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    if (!name || !email || !phone || !date || !time) {
        alert("Please fill out all fields.");
    } else {
       alert(`Reservation for ${name} confirmed on ${date} at ${time}. We will contact you at ${phone}.`);
    }
});
