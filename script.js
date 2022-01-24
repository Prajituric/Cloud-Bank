function initMap() {
  const loc = { lat: 44.43281, lng: 26.07017 };
  const map = new google.maps.Map(doocument.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  const maker = new google.maps.Maker({ position: loc, map: map });
}

$("#nav-bar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
