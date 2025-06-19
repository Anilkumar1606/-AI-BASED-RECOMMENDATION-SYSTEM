function getRecommendations() {
  const preference = document.getElementById("preferenceInput").value.toLowerCase();

  fetch("data/sample-data.json")
    .then(response => response.json())
    .then(data => {
      const results = data.recommendations.filter(item =>
        item.category.toLowerCase().includes(preference)
      );

      const list = document.getElementById("recommendationList");
      list.innerHTML = "";

      if (results.length === 0) {
        list.innerHTML = "<p>No recommendations found.</p>";
        return;
      }

      results.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${item.imageUrl}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>Category: ${item.category}</p>
        `;

        list.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
