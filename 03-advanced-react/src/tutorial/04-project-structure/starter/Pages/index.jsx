import Home from "../../final/Pages/Home";
import About from "../../final/Pages/About";

// 1
export { Home, About };
// => import { Home, About}
// 2
// export { Home };
// export { About };
// => import { Home, About}

// 3
// export { Home };
// export default About;
// => import { Home, About}
// => import About, { Home }
// => import { Home }, About (x)
