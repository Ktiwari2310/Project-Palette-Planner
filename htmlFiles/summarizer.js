document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("summaryOutput");

  if (!input.trim()) {
    outputDiv.textContent = "Please enter some text first!";
    return;
  }

  outputDiv.textContent = "Summarizing... ⏳";

  try {
    const response = await fetch("https://api.example.com/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
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
