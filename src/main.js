window.onload = () => {
    const consoleStyle = 'font-weight:bold;font-size:50px;line-height:2;background:hsl(256, 100%, 50%);color:hsl(33, 93%, 66%);font-family:monospace;';
    console.log('%c Made by @joellesenne ', consoleStyle);

    let getGalleryAll = document.querySelector('#getGalleryAll');

    const getPhotos = async () => {
        let url = 'photos.json';
        let res
        try {
            res = await fetch(url);
            return await res.json();
        } catch (e) {
            console.log(e);
        }
    }

    const renderPhotos = async () => {
        let html = '';
        let photos = await getPhotos();
        photos.forEach((photo) => {

            let htmlSegment = `<figure class="card">
                            <img alt="${photo.src}"
                            src="${photo.src}"
                            loading="lazy"
                            width="250"
                            height="250">
            <figcaption>${photo.title}<span class="category">${photo.category}</span></figcaption>
          </figure>`;

            return html += htmlSegment;
        });

        if (html) {
            return getGalleryAll.innerHTML = html;
        } else {
            return getGalleryAll.innerHTML = `<p>No Photographs</p>`;
        }

    }

    return  renderPhotos()
}

