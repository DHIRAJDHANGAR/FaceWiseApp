import { useState } from "react";
import DropdownList from "./DropDownList";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FaceWiseApp = () => {
  const [showList, setShowList] = useState(false);

  //handle Show to Celebrities List
  const handleShowList = () => {
    setShowList(true);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 370 },
        }}
        noValidate
        autoComplete="off"
      >
        {/**search field */}
        <TextField
          id="outlined-search"
          label="Search User"
          type="search"
          onClick={handleShowList}
        />
      </Box>
      {/**Show List Item */}
      {showList ? <DropdownList /> : <p>Click on Input Box</p>}
    </>
  );
};
export default FaceWiseApp;
