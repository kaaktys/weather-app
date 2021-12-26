function Card() {
  return (
    <div style={container}>
      <p style={city}>Город: kiev</p>
      <p style={temperature}>Температура: 25°C</p>
      <button onClick={() => window.alert('update')}>Update weather</button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid grey",
  width: "200px",
  height: "200px",
  backgroundColor: "orange",
};

const city = {
  color: "white",
};

const temperature = {
  color: "white",
};

export default Card;
