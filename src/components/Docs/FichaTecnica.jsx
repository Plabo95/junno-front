import { Flex, Image, Text } from "@chakra-ui/react"

import print from '../../img/documentos/print.png'
import pdf from '../../img/documentos/pdf.png'
import download from '../../img/documentos/download.png'
import minimap1 from '../../img/documentos/minimap1.png'
import minimap2 from '../../img/documentos/minimap2.png'
import minimap3 from '../../img/documentos/minimap3.png'
import minimap4 from '../../img/documentos/minimap4.png'
import minimap5 from '../../img/documentos/minimap5.png'

export default function FichaTecnica(){

    return(
        <Flex direction='column' w='100%'>
        <Flex mt='2em' px='5%' w='100%' align='center' justify='space-between' > 
            <Text fontWeight='500' fontSize='32px' color='green'>Nombre Finca</Text>
            <Flex align='center' gap='1em'>
                <Image src={download} />
                <Image src={pdf} />
                <Image src={print} />
            </Flex>                
        </Flex>
        <Flex w='100%'>
            <Flex w='50%' direction='column' gap='0.5em' px='5%'>

                {/* IDENTIFICACIÓN */}
                <Text fontWeight='bold' fontSize='18px' my='1.5em'> Identificación </Text>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Emplazamiento </Text>
                    <Text fontSize='16px'> Calle María Moliner 15 Aragón</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Datos Catastro: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Sector: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>

                {/* DATOS utbanísticos */}
                <Text fontWeight='bold' fontSize='18px' my='1em'> Datos Urbanísticos </Text>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Emplazamiento </Text>
                    <Text fontSize='16px'> Calle María Moliner 15 Aragón</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Datos Catastro: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Sector: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>

                {/* DATOS AMBIENTALES */}
                <Text fontWeight='bold' fontSize='18px' my='1em'> Datos Ambientales </Text>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Emplazamiento </Text>
                    <Text fontSize='16px'> Calle María Moliner 15 Aragón</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Datos Catastro: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Text fontSize='16px'> Sector: </Text>
                    <Text fontSize='16px'> Lorem impsum lorem ipsum</Text>
                </Flex>

                {/* PLANOS*/}
                <Text fontWeight='bold' fontSize='18px' my='1em'> Planos </Text>                
                <Flex gap='2em' align='center' justify='space-evenly'>
                    <Image src={minimap1} />
                    <Image src={minimap2} />
                    <Image src={minimap3} />
                </Flex>

            </Flex>
            <Flex w='50%' direction='column' px='5%' gap='0.5em'>
                <Text fontWeight='bold' fontSize='18px' my='1em'> Preescripciones de protección </Text>
                <Text fontSize='16px'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui in orci,
                felis commodo, quis sit. Maecenas donec porttitor vel porta nulla. 
                Varius sed odio purus suscipit risus sapien congue massa. Lectus congue quis quis ullamcorper enim, 
                lorem urna proin. In vitae nunc, tincidunt porttitor porttitor. Accumsan, 
                gravida venenatis tellus at est semper at semper libero. 
                </Text>
                <Text fontWeight='bold' fontSize='18px' my='1em'> Información Gráfica </Text>                
                <Flex gap='2em' align='center' justify='space-evenly'>
                    <Image src={minimap4} />
                    <Image src={minimap5} />
                </Flex>
            </Flex>
        </Flex>
        </Flex>
    )
}