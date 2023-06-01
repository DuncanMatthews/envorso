import Link from "next/link"

const our_blog_data =[
    {
        id: 1,
        home_2: true,
        img: "/assets/img/blog/it-blog-1.jpg",
        date: "24",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: "Way Technology Has Improve Business Today",
        post: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s",
        content: (
            <>
              <p>
                A great commerce experience cannot be distilled to a single number.
                It’s not a Lighthouse score, or a set of Core Web Vitals figures,
                although both are important inputs. A great commerce experience is a
                trilemma that carefully balances competing needs of delivering great
                customer experience, dynamic storefront capabilities, and long-term
                business — conversion, retention, re-engagement — objectives. As
                developers, we rightfully obsess about the customer experience,
                relentlessly working to squeeze every millisecond out of the critical
                rendering path, optimize input latency, and eliminate jank. At the
                limit, statically generated, edge delivered, and HTML-first pages look
                like the optimal strategy. That is until you are confronted with the
                realization that the next step function in improving conversion rates
                and business.
              </p>
              <div className="tp-inner-pt-section mb-60 tp-border-bottom">
                <Link href="#" className="w-img">
                  <img src="/assets/img/blog/blog-list-2.jpg" alt="them-pure" />
                </Link>
                <h4 className="tp-inner-pt-section__title mb-30">
                  A cleansing hot shower or bath
                </h4>
                <p className="mb-40">
                  The journey, often, starts “simple” with localization. But then,
                  quickly advances to contextual pricing, juggling complexity of large
                  and frequently updated product catalog, managing continuously
                  running multivariate tests and promotion campaigns, and serving
                  customer-tailored dynamic recommendations. Eventually, you reach a
                  realization that every page is similar to an open Tetris board where
                  each “slot” can and should be dynamically tailored by dynamic
                  visitor preferences, all powered by an ever-growing set of dynamic
                  business rules.
                </p>
              </div>
              <div className="tp-inner-pt-section mb-60 tp-border-bottom">
                <h4 className="tp-inner-pt-section__title mb-30">
                  Setting the mood with incense
                </h4>
                <div className="d-lg-flex">
                  <div className="sm-img pr-30">
                    <img
                      src="/assets/img/blog/blog-sm-single.jpg"
                      alt="them-pure"
                    />
                  </div>
                  <div>
                    <p>
                      From connecting back-office operations to front-of-the-house A/B
                      testing and dynamic personalization for each customer, the
                      shared foundation is fast server-side rendering powered by fast
                      storefront data access. On top of this foundation, we add layers
                      of caching, prerendering and edge delivery optimizations — not
                      the other way around.
                    </p>
                  </div>
                </div>
              </div>
              <blockquote>
                <div className="quote-box text-center">
                  <span className="quote-icon">
                    <i className="flaticon-quote"></i>
                  </span>
                  <p>
                    Choices to take a holiday and travelling out in this pandemic
                    situation are limited. Why not take a stay action on quality.
                  </p>
                  <cite>Rosalina D. William</cite>
                  <span>founder</span>
                </div>
              </blockquote>
              <p>
                Surveying the existing landscape of available developer tools and
                runtimes, we felt that there is a gap. Enabling dynamic commerce
                requires close integration between server and client, an optimized
                streaming and data fetch strategy, and a production platform that
                operates at scale. These are hard technical problems that Shopify can
                help solve and this is why we’ve been hard at work on the Hydrogen
                framework. It’s a React-based framework optimized for commerce and
                specialized to be powered by Shopify APIs and infrastructure: The
                future of commerce is dynamic and personalized.
              </p>
            </>
          ),
    }, 
    {
        id: 2,
        home_2: true,
        img: "/assets/img/blog/it-blog-2.jpg",
        date: "16",
        month: "Dec",
        category: "Technology",
        post_by: "Admin",
        title: "Truth be told, you might have the best blog",
        post: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"
    }, 
    {
        id: 3,
        home_2: true,
        img: "/assets/img/blog/it-blog-3.jpg",
        date: "10",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: "The most effective blog titles are the ones",
        post: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"
    },

    // home 03 

    {
        id: 4,
        home_3: true,
        img: "/assets/img/blog/da-blog-1.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"

    },
    {
        id: 5,
        home_3: true,
        img: "/assets/img/blog/da-blog-2.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 6,
        home_3: true,
        img: "/assets/img/blog/da-blog-3.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"

    },

    // home 04
    {
        id: 7,
        home_4: true,
        img: "/assets/img/blog/app-blog-1.jpg",
        date: "23",
        month: "Nov",
        category: "Software",
        post_by: "Admin",
        title: <>A Technology His Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"

    },
    {
        id: 8,
        home_4: true,
        img: "/assets/img/blog/app-blog-2.jpg",
        date: "23",
        month: "Nov",
        category: "Software",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 9,
        home_4: true,
        img: "/assets/img/blog/app-blog-3.jpg",
        date: "23",
        month: "Nov",
        category: "Software",
        post_by: "Admin",
        title: <>The most effective blog titles are the ones </>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"

    },
    {
        id: 10,
        home_4: true,
        img: "/assets/img/blog/app-blog-4.jpg",
        date: "23",
        month: "Nov",
        category: "Software",
        post_by: "Admin",
        title: <>A Technology His Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },

    // home 05 

    {
        id: 11,
        home_5: true,
        img: "/assets/img/blog/ptg-blog-1.jpg",
        date: "21, 2022",
        month: "June",
        category: "Software",
        post_by: "Admin",
        title: <>the Technology His Improve  Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"
    },
    {
        id: 12,
        home_5: true,
        img: "/assets/img/blog/ptg-blog-2.jpg",
        date: "21, 2022",
        month: "June",
        category: "Software",
        post_by: "Admin",
        title: <>the Technology His Improve  Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"
    },
    {
        id: 13,
        home_5: true,
        img: "/assets/img/blog/ptg-blog-3.jpg",
        date: "21, 2022",
        month: "June",
        category: "Software",
        post_by: "Admin",
        title: <>the Technology His Improve  Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"
    },




    // home 07 
    {
        id: 14,
        img: "/assets/img/blog/da-blog-1.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <>Way Technology Has Improve Business</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"

    },
    {
        id: 15,
        img: "/assets/img/blog/da-blog-2.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <> Truth be told, you might have</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 16,
        img: "/assets/img/blog/da-blog-3.jpg",
        date: "23",
        month: "Nov",
        category: "Technology",
        post_by: "Admin",
        title: <>The most effective blog titles</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"

    },


    // home 08

    {
        id: 17,
        img: "/assets/img/blog/ca-blog-1.jpg",
        date: "29",
        month: "June",
        category: "Technology",
        post_by: "Admin",
        title: <>Way Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"
    },

    {
        id: 18,
        img: "/assets/img/blog/ca-blog-2.jpg",
        date: "25",
        month: "Dec",
        category: "Technology",
        post_by: "Admin",
        title: <>The most effective blog titles are the ones</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"
    },
    {
        id: 19,
        img: "/assets/img/blog/ca-blog-3.jpg",
        date: "16",
        month: "July",
        category: "Technology",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog </>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"
    },

    // home 09
    {
        id: 20,
        img: "/assets/img/blog/ha-blog-1.jpg",
        date: "21",
        month: "June",
        category: "Design",
        post_by: "Admin",
        title: <>A Technology His Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"
    },
    {
        id: 21,
        img: "/assets/img/blog/ha-blog-2.jpg",
        date: "21",
        month: "June",
        category: "Architecture",
        post_by: "Admin",
        title: <>Truth be told, you might have the best blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"
    },
    {
        id: 22,
        img: "/assets/img/blog/ha-blog-3.jpg",
        date: "21",
        month: "June",
        category: "Software",
        post_by: "Admin",
        title: <>The most effective blog titles are the ones </>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"
    },
    {
        id: 23,
        img: "/assets/img/blog/ha-blog-4.jpg",
        date: "21",
        month: "June",
        category: "Architecture",
        post_by: "Admin",
        title: <>The most effective blog titles are there </>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"
    },

    // home 10
    {
        id: 24,
        img: "/assets/img/blog/da-blog-1.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>Way Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"

    },
    {
        id: 25,
        img: "/assets/img/blog/da-blog-2.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>Truth Be Told, You Might Have The Best Blog</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 26,
        img: "/assets/img/blog/da-blog-3.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>Currency Check And Easier Tracking System</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"

    },

    // for blgo page 
    {
        id: 27,
        img: "/assets/img/blog/da-blog-1.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".3s"

    },
    {
        id: 28,
        img: "/assets/img/blog/da-blog-3.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".5s"

    },
    {
        id: 29,
        img: "/assets/img/blog/da-blog-2.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 30,
        img: "/assets/img/blog/blog-gd-4.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 31,
        img: "/assets/img/blog/blog-gd-5.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 32,
        img: "/assets/img/blog/blog-gd-6.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 33,
        img: "/assets/img/blog/blog-gd-7.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 34,
        img: "/assets/img/blog/blog-gd-8.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 35,
        img: "/assets/img/blog/blog-gd-9.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 36,
        img: "/assets/img/blog/blog-gd-10.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 37,
        img: "/assets/img/blog/blog-gd-11.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },
    {
        id: 38,
        img: "/assets/img/blog/blog-gd-12.jpg",
        date: "24",
        month: "Nov",
        category: "Cime Case",
        post_by: "Admin",
        title: <>The Technology Has Improve Business Today</>,
        des: <>They play a role in making operations more seamless
        bridging the gap between authorities, consumers &
        businesses running good. …</>,
        delay: ".4s"

    },

    


]
export default our_blog_data