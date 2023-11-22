// Use const or let consistently for variable declarations
const cardElement = document.querySelector("#cards");
const searchButton = document.getElementById("mybtn");



// Use async function instead of async arrow function
async function search() {
    const searchWord = document.querySelector("input").value;
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + searchWord;

    try {
        const response = await fetch(url);
        const json = await response.json();

        // Clear previous search results
        cardElement.innerHTML = "";

        json.data.forEach((card) => {
            card.card_images.forEach((img) => {
                const image = document.createElement("img");
                image.src = img.image_url;
                cardElement.append(image);
            });
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here (e.g., display an error message to the user)
    }
}

// Use addEventListener consistently for better readability
searchButton.addEventListener("click", search);
