let page = 1;

function loadItems() {
    const itemContainer = document.getElementById('itemContainer');
    for (let i = 0; i < 5; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = `Item ${((page - 1) * 5) + (i + 1)}`;
        itemContainer.appendChild(item);
    }
    page++;
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadItems();
    }
}, {
    rootMargin: '100px'
});

observer.observe(document.getElementById('loading'));

loadItems();
