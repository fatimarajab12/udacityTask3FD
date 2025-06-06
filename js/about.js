export function showAbout() {
  console.log("This is the About page");

  fetch('../starter/data/aboutMeData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load aboutMe data");
      }
      return response.json();
    })
    .then(data => {
      const aboutMeDiv = document.getElementById("aboutMe");

      const bioPara = document.createElement("p");
      bioPara.textContent = data.aboutMe;

      const headshotContainer = document.createElement("div");
      headshotContainer.classList.add("headshotContainer");

      const headshotImg = document.createElement("img");
      headshotImg.src = data.headshot;
      headshotImg.alt = "Headshot";

      headshotContainer.appendChild(headshotImg);
      aboutMeDiv.appendChild(bioPara);
      aboutMeDiv.appendChild(headshotContainer);
    })
    .catch(error => {
      console.error("Error loading About Me section:", error);
    });
}
