import React, { Component } from "react";
import "./directory.component.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "/images/hats.png",
          id: 1,
          linkUrl: "shop/hats",
          size: "large",
        },
        {
          title: "jackets",
          imageUrl: "/images/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
          size: "large",
        },
        {
          title: "sneakers",
          imageUrl: "/images/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "large",
        },
        {
          title: "womens",
          imageUrl: "/images/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "/images/hats.png",
          id: 5,
          linkUrl: "shop/mens",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
