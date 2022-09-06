import React from "react";
import { Flex, Image} from "@chakra-ui/react";

//image
import cartored from '../../img/buscador/cartored.png'

export default function SearcherCartoRed({setView}) {

    return(
        <Flex w='100%' >
            <Image w='100%' h='90vh' src={cartored} />
        </Flex>  
    )
}