function img_find() {
    $.get("http://apophenia--pareidolia.tumblr.com/", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    // var imgs = document.getElementsByTagName("img");
    // var imgSrcs = [];

    // for (var i = 0; i < imgs.length; i++) {
    //     imgSrcs.push(imgs[i].src);
    // }

    // return imgSrcs;
}

// <script>
// $.get('http://path/to/page/1', function(data) {
//     var imgs = $('<div/>').html(data).find('img');
//     imgs.each(function(i, img) {
//         alert(img.src); // show a dialog containing the url of image
//     });
// });
// </script>