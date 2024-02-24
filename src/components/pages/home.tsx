import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="image-home">
          <div className="image"></div>
        </div>
        <div className="text-home">
          <div className="text1">Every day is unique, just like our tea</div>
          <div className="text2">
            <div style={{ paddingBottom: "8px" }}>
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in.
            </div>
          </div>
          <div>
            <button className="teas-btn">Browes Teas</button>
          </div>
        </div>
      </div>
      <div className="more-main">
        <div className="more-home">
          <div className="more-item">
            <img alt="redeem" src={require("../images/redeem.png")} />
            <div>CERTIFICATED ORGANIC TEAS</div>
          </div>
          <div className="more-item">
            <img alt="local_cafe" src={require("../images/local_cafe.png")} />
            <span>450+ KIND OF LOOSEF TEA</span>
          </div>
          <div className="more-item">
            <img
              alt="local_shipping"
              src={require("../images/local_shipping.png")}
            />
            <span>FREE DELIVERY</span>
          </div>
          <div className="more-item">
            <img alt="sell" src={require("../images/sell.png")} />
            <span>SAMPLE FOR ALL TEAS</span>
          </div>
        </div>
        <div className="learn-btn-main">
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
      <div className="collection">
        <div className="collection_title">Our Collections</div>
        <div className="collection_list">
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">Black Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name"> Green Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1504382103100-db7e92322d39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1547149617-609fafa00a6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1596710629144-6f6abf933384?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
          <div className="collection_imgs">
            <img
              src="https://images.unsplash.com/photo-1609016617751-e80552ae6ec2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="collection_imgs_img"
            />
            <div className="collection_img_name">White Tea</div>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="blog_title">Last Blog Posts</div>
        <div className="blog_list">
          <div className="blog_main">
            <img
              src="https://plus.unsplash.com/premium_photo-1667682997815-eb1c21fb12b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea"
              className="blog_imgs_img"
            />
            <div className="blog_text_main">
              <div className="blog_inner_title">
                How to steep tea like a pro
              </div>
              <div className="p_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.
              </div>
              <div>
                <button className="blog_readmore_btn">READ MORE</button>
              </div>
            </div>
          </div>
          <div className="blog_main second">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600675206532-b0a6dbf01252?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tea"
                className="blog_imgs_img"
              />
            </div>
            <div className="blog_text_main">
              <div className="blog_inner_title">All about tea aromas</div>
              <div className="p_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.
              </div>
              <div>
                <button className="blog_readmore_btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_btn_main">
          <button className="blog_btn">Browse all posts</button>
        </div>
      </div>
      <div className="for">
        <div className="for_texties">
          <div className="for_text_main">FOR WHOLESALERS</div>
          <div className="for_text_dis">
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.
          </div>
          <div className="for_btn_main">
            <button className="for_btn">Get A Free Consultation</button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tea"
            className="for_imgs_img"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer_links">
          <div className="footer_main_heading">Collections</div>
          <div className="link_list">
            <li className="list_li">
              <a>Black teas</a>
            </li>
            <li className="list_li">
              <a>Green teas</a>
            </li>
            <li className="list_li">
              <a>White teas</a>
            </li>
            <li className="list_li">
              <a>Herbal teas</a>
            </li>
            <li className="list_li">
              <a>Matcha</a>
            </li>
            <li className="list_li">
              <a>Chai</a>
            </li>
            <li className="list_li">
              <a>Oolong</a>
            </li>
            <li className="list_li">
              <a>Rooibos</a>
            </li>
            <li className="list_li">
              <a>Teaware</a>
            </li>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links">
            <div className="footer_main_heading">Learn</div>
          </div>
          <div className="link_list">
            <li className="list_li">
              <a>About us</a>
            </li>
            <li className="list_li">
              <a>About our teas </a>
            </li>
            <li className="list_li">
              <a>Tea academy</a>
            </li>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links">
            <div className="footer_main_heading">Customer Service</div>
            <div className="link_list">
              <li className="list_li">
                <a>Ordering and payment </a>
              </li>
              <li className="list_li">
                <a>Delivery</a>
              </li>
              <li className="list_li">
                <a>Privacy and policy</a>
              </li>
              <li className="list_li">
                <a>Terms & Conditions</a>
              </li>
            </div>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links">
            <div className="footer_main_heading">Contact us</div>
            <div className="link_list">
              <li className="list_li">
                <a>
                  3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
                  Iran
                </a>
              </li>
              <li className="list_li">
                <a>Email: amoopur@gmail.com</a>
              </li>
              <li className="list_li">
                <a>Tel: +98 9173038406</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
