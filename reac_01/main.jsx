function Header() {
  return <h1 className="header">Our Reviews</h1>;
}

function Review() {
  return (
    <div className="review">
      <div className="author">
        <div className="avatar"></div>

        <div className="info">
          <div className="name">Susan Smith</div>
          <div className="role">WEB DEVELOPER</div>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        numquam voluptatibus doloribus ut nobis quod, officia eaque eveniet
        beatae unde facilis vel itaque debitis. Error placeat nostrum accusamus
        sed perferendis.
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className="control">
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="review-card">
      <Review />

      <Control />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />

      <ReviewCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
