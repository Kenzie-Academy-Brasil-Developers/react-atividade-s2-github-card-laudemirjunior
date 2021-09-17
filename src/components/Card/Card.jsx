import "./Card.css";

function Card({ data }) {
  return (
    <div className="card-container">
      {data.map((item, index) => {
        return (
          <div className="card">
            <div className="image">
              <img src={item.owner.avatar_url} alt={item.id} key={index} />
            </div>
            <div className="data">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
