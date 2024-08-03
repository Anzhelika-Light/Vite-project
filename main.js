// Відео 12. JSX синтаксис
// import data from "./src/12.jsx";
import { template } from "./src/12.jsx";
// console.log(template.outerHTML);
document.querySelector("#app").appendChild(template);

// Відео 10-11. Glob-імпорти
// const modules = import.meta.glob("./src/10/*.js");
// const modules = import.meta.glob("./src/10/*.js", { eager: true });
// const modules = import.meta.glob("./src/10/*.js", { as: "raw", eager: true });
// const modules = import.meta.glob("./src/10/*.js", { as: "url", eager: true });
// const modules = import.meta.glob("./src/10/*.js", {
//   import: "name",
//   eager: true,
// });
// console.log(modules);
// document.addEventListener("click", () => {
//   Object.values(modules).forEach((module) => {
//     module().then((data) => {
//       console.log(data);
//     });
//   });
// });

// Відео 8. Імпорт файлів
// import imageUrl from "./src/assets/img/kitten.avif";
// console.log(imageUrl);
// document.getElementById("image").src = imageUrl;

// import url from "./src/assets/07.json?url";
// console.log(url); // при использовании параметра url в переменную url записівается путь к файлу 07.json

// import imageUrl from "./src/assets/img/kitten.avif?raw";
// console.log(imageUrl);

// Відео 7. Імпорт json-файлів
// import data from "./src/assets/07.json";
// console.log(data);
// import { name, age } from "./src/assets/07.json";
// console.log(name, age);

// Відео 6
// import styles from "./src/assets/06.module.scss";
// console.log(styles);
// document.body.className = styles.wrapper;

// Відео 4. Як працювати з css-специфікацією 'css-модулі'
// import stylesA from "./src/assets/04b.module.css";
// import { heading as headingColor } from "./src/assets/04b.module.css";
// import { heading as headingFontSize } from "./src/assets/04a.module.css";

// console.log(stylesA);
// console.log(stylesB);

// document.querySelector(
//   ".heading"
// ).className = `${headingColor} ${headingFontSize}`;

// Відео 3. Імпорт css-файлів
// import "./src/assets/03.css";

//  import styles from "./src/assets/03.css?inline";
// console.log(styles);

// const styleEl = document.createElement("style");
// styleEl.innerHTML = styles;
// document.querySelector("head").append(styleEl);
