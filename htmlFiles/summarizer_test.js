document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("summaryOutput");

  if (!input.trim()) {
    outputDiv.textContent = "Please enter some text first!";
    return;
  }

  outputDiv.textContent = "Summarizing... ⏳";

  try {
    // Replace this URL with the actual API endpoint you will use
    const response = await fetch("https://api.example.com/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer YOUR_API_KEY" if needed
      },
      body: JSON.stringify({ text: input })
    });

    const data = await response.json();

    outputDiv.textContent = data.summary || "No summary returned!";
  } catch (err) {
    console.error(err);
    outputDiv.textContent = "Error: Could not summarize. Try again.";
  }
});
