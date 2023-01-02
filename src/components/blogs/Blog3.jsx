import Subscribeform from "./Subscribe";
import BlogData from './Blogdata';
import Blogarticle from "./Blogarticle";
import Recommends from "./Recommends";
import third from "./3rd.jpg"

function Blog3 (){

    const Article = BlogData[2];
    return(
        <>
    <Blogarticle  src={third} header={Article.header} paragraph={Article.paragraph} header1={Article.header1} paragraph2={Article.paragraph2}
    paragraph3={Article.paragraph3} paragraph4={Article.paragraph4} />
        <Subscribeform />
        <Recommends />
        </> 
    )
}

export default Blog3