import React from "react";
import "./LandingPage.css";
import TopSection from "../../components/cards/top/TopSection";
import { NavLink } from "react-router-dom";
import StoryCard from "../../components/cards/StoryCard/StoryCard";
import IconTextCard from "../../components/cards/IconTextCard";
import RatingCard from "../../components/cards/RatingCard";
import Card3 from "../../components/cards/Card3";
import Contact1 from "../../components/cards/contact/Contact1";
import Contact2 from "../../components/cards/contact/Contact2";

const LandingPage = () => {
  return (
    <>
      <TopSection
        heading={"Only Quality Food"}
        text={
          "We are software development company offereing offshore software development for large and small companies"
        }
      />

      <StoryCard />

      <section className="section container">
        <div className="fresh-ingredients container">
          <h2 className="heading1">Only The Best</h2>
          <h1>Fresh Ingredients, Tasty Meals</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            nobis perspiciatis! Eveniet soluta incidunt magni! Porro ab fuga
            sint ipsam dolor unde placeat vitae, deleniti fugit! Fuga temporibus
            eveniet vitae.
          </p>
          <div className="row">
            <NavLink className="btn2" to={"/"}>
              View items{" "}
            </NavLink>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="card-image-container section">
          <div className="row">
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
          </div>
          <div className="row">
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
          </div>
          <div className="row">
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
          </div>
          <div className="row">
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
            <IconTextCard
              price={"$26.95"}
              heading={"Quality Food"}
              text={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil totam exercitationem vero laudantium sed voluptate consequuntur voluptatum consequatur velit nisi cum corrupti doloribus eum deserunt possimus beatae sunt, tempore neque. Architecto molestias inventore esse quod tempore beatae ex voluptatibus quis dolores accusantium reiciendis, aperiam."
              }
            />
            <img src="assets/fruits/chicken.jpg" alt="" className="" />
          </div>
        </section>

        <section className="section container testimonials">
          <div className="content">
            <h3 className="heading1">Testimonials</h3>
            <h1 className="headline">What People are Saying</h1>
            <div className="row jcsb">
              <RatingCard
                heading={`"A Great Find"`}
                text={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet quos eos culpa iure cum tempore voluptatibus incidunt ipsam commodi."
                }
                bottom={"DIVI"}
              />
              <RatingCard
                heading={`"A Great Find"`}
                text={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet quos eos culpa iure cum tempore voluptatibus incidunt ipsam commodi."
                }
                bottom={"DIVI"}
              />
              <RatingCard
                heading={`"A Great Find"`}
                text={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet quos eos culpa iure cum tempore voluptatibus incidunt ipsam commodi."
                }
                bottom={"DIVI"}
              />
              <RatingCard
                heading={`"A Great Find"`}
                text={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet quos eos culpa iure cum tempore voluptatibus incidunt ipsam commodi."
                }
                bottom={"DIVI"}
              />
            </div>
          </div>
        </section>
      </main>
      <section className="section container dont-miss bg-sb">
        <div className="content ">
          <h3 className="heading1">Don't Miss</h3>
          <h1 className="headline">What People are Saying</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero id distinctio illum debitis praesentium error, ipsum quidem
            quas magnam!
          </p>
          <div className="row">
            <Card3
              src={"assets/fruits/kitchen.jpg"}
              category
              title={"Test Food Title"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero."
              }
            />
            <Card3
              src={"assets/fruits/kitchen.jpg"}
              category
              title={"Test Food Title"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero."
              }
            />
            <Card3
              src={"assets/fruits/kitchen.jpg"}
              category
              title={"Test Food Title"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur in explicabo repellendus error autem vero."
              }
            />
          </div>
        </div>
        <button className="btn2">Read More</button>
      </section>

      <section id="contact-section">
        <div className="contact-section container">
          <div className="row">
            <Contact1 />
            <Contact2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
