import React, {useState} from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import VisorForm from "../components/Visor/VisorForm";
import VisorMapAragon from "../components/Visor/VisorMapAragon";
import VisorMapCastilla from "../components/Visor/VisorMapCastilla";


export default function Visor(){

    const [state, setState] = useState('form')

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                {state === 'form' &&
                    <VisorForm setState={setState} />
                }
                {state === 'mapcastilla' &&
                    <VisorMapCastilla setState={setState} />
                }
                {state === 'maparagon' &&
                    <VisorMapAragon setState={setState} />
                }
            </Flex>

        </Flex>

    )
}