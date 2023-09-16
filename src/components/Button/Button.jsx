// import Button from '@mui/material/Button'
const Button = ({ handleBtnLoad }) => {
    return (
      <button variant="contained" onClick={handleBtnLoad} type="button">
        Load more
      </button>
    );
  };
  
  export default Button;