import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CelebritiesList from "../celebritiesList";

const DropdownList = () => {
  const [productList, setProductList] = useState(CelebritiesList);
  const [expand, setExpand] = useState(false);

  //handle arrow up / down and show description data
  const handleExpandArrow = (id) => {
    setExpand((pre) => {
      return !!pre && pre === id ? null : id;
    });
  };

  //handle delete product list item
  const handleDeleteItem = (id) => {
    const deleteList = productList.filter((item) => {
      return item.id !== id;
    });
    setProductList(deleteList);
  };

  //convert date od bithday to age
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container direction="column" alignItems="center">
          {productList.map((data) => {
            const {
              id,
              first,
              last,
              picture,
              dob,
              gender,
              description,
              country,
            } = data;
            return (
              <Grid padding="10px" key={id}>
                <Card sx={{ width: 370 }}>
                  <CardHeader
                    avatar={<Avatar aria-label="recipe" src={picture}></Avatar>}
                    title={
                      <span>
                        {first} {last}
                      </span>
                    }
                    action={
                      <button onClick={() => handleExpandArrow(id)}>
                        {expand === id ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </button>
                    }
                  />
                  {expand === id ? (
                    <div>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                      >
                        <Grid>
                          <Typography>Age</Typography>
                          <Typography>{getAge(dob)}</Typography>
                        </Grid>
                        <Grid>
                          <Typography>Gender</Typography>
                          <Typography>{gender}</Typography>
                        </Grid>
                        <Grid>
                          <Typography>Country</Typography>
                          <Typography>{country}</Typography>
                        </Grid>
                      </Grid>
                      <CardContent>
                        <Grid>
                          <Typography>Discription</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {description}
                          </Typography>
                        </Grid>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <IconButton
                          aria-label="edit"
                          onClick={() => {
                            handleEditItem(id);
                          }}
                        >
                          <EditOutlinedIcon sx={{ color: "blue" }} />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            handleDeleteItem(id);
                          }}
                        >
                          <DeleteOutlinedIcon sx={{ color: "red" }} />
                        </IconButton>
                      </CardActions>
                    </div>
                  ) : (
                    <></>
                  )}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default DropdownList;
