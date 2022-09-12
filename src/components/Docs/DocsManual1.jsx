
import { Flex, Text, Image, Button } from "@chakra-ui/react"

//images
import clavepin from '../../img/documentos/clavepin.png'
import clavepermanente from '../../img/documentos/clavepermanente.png'

export default function DocsManual1({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud de certificado o informe urbanístico</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Para comenzar puedes elegir el método de autenticación con el que deseas solicitar el certificado :
            </Text>
            <Flex>
            <Flex px='5%' w='100%' justify='space-evenly' mt='2em'>       
                <Flex direction ='column' align='center' justify='center' gap='1em' >
                        <Text color='green' fontWeight='600' >Clave PIN</Text>
                        <Image src={clavepin} />
                        <Text>Acceso PIN 24H</Text>
                        <Button colorScheme='green' onClick={()=> setState('PIN')} >Acceder</Button>
                    </Flex>
            
                <Flex direction ='column' align='center' justify='center' gap='1em' >
                        <Text color='green' fontWeight='600' >Clave Permanente</Text>
                        <Image src={clavepermanente} />
                        <Text>Cl@ve Permanente</Text>
                        <Button colorScheme='green'  onClick={()=> setState('permanente')} >Acceder</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>





    )
}