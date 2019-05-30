window.addEventListener('load', function () {
    console.log('All assets are loaded')
    var searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", function () {
        var searchQuery = document.getElementById('input-query').value;
        var searchURL;

        if (document.getElementById('google-rb').checked == true) {
            if (searchQuery === '') {
                alert("Blank Entry not Allowed");
            } else {
                searchURL = "https://www.google.com/search?q=" + searchQuery;
                window.open(searchURL);
            }
        }

        if (document.getElementById('alpha-rb').checked == true) {
            if (searchQuery === '') {
                alert("Blank Entry not Allowed");
            } else {
                searchURL = "https://wall.alphacoders.com/search.php?search=" + searchQuery;
                window.open(searchURL);
            }
        }

        if (document.getElementById('craft-rb').checked == true) {
            if (searchQuery === '') {
                alert("Blank Entry not Allowed");
            } else {
                searchURL = "https://wallpaperscraft.com/search/?query=" + searchQuery;
                window.open(searchURL);
            }
        }

        if (document.getElementById('unsplash-rb').checked == true) {
            if (searchQuery === '') {
                alert("Blank Entry not Allowed")
            } else {
                searchURL = "https://unsplash.com/search/photos/" + searchQuery;
                window.open(searchURL);
            }
        }

        if(document.getElementById('cave-rb').checked == true) {
            if (searchQuery === '') {
                alert("Blank Entry not Allowed")
            } else {
                searchURL = "https://wallpapercave.com/search?q=" + searchQuery;
                window.open(searchURL);
            }
        }

    })
})