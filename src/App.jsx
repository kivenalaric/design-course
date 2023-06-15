import './App.css';
import backgrounds from './background';
// import { AiOutlineMenu } from 'react-icons/ai';

function App() {
  return (
    <main className="main">
      <nav className="nav-bar">
        <div className="logo-div">
          <h1>AH</h1>
        </div>
        <div className="nav-right">
          <button className="login-btn" type="button">
            LOGIN
          </button>
          <button type="button" className="menu-btn">
            {/* <AiOutlineMenu className="menu-icon" /> */}
            <p className="menu-icon">MENU</p>
          </button>
        </div>
      </nav>
      <section className="inner-body">
        <div className="welcome-div">
          <div className="brand-sec">
            <div className="logo-div2">
              <h1>AH</h1>
            </div>
            <h1 className="brand-name">THE ART HOME</h1>
            <p>Be Creative</p>
          </div>

          <p>Bringing to you creative and magnificient art pieces.</p>
          <div className="navigate">
            <p>gallery.</p>
            <p>about.</p>
            <p>contact.</p>
          </div>
        </div>
        <div className="gallery-main">
          <div className="gallery-welcome">
            <h2>gallery.</h2>
            <p>download & print. bring the beauty of art to you home.</p>
          </div>
          <div className="gallery-holder">
            {backgrounds.map((data) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${data.image})`,
                  }}
                  className="gallery-image"
                >
                  <div className="image-inner">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="scroll-over">
          <div className="empty" />
        </div>
        <div className="about-sec">
          <h2>about</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            excepturi placeat laborum. Odit quae distinctio ratione ex
            voluptates earum dicta, architecto illo nulla, veniam veritatis
            doloribus fugit iusto adipisci obcaecati. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Odio maiores obcaecati ut alias
            numquam? Debitis deserunt rem, quisquam assumenda inventore,
            blanditiis, voluptatem molestias consequatur beatae vero eius
            perferendis tenetur expedita.
          </p>
        </div>
        <div className="scroll-over2">
          <div className="empty" />
        </div>
      </section>
    </main>
  );
}

export default App;
