import React, {useState} from "react";
import { Flex} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Start from "../components/Permiso/Start";
import Progress from "../components/Permiso/Progress";
import ResultsTable from "../components/Docs/ResultsTable";
import DocsFinca from "../components/Docs/DocsFinca";
import ConsultaExpedienteTable from "../components/Docs/ConsultaExpedienteTable";
import ConsultaRegistroTable from "../components/Docs/ConsultaRegistroTable";
import FichaTecnica from "../components/Docs/FichaTecnica";
import Manual1 from "../components/Permiso/Manual1";
import Manual2 from "../components/Permiso/Manual2";
import DocsPIN from "../components/Docs/DocsPIN";
import Permanente from "../components/Permiso/Permanente";

export default function Permiso(){

    const [state, setState] = useState('start')

    return(
        <Flex direction='column'>
            <Topbar/>
            <Flex>
                <Sidebar/>
                { state==='start' && 
                    <Start setState={setState} />
                }
                { state==='progress' && 
                    <Progress setState={setState} />
                }
                { state==='manual1' && 
                    <Manual1 setState={setState} />
                }
                { state==='manual2' && 
                    <Manual2 setState={setState} />
                }
                { state==='PIN' && 
                    <DocsPIN setState={setState} />
                }
                { state==='permanente' && 
                    <Permanente setState={setState} />
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