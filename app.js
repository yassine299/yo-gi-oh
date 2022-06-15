const cardElemnt = document.querySelector("#cards");
const element = document.getElementById("mybtn");
const reset = document.getElementById("#reset");

const Reset = () => {
    window.location.reload();
}

const search =async (e) => {
    const searchWord = document.querySelector("input").value;
    const Url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=" + searchWord;
    const response = await fetch(Url);
    const json = await response.json();

    json.data.forEach((card) => {
        card.card_images.forEach((img) => {
            const image = document.createElement("img");
           // console.log(img.image_url)
            image.src = img.image_url;
            cardElemnt.append(image);

        })
    });

}



element.addEventListener("click", search);

