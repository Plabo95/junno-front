import React from "react";
import { Flex, Image} from "@chakra-ui/react";

//image
import cartogreen from '../../img/buscador/cartogreen.png'

export default function SearcherCartoGreen({setView}) {

    return(
        <Flex w='100%' >
            <Image w='100%' h='90vh' src={cartogreen} />
        </Flex>  
    )
}