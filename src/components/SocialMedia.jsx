import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Death__thekidd?t=k7onse4dEB0PlDc4da9Clw&s=08">
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/Death-thekidd">
      <BsGithub/>
      </a>
    </div>
    <div>
      <a href="https://linkedin.com/in/death-thekidd">
      <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
