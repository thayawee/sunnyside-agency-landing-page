const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <img
        src="/img/desktop/image-gallery-milkbottles.jpg"
        alt="img-milkbottles"
      />
      <img src="/img/desktop/image-gallery-orange.jpg" alt="img-orange" />
      <img src="/img/desktop/image-gallery-cone.jpg" alt="img-cone" />
      <img
        src="/img/desktop/image-gallery-sugarcubes.jpg"
        alt="img-sugarcubes"
      />
    </div>
  );
};

export default Gallery;
