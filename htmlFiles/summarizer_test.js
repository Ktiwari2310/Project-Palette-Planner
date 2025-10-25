document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("summaryOutput");

  if (!input.trim()) {
    outputDiv.textContent = "Please enter some text first!";
    return;
  }

  // Fake summarizer for now
  setTimeout(() => {
    outputDiv.textContent = input.split(" ").slice(0, 10).join(" ") + "…";
  }, 500);
});
