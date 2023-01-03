
import Subscribeform from "./Subscribe";
import BlogData from './Blogdata';
import Blogarticle from "./Blogarticle";
import Recommends from "./Recommends";
import first from "./1st.jpg"

function Blog (){
    const Article = BlogData[0];
    return(
        
        <div className=" bg-slate-50 ">
            <div className="p-20">
        <Blogarticle  src={first} header={Article.header} paragraph={Article.paragraph} header1={Article.header1} paragraph2={Article.paragraph2}
        paragraph3={Article.paragraph3} paragraph4={Article.paragraph4} />
            <Subscribeform />
            <Recommends />
            </div>
            </div>
    )
}






export default Blog 