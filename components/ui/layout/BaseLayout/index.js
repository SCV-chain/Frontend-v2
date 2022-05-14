import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Header from "@components/ui/common/Header";
import Footer from "@components/ui/common/Footer";

export default function BaseLayout({ children }) {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
