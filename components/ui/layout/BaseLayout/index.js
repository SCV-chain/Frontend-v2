import React from "react";
import PropTypes from "prop-types";
import Header from "@components/ui/common/Header";
import Footer from "@components/ui/common/Footer";

export default function BaseLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
