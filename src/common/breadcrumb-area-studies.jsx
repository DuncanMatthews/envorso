import Link from 'next/link';
import React from 'react';

import { useRouter } from 'next/router';
import portfolio_data from '../data/portfolio-data';

const BreadcrumbAreaStudies = ({ active_menu = "Case Study" }) => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the given ID and get its title
  const post = portfolio_data.find((item) => item.id === Number(id));
  const title = post ? post.title : "Our Company History";

  return (
    <>
      <div
        className="breadcrumb__area theme-bg pt-120 pb-120"
        style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <div className="breadcrumb__list mb-10">
                  <span><Link href="/">Home</Link></span>
                  <span className="dvdr dvdr-line"></span>
                  <span className="tp-bc-acive-menu">{active_menu}</span>
                </div>
                <h3 className="breadcrumb__title">{post.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbAreaStudies;
