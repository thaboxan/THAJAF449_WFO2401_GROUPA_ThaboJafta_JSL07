// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the necessary elements
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");

  // Hide the modal initially
  modal.style.display = "none";

  // Add an event listener to the form submission
  cardForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // 🚨 Get input values
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput =
      document.getElementById("personalMessage").value;
    const courseNameInput =
      document.getElementById("courseName").value || "a course"; // Fallback to "a course" if no input;

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
    // Check if the required fields are filled
    if (studentName.trim() === "" || personalMessage.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
    <h1>Certificate of Achievement</h1>
    <p>This is to certify that</p>
    <h3>${studentName}</h3>
    <p>has almost completed with</p>
    <h3>${courseName}</h3>
    <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
    <img src='logo.png' alt='Codespace logo' width='150' height='60'>
    <p>${personalMessage}</p>
  `;

    //  Display the modal
    modal.style.display = "block";

    // Clear the form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    if (courseNameInput) courseNameInput.value = "";
  });

  //  🚨 Close the modal when the close button is clicked
  // Add an event listener to the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
  });
});
