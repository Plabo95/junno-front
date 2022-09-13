import React, {useState} from "react";
import { Flex, Text, Button} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Start from "../components/ConexionRed/Start"
import Login from "../components/ConexionRed/Login";
import Form from "../components/ConexionRed/Form";
import Map from "../components/ConexionRed/Map";

export default function ConexionRed(){

    const [state, setState] = useState('start')

    return(
        <Flex direction='column'>
        <Topbar/>
        <Flex>
            <Sidebar/>
            { state==='start' && 
                <Start setState={setState} />
            }
            { state==='login' && 
                <Login setState={setState} />
            }
            { state==='form' && 
                <Form setState={setState} />
            }
            { state==='map' && 
                <Map setState={setState} />
            }
        </Flex>
    </Flex>
    )
}