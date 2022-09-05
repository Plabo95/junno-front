import React, {useState} from "react";
import { Flex } from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearcherForm from "../components/Searcher/SearcherForm";
import SearcherData from "../components/Searcher/SearcherData";
import SearcherCarto from "../components/Searcher/SearcherCarto";



export default function Searcher(){

    const [view, setView] = useState('form')
    return(

        <Flex direction='column'>
            <Topbar/>
            <Flex w='100%'>
                <Sidebar/>
                {view === 'form' &&
                    <SearcherForm setView={setView} />
                }
                {view === 'data' &&
                    <SearcherData setView={setView} />
                }
                {view === 'carto' &&
                    <SearcherCarto setView={setView} />
                }
            </Flex>
        </Flex>

    )
}