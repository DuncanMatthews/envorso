import React from "react";
import CtaArea from "@/src/components/homes/home/cta-are";
import portfolio_data from "@/src/data/portfolio-data";
import Header from "@/src/layout/headers/header";
import { useRouter } from "next/router";
import Error from "../404";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbAreaStudies from "@/src/common/breadcrumb-area-studies";


// working_process_data 
const working_process_data = [
  {
    id: 1,
    bg_color: "",
    icon: "flaticon-sketchbook",
    title: "Strat From Sketch",
    desctiption: "Maximize your presence on search engine results pages.",

  },
  {
    id: 2,
    bg_color: "cornblue-bg",
    icon: "flaticon-sketchbook",
    title: "Creative Process",
    desctiption: "Maximize your presence on search engine results pages.",

  },
  {
    id: 3,
    bg_color: "orange-bg",
    icon: "flaticon-sketchbook",
    title: "Design & Development",
    desctiption: "Maximize your presence on search engine results pages.",

  },
  {
    id: 4,
    bg_color: "blue-bg",
    icon: "flaticon-sketchbook",
    title: "Design & Development",
    desctiption: "Maximize your presence on search engine results pages.",

  },
]

// img_gallery_working_process

const img_gallery_working_process = [
  "/assets/img/portfolio/pf-details-gl-1.jpg",
  "/assets/img/portfolio/pf-details-gl-2.jpg",
  "/assets/img/portfolio/pf-details-gl-3.jpg",
]


// study_overview
const study_overview = [
  {
    id: 1,
    lists: [
      <>When it comes to Headless CMS systems, I’m a big fan of Ghost. Ghost is open-source and simple to use.</>,
      <>Oh, and it’s 100% free to set up and run. That’s because we will be running our Ghost instance locally</>
    ]
  },
  {
    id: 2,
    lists: [
      <>In this article, I will show you how you can use Ghost and  Gatsby together to get the ultimate personal blog</>,
      <>and then deploying to Netlify, taking advantage of their generous free tier.</>
    ]
  }
]


const CaseStudies = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the given ID from our_blog_data
  const study = portfolio_data.find((item) => item.id === Number(id));

  if (!study) {
    // Return a custom 404 page or error message if the post is not found
    return <Error />
  }


  return (
    <>
      <Header />
     <BreadcrumbAreaStudies />


      <div className="tp-pf-details-page-area pt-120 wow tpfadeUp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pf-details-page-banner p-relative">


                <div className="pf-details-banner-img1 w-img">

                  <img key={study.id} src={study.img} alt="" />

                </div>

                <div className="pf-details-banner__info">
                  <div className="row align-items-center align-items-xl-start">
                    <div className="col-lg-8">
                      <div className="pf-details-banner__info-left">
                        <span>
                          <b>Category:</b> Design & Development
                        </span>
                        <span>
                          <b>Category:</b> Client: Sharif Da Gazi
                        </span>
                        <span>
                          <b> Budget:</b>$12,000
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="pf-details-banner__info-right text-lg-end">
                        <a href="#">
                          Live Preview
                          <span>
                            <i className="fal fa-long-arrow-right"></i>
                          </span>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-pf-detials-main pt-60">
        <div className="container wow tpfadeUp">
          <h3 className="tp-blog-detials-title mb-25">Case study overview</h3>
          <p>{study.caseStudyOverview}</p>

          <h3 className="tp-blog-detials-title mb-25">The Solution</h3>
          <p>{study.solution}</p>

          <h3
            className="tp-blog-detials-title mb-25 wow tpfadeUp"
            data-wow-delay
          >
            The Results
          </h3>
          <p className="wow tpfadeUp">
            {study.results}
          </p>

          </div>


        {/* <!-- cta are  --> */}
        <CtaArea />
        {/* <!-- cta end --> */}
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;