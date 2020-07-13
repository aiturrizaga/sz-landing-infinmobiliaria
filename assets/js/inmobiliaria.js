$(document).ready(() => {
  $("#homeCarousel").owlCarousel({
    loop: false,
    stagePadding: 0,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
      },
      640: {
        items: 1,
      },
      700: {
        items: 2,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });
});

// let playButton = document.querySelector(".video-container a");
// playButton.addEventListener("click", playVideo);

function playVideo(e) {
  e.preventDefault();
  let videoContainer = this.parentNode;
  let videoUrl = this.href;
  let videoId = videoUrl.split(".com/")[1];
  let iframeUrl;

  if (videoUrl.includes("vimeo")) {
    // vimeo
    videoId = videoId.split("?")[0];
    iframeUrl = `//player.vimeo.com/video/${videoId}?autoplay=1`;
  } else {
    // youtube
    videoId = videoId.split("v=")[1];
    iframeUrl = `//www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  videoContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
}

function sendMail() {
  const names = $("#txtNames").val();
  const email = $("#txtEmail").val();
  const consulta = $("#txtConsulta").val();

  if (names === "") {
    alert("Debe ingresar su nombre");
    return;
  }

  if (email === "") {
    alert("Debe ingresar su correo electrónico");
    return;
  }

  if (consulta === "") {
    alert("Debe ingresar su consulta");
    return;
  }

  var nombre = encodeURIComponent("Hola soy " + names + " y estoy interesado");
  var desc = encodeURIComponent(`Mi correo: ${email}. Consulta: ${consulta}`);

  const openMail = `mailto:inmobiliaria.inf@infperu.com?Subject=${nombre}&body=${desc}`;

  window.open(openMail)
}