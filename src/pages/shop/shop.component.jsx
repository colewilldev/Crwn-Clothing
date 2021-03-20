import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    return this.state.collection.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview id={id} {...otherCollectionsProps} />
    ));
  }
}

export default ShopPage;
