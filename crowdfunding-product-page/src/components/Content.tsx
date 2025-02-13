import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import data from "../json/modal-data.json";
import "./Content.css";
import logo from "../../public/assets/logo-mastercraft.svg"

type modal = {
  title: string;
  price: number;
  left: number;
  content: string;
}

const Content = () =>{

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="container is-max-tablet">
      <img src={logo} className=""/>
      <div className="section">
        <h1 className="title">Mastercraft Bamboo Monitor Riser</h1>
        <h2 className="subtitle">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h2>
        <div className="is-flex is-justify-content-space-between">
          <button className="button is-success is-rounded px-5 py-4" onClick={openModal}>Back this project</button>
          <button className="button is-light is-rounded px-5 py-4">Bookmark</button>
        </div>
      </div>

      <div className="section">
        <div className="columns">
          <div className="column is-one-third">
            <h1 className="title">$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className="column is-one-third">
            <h1 className="title">5,007</h1>
            <p>total backers</p>
          </div>
          <div className="column is-one-third">
            <h1 className="title">56</h1>
            <p>days left</p>
          </div>
        </div>


        {/* 막대 그래프 */}
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>

      <section className="section">
        <div className="content">
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        </div>
      {
        data.map((d:modal, index:number)=> (
          <div className="box">
          {
            d.left > 0 ? (
              <>
                <div className="is-flex is-justify-content-space-between">
                  <div className="title is-6 has-text-grey-lighter">{d.title}</div>
                  <div className="has-text-primary">Pledge ${d.price} or more</div>
                </div>
                <div className="content">
                  <p>{d.content}</p>
                </div>
                <div className="is-flex is-justify-content-space-between">
                  <div className=""><span className="title is-4 mr-2">{d.left}</span>left</div>
                  <div className="">
                    <button className="button is-rounded is-success has-text-white">Select Reward</button>
                  </div>
                </div>
              </>
            )
            :
            (
              <>
                <div className="is-flex is-justify-content-space-between">
                  <div className="title is-6 has-text-grey-lighter">{d.title}</div>
                  <div className="has-text-primary-light">Pledge ${d.price} or more</div>
                </div>
                <div className="content has-text-grey-lighter">
                  <p>{d.content}</p>
                </div>
                <div className="is-flex is-justify-content-space-between">
                  <div className="has-text-grey-lighter"><span className="title is-4">{d.left}</span>left</div>
                  <div className="">
                  <button className="button is-rounded has-background-grey-light has-text-white">Out of stock</button>
                  </div>
                </div>
              </>
            )
          }
          </div> //box tag close
        ))  
      }
      </section>
      <Modal isOpen = {isOpen} closeModal = {closeModal}/>
    </div>
  );
}

export default Content;

