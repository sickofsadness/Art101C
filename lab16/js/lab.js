$.ajax({
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
    type: "GET",
    dataType: "json",

    success: function(response) {
        // The actual JSON is inside the 'contents' key as a string
        const data = JSON.parse(response.contents);

        let comicDiv = $("<div></div>");
        comicDiv.append(`<h2>${data.title}</h2>`);
        comicDiv.append(`<img src="${data.img}" alt="${data.alt}" title="${data.alt}">`);
        $("#output").append(comicDiv);
    },

    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});
