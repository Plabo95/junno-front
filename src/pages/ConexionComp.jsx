import React, {useState} from "react";
import { Flex } from "@chakra-ui/react";


//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Start from "../components/ConexionComp/Start";
import Ref from "../components/ConexionComp/Ref";
import Form from "../components/ConexionComp/Form";

export default function ConexionComp(){

    const [state, setState] = useState('start')

    return(
        <Flex direction='column'>
        <Topbar/>
        <Flex>
            <Sidebar/>
            { state==='start' && 
                <Start setState={setState} />
            }
            { state==='ref' && 
                <Ref setState={setState} />
            }
            { state==='form' && 
                <Form setState={setState} />
            }
        </Flex>
    </Flex>
    )
}