    function search_func() {
        // Get the search input element
        var input = document.getElementById("myInput");
        // Get the filter value and convert it to lowercase
        var filter = input.value.toLowerCase();
        // Get the list of search results
        var results = document.getElementById("myUL").getElementsByClassName("search-link-product");

        // Loop through all search results
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var productName = result.getElementsByClassName("product-text-name-search")[0].innerText.toLowerCase();

            // Check if the product name matches the search filter
            if (productName.indexOf(filter) > -1) {
                result.style.display = "";
            } else {
                result.style.display = "none";
            }
        }
        document.querySelector('.search-box-output-located').style.display="block";
    }
    