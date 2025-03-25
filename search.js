// js/search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchBar = document.querySelector('.search-bar');
    
    // Sample search data - replace with your actual content
    const searchData = [
        { title: "Monstera Care", page: "plant-care.html", excerpt: "Learn how to care for your Monstera plant" },
        { title: "Plant Swaps", page: "forum.html", excerpt: "Join our monthly plant swap events" },
        { title: "Watering Tips", page: "plant-care.html", excerpt: "Essential watering guide for beginners" },
        { title: "Indoor Plants", page: "gallery.html", excerpt: "Browse our indoor plant collection" },
        { title: "Shop Monstera", page: "shop.html", excerpt: "Buy beautiful Monstera plants" }
    ];
    
    // Focus effect
    searchInput.addEventListener('focus', function() {
        searchBar.classList.add('active');
    });
    
    searchInput.addEventListener('blur', function() {
        setTimeout(() => {
            searchBar.classList.remove('active');
            searchResults.classList.remove('active');
        }, 200);
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        if (query.length > 2) {
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.excerpt.toLowerCase().includes(query)
            );
            
            displayResults(results);
            searchResults.classList.add('active');
        } else {
            searchResults.classList.remove('active');
        }
    });
    
    function displayResults(results) {
        if (results.length > 0) {
            searchResults.innerHTML = results.map(item => `
                <div class="search-result-item" onclick="window.location.href='${item.page}'">
                    <h4>${item.title}</h4>
                    <p>${item.excerpt}</p>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        }
    }
    
    // Click handler for search button
    document.querySelector('.search-button').addEventListener('click', function() {
        if (searchInput.value.trim()) {
            performSearch(searchInput.value);
        }
    });
    
    // Allow pressing Enter to search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            performSearch(this.value);
        }
    });
    
    function performSearch(query) {
        // Implement your actual search functionality here
        // For now we'll just show an alert
        alert(`Searching for: ${query}`);
        // In a real implementation, you might use:
        // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
});