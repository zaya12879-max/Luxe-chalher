document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const closeBtn = document.querySelector(".close-modal");
    
    // Menu Selectors
    const openMenu = document.getElementById('openMenu');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Génération des produits (1-18)
    for (let i = 1; i <= 18; i++) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/hijab${i}.jpeg" alt="CHALHER N°${i}" loading="lazy">
            <p style="margin-top:15px; font-size:12px; font-weight:bold; letter-spacing:1px;">MODÈLE EXCELLENCE N°${i}</p>
            <p style="color:#888; font-size:11px;">Collection Limitée</p>
        `;
        card.onclick = () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            modalImg.src = `images/hijab${i}.jpeg`;
            modalTitle.innerText = `MODÈLE EXCELLENCE N°${i} - CHALHER PARIS`;
        };
        gallery.appendChild(card);
    }

    // Menu Toggle
    openMenu.onclick = () => sideMenu.classList.add('active');
    closeMenu.onclick = () => sideMenu.classList.remove('active');

    // Fermeture Modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Logique de Paiement
    const payBtn = document.getElementById('payBtn');
    payBtn.onclick = function() {
        const cardName = document.getElementById('cardName').value;
        if(cardName === "") {
            alert("Veuillez entrer le nom sur la carte");
            return;
        }

        this.innerText = "VALIDATION EN COURS...";
        this.style.background = "#c5a059";

        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> PAIEMENT RÉUSSI';
            this.style.background = "#27ae60";
            
            setTimeout(() => {
                alert("Félicitations ! Votre commande CHALHER Paris est confirmée.");
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                // Reset bouton
                this.innerText = "PAYER MAINTENANT";
                this.style.background = "#000";
            }, 1500);
        }, 2000);
    };

    // Fermer si clic extérieur
    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});

