import React from "react"
import { Flex, Image } from "@chakra-ui/react"

import castilla from '../../img/visor/castilla.png'

export default function VisorMapCastilla(){

    return(
        <Flex w='100%'>
            <Image w='100%' src={castilla} />
        </Flex>
    )
}