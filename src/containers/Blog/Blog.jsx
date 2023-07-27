import { Helmet, HelmetProvider } from "react-helmet-async";
import './Blog.scss';
import { bannerBlog, advertisement1, advertisement2, blogImage } from "components/ImageList";
import { ProductCarousel } from "components/ProductCarousel";
import { useSelector } from "react-redux";
import Tab from "components/Tab";

const Blog = () => {
  const productsStore = useSelector((state) => state.products);
  const page = 'Blog';
  return (
    <HelmetProvider>
      <Helmet>
        <title> {page} </title>
      </Helmet>
      <div className="blog">
        <Tab className="blog-tab" page={page} category="Womens Dress" product="Angels malu" />
        <div className="blog-banner">
          <img src={bannerBlog} alt="" />
          <div className="blog-banner-title">
            <p>WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?</p>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-description"> 
            <b>The Dress</b>
            <p>
              It’s a tricky thing, being a wedding guest. <br/>
              Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp. <br />
              The rules surrounding wedding guest dressing are as nuanced as they come.
            </p>
            <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
            <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
            <p>In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
            <p>It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
            <div className="description-img">
              <img src={blogImage} alt="" />
            </div>
            <b>The Dress</b>
            <p>
              It’s a tricky thing, being a wedding guest. <br/>
              Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp. <br />
              The rules surrounding wedding guest dressing are as nuanced as they come.
            </p>
            <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
            <p>There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
            <p>In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
            <p>It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
            
          </div>
          <div className="blog-advertisement"> 
            <img src={advertisement1} alt="" />
            <img src={advertisement2} alt="" />
          </div>
        </div>
        <div className="blog-slider">
          <p>You May Also Like</p>
          <ProductCarousel productList={ productsStore.listProduct } />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Blog;
