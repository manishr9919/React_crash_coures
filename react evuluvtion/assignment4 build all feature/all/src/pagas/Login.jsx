import { Button, Container, Heading, Input, InputGroup, InputRightElement, VStack,Text } from '@chakra-ui/react'
import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'
import { Authcontext } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'



export default function Login() {
    const [show, setShow] = React.useState(false)
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [isLoading, setisLoading] = useState(false)
const [isErr, setisErr] = useState(false)

const Nevigate = useNavigate()
const toast = useToast()

let {login} = useContext(Authcontext)
// let inputref = useRef('inputref')
// console.log(inputref);
// console.log(email);
    const handleClick = () => setShow(!show)

const postUser = async ()=>{
  setisLoading(true)
try {
    let res = await axios({
        method:'post',
        url:'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login',
        data:{email:email,password:password}
    })
    let token = res?.data?.token
    let useremail = 'bruce@wayne.com'
    if(res.status ==200){
        login(token,useremail)
        Nevigate('/')
        setisLoading(false)
        toast({
          title: 'Login Success',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
    }
} catch (error) {
  setisErr(true)
  setisLoading(false)
    toast({
          title: 'Invalid email or password',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
}
}

const hendelLogin = ()=>{
  if(email !== "" & password !== ""){
    postUser()
  }
  else{
    toast({
      title: 'Please Enter Currect Email or Password',
      status: 'warning',
      duration: 2000,
      isClosable: true,
      position:'top'
    })
  }
}



  return (
    <Container maxW={'xl'} my={10}>
        <Heading align={'center'} my={8}>Login Now</Heading>
    <VStack spacing={10}>
        <Input 
        type='email' placeholder='Enter Your Email'
        onChange={(e)=>setemail(e.target.value)}
        value={email}
        />

        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        onChange={(e)=>setpassword(e.target.value)}
        value={password}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button variant={'outline'} colorScheme='red' px={5} onClick={hendelLogin} isLoading={isLoading}>Login</Button>
    </VStack>
    </Container>

  )
}
