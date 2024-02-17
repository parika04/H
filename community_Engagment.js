// Sample array of ideas (replace with actual data if available)
const ideas = [
    { title: "Idea 1", description: "Description of Idea 1" },
    { title: "Idea 2", description: "Description of Idea 2" },
    { title: "Idea 3", description: "Description of Idea 3" }
  ];
  
  // Function to generate idea cards dynamically
  function generateIdeaCards() {
    const ideaContainer = document.getElementById("ideaContainer");
    ideas.forEach(idea => {
      const ideaCard = document.createElement("div");
      ideaCard.classList.add("idea-card");
      ideaCard.innerHTML = `
        <h3>${idea.title}</h3>
        <p>${idea.description}</p>
      `;
      ideaContainer.appendChild(ideaCard);
    });
  }
  
  // Call the function to generate idea cards when the page loads
  window.onload = generateIdeaCards;
  