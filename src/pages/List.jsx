import React from "react";
import { Flex, Text } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Searcher(){

    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                <Flex w='100%' >

                </Flex>
            </Flex>

        </Flex>

    )
}