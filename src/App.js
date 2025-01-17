import './App.css';
import Content from './Content';
import Navbar from './Navbar';
import Projects from './projects';
import Heading from './heading'
import './projects.css'
import Header from './header';
import Contact from './contact';
import {motion} from "framer-motion"
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  const projectsData = [
    {
      title: "Mask_Detection",
      views: "4.5",
      my_image: "https://5.imimg.com/data5/PI/FD/NK/SELLER-5866466/images-500x500.jpg",
    },
    {
      title: "Email_Spam",
      views: "4.0",
      my_image: "https://i2.wp.com/thecleverprogrammer.com/wp-content/uploads/2020/05/Untitled-46.png?fit=580%2C342&ssl=1",
    },
    {
      title: "Project_Protfolio",
      views: "4.1",
      my_image: "https://www.rankontechnologies.com/wp-content/uploads/2024/05/How-Website-is-Created-And-How-Does-It-Work-02.jpg",
    },
    {
      title: "Churn Project",
      views: "4.2",
      my_image: "https://blog-static.userpilot.com/blog/wp-content/uploads/2024/05/What-is-a-Customer-Churn-Prediction-How-to-Set-It-Up.png",
    },
    {
      title: "Recommandation",
      views: "4.0",
      my_image: "https://media.licdn.com/dms/image/v2/D5622AQECIFL36L5eEg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727454228372?e=1739404800&v=beta&t=3rOUqyXG4_aqVVOjpIH2JxPMoNyUWha6-94XFVnDFRA",
    },
    {
      title: "Pizza SQL Querys",
      views: "4.5",
      my_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfzw3O3WMofolYQtFfKna2SjcpK-LRQu2Kg&s",
    },
  ];
    
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setStartAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   




  return (
    <div className="App">

<Navbar id="my_navbar" />
<Content/>
<Heading/>

<div id="blog">
    
{projectsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: index * 0.3,
            duration: 0.5,
          }}
        >
          <Projects
            title={project.title}
            views={project.views}
            my_image={project.my_image}
          />
        </motion.div>
      ))}
        
      
</div>

<Contact/>
<Header/>


    </div>
  );
}

export default App;
