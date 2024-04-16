import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../hooks/src/utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      width: { sx: "100%", md: "auto" },
      overflowY: "hidden",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          // background: category.name === selectedCategory && "#FC1503",
          background: category.name === selectedCategory ? "#FC1503" : '#000000',
          backgroundColor: "#000",
          color: "white",
          borderRadius: "20px",
          textAlign: "left",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;