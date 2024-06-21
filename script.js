
const url = "data.json";

async function fetchData(url1){
    try {
        const response = await fetch(url1);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async () => {    
    const data = await fetchData(url);
    const container = document.querySelector('.section_part_one_info');

    data.forEach(element => {
        container.insertAdjacentHTML('beforeend', `
            <article class="card">
                <img class="img_part_one" src="${element.img}" alt="">
                <div class="part_one_info_under_img">
                    <h4 class="h4_part_one">${element.title}</h4>
                    <p class="p_part_one">${element.description}</p>
                    <p class="price_part_one">$${element.price}</p>
                </div>                
            </article>
            `)
    });
});



