window.addEventListener("DOMContentLoaded", () => {

  const summarizeBtn = document.getElementById("summarizeBtn");

  const userInput = document.getElementById("userInput");

  const summaryOutput = document.getElementById("summaryOutput");



  const API_KEY = "AIzaSyB8fkjaW_S01YOPavfAprL0ZQ9F_xZoEeI"; // Replace with your actual key



  summarizeBtn.addEventListener("click", async () => {

    const text = userInput.value.trim();

    if (!text) {

      summaryOutput.textContent = "Please enter some text!";

      return;

    }



    summaryOutput.textContent = "Summarizing... ⏳";



    try {

      const response = await fetch(

        https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${API_KEY},

        {

          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify({

            contents: [{ parts: [{ text: Summarize this clearly: ${text} }] }],

          }),

        }

      );



      const data = await response.json();

      console.log("Response data:", data); // 🔍 Log to inspect



      if (data.error) {

        throw new Error(data.error.message);

      }



      const summary =

        data.candidates?.[0]?.content?.parts?.[0]?.text ||

        "No summary found";



      summaryOutput.textContent = summary;

    } catch (error) {

      summaryOutput.textContent = "Error: " + error.message;

      console.error(error);

    }

  });

});
