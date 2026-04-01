fetch("data.json")
.then(res => res.json())
.then(data => {

document.getElementById("brand").innerText = data.brand;
document.getElementById("desc").innerText = data.description;

// services
document.getElementById("services").innerHTML =
data.services.map(s => `
<div class="card">
${s.name} - ${s.price}
</div>
`).join("");

// portfolio
document.getElementById("portfolio").innerHTML =
data.portfolio.map(p => `
<div class="card">
<img src="${p.img}" width="200">
</div>
`).join("");

// contact
document.getElementById("contact").innerHTML = `
Email: ${data.email}<br>
<a href="${data.telegram}">Telegram</a><br>
<a href="${data.whatsapp}">WhatsApp</a><br>
<a href="${data.vk}">VK</a>
`;

});
