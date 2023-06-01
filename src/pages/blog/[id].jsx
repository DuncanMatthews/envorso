import CommentForm from '@/src/forms/comment-form';
import Link from 'next/link';
import React from 'react';
import Category from '@/src/components/blog-pages/category';
import PopularFeeds from '@/src/components/blog-pages/popular-feeds';
import SidebarSearch from '@/src/components/blog-pages/sidebar-search';
import Tags from '@/src/components/blog-pages/tags';
import our_blog_data from '@/src/data/our-blog-data';
import { useRouter } from 'next/router';
import Error from '../404';
import Header from '@/src/layout/headers/header';
import HeaderTwo from '@/src/layout/headers/header-2';
import HeaderEight from '@/src/layout/headers/header-8';
import HeaderSix from '@/src/layout/headers/header-6';
import BreadcrumbArea from '@/src/common/breadcrumb-area';

const commet_data = [
    {
        id: 1,
        img: "/assets/img/blog/comments/commnet-2.png",
        name: "Rosalina Kelian",
        date: "24th March 2022",
        children_cls: "",
        des: <>For all the assets is hard and time-consuming technical work. And, of
        course, the result needs to be seamless and delightful — dare we say, even
        fun — to develop and maintain. Regardless of whether you’re ing up a
        storefront for a new merchant..</>,
    },
    {
        id: 2,
        img: "/assets/img/blog/comments/comment-2.png",
        name: "Kristin Watson",
        date: "MARCH 10, 2020",
        children_cls: "children",
        des: <>For all the assets is hard and time-consuming technical work. And, of
        course, the result needs to be seamless and delightful — dare we say, even
        fun — to develop and maintain. Regardless of whether you’re ing up a
        storefront for a new merchant..</>,
    },
    {
        id: 3,
        img: "/assets/img/blog/comments/comment-3.png",
        name: "Arista Williamson",
        date: "MARCH 10, 2020",
        children_cls: "",
        des: <>For all the assets is hard and time-consuming technical work. And, of
        course, the result needs to be seamless and delightful — dare we say, even
        fun — to develop and maintain. Regardless of whether you’re ing up a
        storefront for a new merchant..</>,
    },

]

const BlogDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the given ID from our_blog_data
  const post = our_blog_data.find((item) => item.id === Number(id));

  if (!post) {
    // Return a custom 404 page or error message if the post is not found
    return <Error />
  }

  return (
    <>
    <Header />
    <BreadcrumbArea />
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* left site */}
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-12">
              <div className="postbox__wrapper pr-50 mr-30">
                <div className="postbox__border">
                  <article className="postbox__item format-stander mb-30 transition-3">
                    <div className="postbox__thumb p-relative mb-30">
                      <Link href="/blog-details" className="w-img">
                        <img
                          src="/assets/img/blog/blog-list-1.jpg"
                          alt="them-pure"
                        />
                      </Link>
                    </div>
                    <div className="postbox__content postbox__content-single">
                      <div className="postbox__meta mb-25">
                        <span>
                          <a href="#">
                            <i className="fal fa-user"></i>Tushar
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fal fa-comments"></i> 02 Comments
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fal fa-calendar-alt"></i> July 21,
                            2020
                          </a>
                        </span>
                      </div>

                      <h3 className="postbox__title">{post.title}</h3>
                      <div className="postbox__text-single">{post.content}</div>
                    </div>
                  </article>

                    
                    <div className="tp-blog-dt-pagination tp-border-bottom pb-50 mb-30">
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="tp-blog-dt-pagination-title mb-25">
                            Releted Tags
                          </h3>
                          <div className="tp-blog-dt-pagination-tagcloud">
                            <a href="#">business</a>
                            <a href="#">Desgin</a>
                            <a href="#">consult</a>
                          </div>
                        </div>
                        <div className="col-md-6 text-md-end">
                          <h3 className="tp-blog-dt-pagination-title mb-25">
                            Social Share
                          </h3>
                          <div className="tp-blog-dt-pagination-social">
                            <a href="#">
                              <span>
                                <i className="fab fa-facebook-f"></i>
                              </span>
                            </a>
                            <a href="#">
                              <span>
                                <i className="fab fa-twitter"></i>
                              </span>
                            </a>
                            <a href="#">
                              <span>
                                <i className="fab fa-linkedin-in"></i>
                              </span>
                            </a>
                            <a href="#">
                              <span>
                                <i className="fab fa-pinterest"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tp-blog-nav d-md-flex justify-content-md-between align-items-center tp-border-bottom mb-60">
                      <div className="tp-blog-nav-prev mb-30">
                        <span>Prev Post</span>
                        <h3 className="tp-blog-nav-title">
                          <a href="#"> Tips On Minimalist</a>
                        </h3>
                      </div>
                      <div className="tp-blog-nav-center mb-30 d-none d-xl-block">
                        <img
                          src="/assets/img/icons/9-dot-icon.png"
                          alt="them-pure"
                        />
                      </div>
                      <div className="tp-blog-nav-left mb-30">
                        <span>Next Post</span>
                        <h3 className="tp-blog-nav-title">
                          <a href="#"> Less Is More</a>
                        </h3>
                      </div>
                    </div>

                    <div className="tp-post-dt-author-area d-md-flex align-items-lg-center mb-60">
                      <div className="tp-post-dt-author__img mr-30 mb-30">
                        <img
                          src="/assets/img/blog/sb-author.jpg"
                          alt="them-pure"
                        />
                      </div>
                      <div className="tp-post-dt-author__info">
                        <span>Written by</span>
                        <h3 className="tp-post-dt-author__name">
                          Kelian M. Ronson
                        </h3>
                        <p>
                          Getting fast initial render with streaming server-side
                          rendering, efficient component-level updates and state
                          transitions, while also setting up a performant
                          loading and bundling strategy.
                        </p>
                      </div>
                    </div>

                    <div className="postbox__comment mb-65">
                      <h3 className="postbox__comment-title">04 Comment</h3>
                      <ul>
                        {commet_data.map((item, i) => (
                          <li key={i} className={item?.children_cls}>
                            <div className="postbox__comment-box mr-80 d-md-flex">
                              <div className="postbox__comment-info d-md-flex">
                                <div className="postbox__comment-avater mr-20">
                                  <img src={item.img} alt="them-pure" />
                                </div>
                              </div>
                              <div className="postbox__comment-text ml-10 p-relative">
                                <div className="postbox__comment-name">
                                  <h5>{item.name}</h5>
                                  <span className="post-meta"> 
                                    {item.date}
                                  </span>
                                  <div className="postbox__comment-reply">
                                    <a href="#">
                                      <i className="fal fa-share-all"></i>Reply
                                    </a>
                                  </div>
                                </div>
                                <p>{item.des}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="tp-blog-comment-form">
                      <CommentForm />
                    </div>
                  </div>
                </div>
              </div>

              {/* right site */}
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-12">
                <div className="sidebar__wrapper">
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">About Me</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__about text-center">
                        <div className="sidebar__about-img">
                          <img
                            src="/assets/img/about/sidebar-about-me.jpg"
                            alt="them-pure"
                          />
                        </div>
                        <h3 className="sidebar__about-name">
                          Alonso D. Dowson
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consect <br /> etur
                          adipisicing elit, sed do eiusmod <br />
                          tempor incididunt ut labore.
                        </p>
                        <div className="sidebar__about-social">
                          <span>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SidebarSearch />
                  <PopularFeeds />
                  <Category />
                  <Tags />
                </div>
                <div className="sidebar__banner p-relative">
                  <h4 className="mb-30">Add Banner</h4>
                  <div className="sidebar__banner-content">
                    <img src="/assets/img/promotion/ads.jpg" alt="them-pure" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default BlogDetailsArea;