import React from "react"
import { Flex, Image } from "@chakra-ui/react"

import aragon from '../../img/visor/aragon.png'

export default function VisorMapAragon(){

    return(
        <Flex w='100%'>
            <Image w='100%' src={aragon} />
        </Flex>
    )
}