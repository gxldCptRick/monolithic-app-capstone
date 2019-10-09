import HomePage from "../pages/Home";

export const DefaultPage = HomePage;
export const ApplicationLinks = [
  { link: "/home", name: "Home", display: HomePage }
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
