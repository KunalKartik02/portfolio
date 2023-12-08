const Card = ({ title, imgSrc, cardBody }) => {
  return (
    <a href="">
      <div class="card-flyer">
        <div class="text-box">
          <div class="image-box">
            <img
              src={imgSrc}
              alt=""
              style={{ width: "47%", objectFit: "cover" }}
            />
          </div>
          <div class="text-container">
            <h6>{title}</h6>
            <p>{cardBody}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
