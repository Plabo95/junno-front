import React from "react";
import { Flex, Image} from "@chakra-ui/react";

//image
import carto from '../../img/buscador/carto.png'

export default function SearcherCartoGreen({setView}) {

    return(
        <Flex w='100%' >
            <Image w='100%' h='90vh' src={carto} />
        </Flex>  
    )
}