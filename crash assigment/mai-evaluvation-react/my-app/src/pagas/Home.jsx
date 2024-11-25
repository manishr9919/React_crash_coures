import React, { useContext, useState } from 'react'
import Products from './Products'
import { Button, Container, HStack, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { Authcontext } from '../Context/Authcontext'
import { Link } from 'react-router-dom'

export default function Home() {
  const [filtervalue, setfiltervalue] = useState("")
  const [sortorder, setsortorder] = useState('')
  const {authState:{isAuthenticated}} = useContext(Authcontext)

  return (<>
    { isAuthenticated ?
      <Container maxW={'container.lg'} mt={5} >
      <Text ml={5} fontWeight={'bold'}>find By Filer-</Text>
      <SimpleGrid columns={{base:1,md:2,}} spacing={[5,10,20]} m={['auto',5]} mb={10} justify={'center'} w={{base:'70%' , md:'100%'}} >
      <Select 
      placeholder='Filter by Category'
      onChange={(e)=>setfiltervalue(e.target.value)}
      >
          <option value='men'>Men</option>
          <option value='women'>Women</option>
          <option value='kids'>Kids</option>
          <option value='homedecor'>Home Decor</option>
        </Select>


        <Select 
        placeholder='Sort by Price'
        onChange={(e)=>setsortorder(e.target.value)}
        >
          <option value='asc'>Low to hight</option>
          <option value='desc'>hight to low</option>
        </Select>

        
      </SimpleGrid>

      <Products filtervalue = {filtervalue} sortorder={sortorder}/>
    </Container>
    
  : 
  <Container  maxW={'container.md'} mt={10}>
    <HStack>
    <Text fontSize={'md'} fontWeight={'bold'}>Please Login Now</Text>
    <Button variant={'outline'} colorScheme='red' m={5}>
  <Link to={'/login'}>Login Now</Link>
    </Button>
    </HStack>
  </Container>
  }
    </>
  )
}
