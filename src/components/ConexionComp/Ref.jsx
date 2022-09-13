import { useState } from "react"
import { Flex, Input, Text, Button, Image } from "@chakra-ui/react"

//image
import map from '../../img/conexionComp/map.png'
import map2 from '../../img/conexionComp/map2.jpg'


export default function Ref({setState}){

    const [ref,setRef] = useState('')
    const [miniState, setMiniState] = useState(false)

    const search = () => {
        if(ref==='22153A005000260000UW'){
            setMiniState(true)
        }
    }

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em' pb='10vh'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Compañías Eléctricas</Text>
            <Flex w='30%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Referencia catastral</Text>
                <Input bg='#E9E6E6' onChange={(e)=>setRef(e.target.value) } />
            </Flex>
            <Button mt='1em' colorScheme='green' w='10%' ml='5%' onClick={search} >Buscar</Button>
            <Image maxW='70%' alignSelf='center' px='5%' 
            src={miniState? map2: map} />
            
            {miniState &&
                <Button mt='1em' colorScheme='green' w='10%' ml='5%' onClick={()=>setState('form')} >Continuar</Button>
            }
        </Flex>
    )
}