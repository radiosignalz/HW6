
import {Link,BrowserRouter} from 'react-router-dom'
import {Switch,Route} from "react-router-dom"
import {AppBar,Toolbar, Button} from "@material-ui/core";
import {Home, Profile,Chats }from "./routes"




const HW6 = () => {
    return (
        <div>
            <BrowserRouter>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Button as={Link} to="/" component={Link} color="inherit">
                            Home
                        </Button>
                        <Button to="/Profile" component={Link} color="inherit">
                            Profile
                        </Button>
                        <Button to="/Chats" component={Link} color="inherit">
                            Chats
                        </Button>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route component={Chats} path="/chats" />
                    <Route  component={Profile} path="/profile"/>
                    <Route component={Home} path="/"/>

                </Switch>

            </BrowserRouter>

        </div>
    );
};

export default HW6;

//!
