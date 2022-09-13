import { Flex, Input, Text, Button } from "@chakra-ui/react"


export default function Form({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Red Eléctrica</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Objeto de la solicitud
            </Text>
            <Flex maxW='60%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Observaciones:</Text>
                <Input type='textarea' bg='#E9E6E6' h='100px' />
            </Flex>
            <Flex w='100%' px='5%' gap='5em' >
                <Flex maxW='40%' gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Fecha inicio:</Text>
                    <Input type='datetime-local' bg='#E9E6E6' />
                </Flex>
                <Flex maxW='40%' gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Fecha fin:</Text>
                    <Input type='datetime-local' bg='#E9E6E6' />
                </Flex>
            </Flex>
            <Flex maxW='30%' gap='1em' direction ='column' px='5%'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Ayuntamiento de:</Text>
                    <Input  bg='#E9E6E6' />
            </Flex>
            <Button mt='1em' colorScheme='green' w='10%' ml='5%' onClick={()=>setState('map')} >Continuar</Button>
        </Flex>
    )
}