import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  //const myArray = [1,2,3,4,5]

  //const [num1, num2, num3] = myArray
  //console.log(num1, num2, num3)

  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
