async function getPhotos() {
  let url = 'photos.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderPhotos() {
  let photos = await getPhotos();
  let html = '';
  photos.forEach((photo) => {
    let htmlSegment = `<figure class="card">
                            <img alt="${photo.alt}"
                 height="250" src="${photo.src}" width="250">
            <figcaption>${photo.title}</figcaption>
          </figure>`;

    html += htmlSegment;
  });

  let gerGalleries = document.querySelector('#getGalleries');
  gerGalleries.innerHTML = html;
}

renderPhotos();
