function submitReview() {
    const stars = document.querySelector('input[name="rate"]:checked');
    const review = document.querySelector('textarea[name="comment"]').value;
    const reviewsDiv = document.getElementById('reviews_div');
    if (stars && review) {
        const reviewObj = {
            stars: stars.value,
            review: review
        };
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(reviewObj);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        displayReviews();
        document.getElementById('review_form').reset();
        const successMsg = document.createElement('p');
        successMsg.innerHTML = 'Review submitted successfully.';
        successMsg.style.color = 'green';
        reviewsDiv.insertBefore(successMsg, reviewsDiv.firstChild);
        alert('Review submitted successfully.');
    } else {
        alert('Please select a rating and write a review.');
    }
}


function displayReviews() {
    const reviewsDiv = document.getElementById('reviews_div');
    reviewsDiv.innerHTML = '';
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    if (reviews.length > 0) {
        const ul = document.createElement('ul');
        reviews.forEach(review => {
            const li = document.createElement('li');
            const stars = '★'.repeat(review.stars);
            li.innerHTML = `Rating: ${stars}<br>Review: ${review.review}`;
            ul.appendChild(li);
        });
        reviewsDiv.appendChild(ul);
    } else {
        reviewsDiv.innerHTML = '<p>No reviews yet.</p>';
    }
}

function clear_all() {
    localStorage.clear();
    const reviewsDiv = document.getElementById('reviews_div');
    reviewsDiv.innerHTML = '';
}

displayReviews();
