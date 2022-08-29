import React, {useState} from "react";
import { Flex} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DocsStart from "../components/Docs/DocsStart";
import DocsProgress from "../components/Docs/DocsProgress";
import ResultsTable from "../components/Docs/ResultsTable";
import DocsFinca from "../components/Docs/DocsFinca";
import ConsultaExpedienteTable from "../components/Docs/ConsultaExpedienteTable";
import ConsultaRegistroTable from "../components/Docs/ConsultaRegistroTable";
import FichaTecnica from "../components/Docs/FichaTecnica";

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
                { state==='consultaexpediente' && 
                    <ConsultaExpedienteTable setState={setState} />
                }
                { state==='consultaregistro' && 
                    <ConsultaRegistroTable setState={setState} />
                }
                { state==='fichatecnica' && 
                    <FichaTecnica setState={setState} />
                }
            </Flex>
        </Flex>

    )
}