import React from "react";
import instagram from "../../assets/Logo/instagram.svg";
import forbes from "../../assets/Logo/forbes.svg";
import group from "../../assets/Logo/Group.svg";
import samsung from "../../assets/Logo/samsung.svg";
import tinder from "../../assets/Logo/tinder.svg";
import star from "../../assets/Logo/star.svg";

export default function LogosSection() {
  return (
    <section className="flex justify-center items-center gap-[40px] h-[240px]">
      <img src={instagram} alt="Instagram" />
      <img src={samsung} alt="Samsung" />
      <img src={forbes} alt="Forbes" />
      <img src={group} alt="Group" />
      <img src={tinder} alt="Tinder" />
      <img src={star} alt="Star" />
    </section>
  );
}
