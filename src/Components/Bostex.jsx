import React from 'react'
import { Button ,Stack} from 'react-bootstrap' 

const Bostex = () => {
    const div={
        border:"4px solid  black",
        boxShadow:"3px 3px 8px red"
    }     
  return (
    <>
    <Stack  direction="horizontal" gap={5}  className='con'>
  <Button style={{margin:'50px',boxShadow:"2px 2px 4px red"}} as="a" variant="primary" >
    Button as link
  </Button>
  <Button style={div}as="a" variant="success">
    Button as link
  </Button>
  {/* <Button as="a" variant="success">
    Button as link
  </Button> */}
</Stack>
</>
  )
}

export default Bostex
