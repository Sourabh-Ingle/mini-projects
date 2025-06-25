let btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('click', (e) => handleshow(e));
});

document.querySelectorAll('.desc').forEach(p => {
    const full = p.textContent;
    p.dataset.fulltext = full;
    p.textContent = truncateText(full, 100);
});

function handleshow(e) {
    const card = e.target.closest('.card'); 
    const desc = card.querySelector('.desc');

    const fullText = desc.dataset.fulltext || desc.textContent;
    if (e.target.textContent === 'Read more') {
        desc.textContent = fullText;
        e.target.textContent = 'Read less';
        desc.dataset.fulltext = fullText; 
    } else {
        desc.textContent = truncateText(fullText, 100);
        e.target.textContent = 'Read more';
    }

}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}