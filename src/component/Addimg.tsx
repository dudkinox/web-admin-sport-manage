import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Image = styled("img")({
  maxWidth: "100%",
});

const MyComponent = () => {


  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (

     <Grid container>
    <Grid item xs={12}>
      <Typography variant="h4">Add Image</Typography>
    </Grid>
    <Grid item xs={12}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </Grid>
    <Grid item xs={12}>
      <Image src={value} />
    </Grid>
  </Grid>

   
  );
      
 
};

export default MyComponent;



