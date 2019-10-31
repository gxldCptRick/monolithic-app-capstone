import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegistrationPage";
import pino from "pino";

const host = "localhost";
const port = 3030;
export const createDefaultLogger = () =>
  pino({ level: "debug", browser: { asObject: true } });
export const baseEndpoint = `http://${host}:${port}/api/`;
export const DefaultPage = HomePage;
export const ApplicationLinks = [
  { link: "/home", name: "Home", display: HomePage },
  { link: "/login", name: "Student Login", display: LoginPage },
  { link: "/apply/register", name: "Apply Now", display: RegisterPage }
];

export const ApplicationComponents = [
  { link: "/home", display: HomePage },
  { link: "/login", display: LoginPage },
  { link: "/apply/register", display: RegisterPage }
];

// Cards Can Have These Props
//   title,
//   description,
// full description of an image
//   image = { src: "", alt: "" },
//  add modifiers for your descriptions looks
//   descriptionStyles = [],
//  add modifiers for your headers looks
//   headerStyles = [],
//  add modifiers for your cards looks
//   cardStyles = []

export const HomePageCards = [
  {
    title: "Join the Tech Side",
    link: "/apply/register",
    description:
      "Submit your Application for Admission to secure your spot in our upcoming Fall 2019 cohort. By completing the application, you will also be considered for a Neumont merit scholarship. No separate application is required.",
    image: {
      src:
        "https://thoughtcatalog.files.wordpress.com/2018/06/leftoverpuns-computer.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all",
      alt: "Awesome Laptop"
    },
    styles: {
      card: ["card--flipped", "round-upper-left"],
      imageStyle: ["round-upper-left"],
      imageFrame: ["round-upper-left"]
    }
  }
];
