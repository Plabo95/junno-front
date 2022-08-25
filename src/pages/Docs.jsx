import React, {useState} from "react";
import { Flex} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DocsStart from "../components/Docs/DocsStart";
import DocsProgress from "../components/Docs/DocsProgress";
import ResultsTable from "../components/Docs/ResultsTable";
import DocsFinca from "../components/Docs/DocsFinca";

export default function Docs(){

    const [state, setState] = useState('start')

    return(
        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                { state==='start' && 
                    <DocsStart setState={setState} />
                }
                { state==='progress' && 
                    <DocsProgress setState={setState} />
                }
                { state==='results' && 
                    <ResultsTable setState={setState} />
                }
                { state==='finca' && 
                    <DocsFinca setState={setState} />
                }
            </Flex>
        </Flex>

    )
}