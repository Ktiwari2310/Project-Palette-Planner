window.addEventListener("DOMContentLoaded", () => {
  const roadblockBtn = document.getElementById("roadblockBtn");
  const roadblockInput = document.getElementById("roadblockInput");
  const roadblockOutput = document.getElementById("roadblockOutput");

  roadblockBtn.addEventListener("click", () => {
    const input = roadblockInput.value;
    if (!input.trim()) {
      roadblockOutput.textContent = "Please enter a task description!";
      return;
    }

    roadblockOutput.textContent = "Checking for potential roadblocks... ⏳";

  
    setTimeout(() => {
      const fakeRoadblocks = [
        "External API rate limits",
        "Dependencies on other teams",
        "Tight deadline risk"
      ];
      roadblockOutput.innerHTML = fakeRoadblocks.map(rb => `- ${rb}`).join("<br>");
    }, 500);
  });
});
