import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogData from './Blogdata';

function Recommends({ id }) {
  const { t } = useTranslation();
  const blogs = BlogData.filter((blog) => blog.id !== id);
  const navigate = useNavigate();

  const handleBlog1 = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    return navigate(`/blog/${blogs[0].id}`);
  };
  const handleBlog2 = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    return navigate(`/blog/${blogs[1].id}`);
  };

  return (
    <div
      id={id}
      className="xl:w-[75rem] xl:h-[35rem] sm:w-[40rem] sm:h-[rem] xl:pt-[10rem] sm:pt-[5rem] "
    >
      <p className=" 2xl:text-3xl sm:text-3xl uppercase ">
        {t('Recommended for you')}
      </p>
      <div className="xl:flex space-x-4 xl:pt-[3rem]">
        <button
          type="submit"
          onClick={handleBlog1}
          className=" rounded  xl:w-[27rem] xl:h-[15rem] sm:w-[15rem] sm:h-[10rem] "
        >
          {' '}
          <img src={blogs[0].src} alt="second" />{' '}
        </button>
        <button
          type="submit"
          onClick={handleBlog2}
          className=" rounded xl:w-[27rem] xl:h-[15rem] sm:w-[15rem] sm:h-[10rem]"
        >
          {' '}
          <img src={blogs[1].src} alt="third" />{' '}
        </button>
      </div>
    </div>
  );
}
export default Recommends;
