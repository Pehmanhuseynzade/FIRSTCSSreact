import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./index.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function index() {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }} style={{ margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <img
                className="nikephoto"
                src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
                alt="Nike"
              />
              <div className="allphotos">
                <Grid item xs={6}>
                  <Item>
                    <img
                      className="photos"
                      src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
                      alt="Nike"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      className="photos"
                      src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
                      alt="Nike"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      className="photos"
                      src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
                      alt="Nike"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <img
                      className="photos"
                      src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
                      alt="Nike"
                    />
                  </Item>
                </Grid>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <h3 style={{ color: "orange", textAlign: "left" }}>
                Sneaker Company
              </h3>
              <h1 style={{ textAlign: "left" }}>
                Fall Limitede Edition Sneakers
              </h1>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit officia, itaque est sint velit et quo non rem
                blanditiis, vero voluptates magni assumenda rerum suscipit
                necessitatibus nobis nulla quas corporis tempore dolor.
                Doloremque ad dolorum qui dolorem molestiae, suscipit maxime
                magnam enim vitae maiores error, quasi nam quidem hic soluta
                pariatur, quam minima. Assumenda accusantium sunt sequi
                praesentium suscipit, eligendi, doloribus quaerat veniam fuga
                magni neque illum dolor fugiat a!
              </p>
              <p></p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default index;
