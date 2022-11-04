function Header() {
  return <h1 className="header">Our Reviews</h1>;
}

function Review() {
  return (
    <div className="review">
      <div className="author">
        <div
          className="avatar"
          style={{
            backgroundImage:
              "url(" +
              "https://reactlink.com/static/app-assets/images/user/12.jpg" +
              ")",
          }}
        ></div>

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

// ÔN LẠI BÀI CŨ

function Time() {
  const now = new Date();

  return <p> It's {now.toLocaleDateString()}</p>;
}

function Hello(props) {
  console.log(props.children);
  return (
    <h1>
      Hello {props.user.name} {props.children}
    </h1>
  );
}

function App() {
  const currentUser = {
    name: "Tuan",
    age: 23,
    role: "DEV",
  };
  return (
    <div className="app">
      <Header />
      <ReviewCard />
      <Hello user={currentUser}>
        {[
          <span>Con được thêm</span>,
          <span>Con được thêm</span>,
          <span>Con được thêm</span>,
        ]}
      </Hello>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
