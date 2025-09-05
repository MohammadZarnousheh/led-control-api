async function toggleLED(ledNumber, state) {
  const statusElement = document.getElementById("status");

  try {
    const response = await fetch("/api/leds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [`led${ledNumber}`]: state }),
    });
    const result = await response.json();
    statusElement.textContent = `Status: LED ${ledNumber} set to ${state}`;
  } catch (error) {
    statusElement.textContent = `Status: Error - ${error.message}`;
  }
}