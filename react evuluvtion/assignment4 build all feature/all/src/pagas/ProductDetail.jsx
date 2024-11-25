import { Link, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Container, useDisclosure, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

// for alert diylog
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'

export default function ProductDetail() {
  const [isLoading, setisLoading] = useState(false)
  const [isErr, setisErr] = useState(false)
  const [product, setproduct] = useState(null)

  const Nevigate = useNavigate()

  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const { product_id } = useParams()

  const getProduct = async (id) => {
    setisLoading(true)

    try {
      let res = await axios({
        method: "get",
        url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`,
      })
      console.log(res?.data?.data);
      setproduct(res?.data?.data);
      setisLoading(false)
    } catch (error) {
      setisErr(true)
      setisLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct(product_id)
  }, [])

const addToCart = ()=>{
  onOpen()
  
  // if(!isOpen){
  //   // toast({
  //   //   title: 'Product added to cart',
  //   //   status: 'success',
  //   //   duration: 2000,
  //   //   isClosable: true,
  //   //   position:'top'
  //   // })
  //   Nevigate('/')
  // }
}


  return (<Container my={10}>
    <Card maxW='sm' border={'solid 1px black'}>
      <CardBody>
        <Stack mt='6' spacing='1'>
          <Heading size='md'>{product?.title}</Heading>
          <Text>{product?.description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            catagory : {product?.category}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            price : {product?.price}
          </Text>
          <Text>brand
            : {product?.brand
            }</Text>
        </Stack>
        <Button 
        mt={5} 
        variant='outline' colorScheme='blue'
        onClick={addToCart}
        >
          Add To Cart
        </Button>
      </CardBody>

    </Card>


    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Confirm 
            </AlertDialogHeader>

            <AlertDialogBody>
            Are you sure you want to add this item to cart.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
              Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  )
}
