 import Button from '@mui/material/Button'
const ButtonLoad = ({ handleBtnLoad }) => {
    return (
      <Button variant="contained" onClick={handleBtnLoad} type="button">
        Load more
      </Button>
    );
  };
  
  export default ButtonLoad;