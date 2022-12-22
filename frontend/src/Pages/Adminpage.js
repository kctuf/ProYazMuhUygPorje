import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";

function Adminpage() {
    const history=useHistory()
    const logoutHandler = () => {
       
        localStorage.removeItem("userInfo");
        history.push("/");
    }
    
    return ( 
    <div>
        
        <div>Admin Giris Yaptı</div>
        <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={logoutHandler}
      >
        Log Out
      </Button>

    </div>
  )
}
  
  
  export default Adminpage;

