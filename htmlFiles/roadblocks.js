window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("roadblockBtn");
  const input = document.getElementById("roadblockInput");
  const output = document.getElementById("roadblockOutput");

  const API_KEY = "AIzaSyB8fkjaW_S01YOPavfAprL0ZQ9F_xZoEeI";

  btn.addEventListener("click", async () => {
    const task = input.value.trim();
    if (!task) {
      output.textContent = "Please enter a task description!";
      return;
    }

    output.textContent = "Generating roadblocks and suggestions... ⚙";

    try {
      const response = await fetch(
        https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${API_KEY},
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `For this task: "${task}", list 3 potential roadblocks and provide specific suggestions or improvements for each one in this format:
1️⃣ Roadblock: ...
💡 Suggestion: ...
2️⃣ Roadblock: ...
💡 Suggestion: ...
(keep it concise and professional)`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("Response data:", data); // 🔍 Log to inspect
      const summary =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No roadblocks generated";
      // Convert markdown-style *bold* to <b> and line breaks to <br>
      const formatted = summary
        .replace(/\\(.?)\\*/g, "<b>$1</b>") // bold
        .replace(/\n/g, "<br>"); // new lines

      output.innerHTML = formatted;
    } catch (error) {
      output.textContent = "Error: " + error.message;
    }
  });
});
