document.addEventListener('DOMContentLoaded', () => {

    
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
        
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove("active");
            });
        });
    }

    
    const searchInput = document.getElementById("search-input");
    
    
    if (searchInput) {
        
        const searchContainer = document.querySelector(".content-section:nth-child(2) .card-grid, .content-section:nth-child(3) .card-grid");
        const cards = searchContainer ? searchContainer.querySelectorAll(".card") : [];

        searchInput.addEventListener("keyup", function(event) {
            const query = event.target.value.toLowerCase();

            cards.forEach(card => {
                
                const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
                const content = card.querySelector("p")?.textContent.toLowerCase() || "";
                const cardText = title + content;

                if (cardText.includes(query)) {
                    card.style.display = "block"; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }

    
    function setupFormHandler(formId, statusId, successMessage) {
        const form = document.getElementById(formId);
        const statusElement = document.getElementById(statusId);

        if (form && statusElement) {
            form.addEventListener("submit", function(event) {
                event.preventDefault(); 
                
                
                statusElement.textContent = successMessage;
                statusElement.style.color = "green";
                
                
                setTimeout(() => {
                    form.reset();
                    statusElement.textContent = "";
                }, 3000);
            });
        }
    }

    
    setupFormHandler("story-form", "story-status", "Thank you for sharing your story! We will review it shortly.");
    setupFormHandler("contact-form", "contact-status", "Message sent! We appreciate your interest.");
});