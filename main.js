let adatok = [];
const tablazat = document.getElementById("tablazat")
const uzenet = document.getElementById("uzenet")

async function init() {
    const response = await fetch("/patrons.json");
    adatok = await response.json()

    for (i of adatok) {
        const tr = document.createElement("tr");
        const subscriber = document.createElement("td");
        const premium = document.createElement("td");
        const paid = document.createElement("td"); 

        subscriber.textContent = i.subscriber
        if (i.premium == true) {
            premium.textContent = "✅"
        }
        else {
            premium.textContent = "❌"
        }

        paid.textContent = "$" + i.paid_total;

        if (i.paid_total > 800) {
            tr.classList.add("gold");
        }

        tr.appendChild(subscriber)
        tr.appendChild(premium)
        tr.appendChild(paid)

        tablazat.appendChild(tr);

        premium.addEventListener("click", () => {
            uzenet.style.display = "block";

            if (premium.textContent == '❌') {
                i.premium = true;
                premium.textContent = '✅';
            }
            else {
                i.premium = false;
                premium.textContent = '❌';
            }
            
            setTimeout(() => {
                uzenet.style.display = "none";
            }, 5000)
        })

    }
}

init()