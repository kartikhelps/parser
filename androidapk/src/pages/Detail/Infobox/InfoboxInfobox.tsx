import React from 'react'
import { UilMap  } from '@iconscout/react-unicons';




import { UilBuilding  } from '@iconscout/react-unicons';




import { UilCompass  } from '@iconscout/react-unicons';




import { UilTrees  } from '@iconscout/react-unicons';






import { UilCube  } from '@iconscout/react-unicons';




import { UilComparison  } from '@iconscout/react-unicons';




import { UilCheckCircle  } from '@iconscout/react-unicons';




import { UilCornerUpRightAlt  } from '@iconscout/react-unicons';











 

const Infobox = () => {
  return (
    <>
     <div style={ { gap:'15px' , alignContent:'center' , justifyContent:'center' ,border:'2px solid black' , borderRadius:'8px', margin:'15px'} }>
      < div style={ { display:'flex' , flexDirection:'row' , gap:'15px', justifyContent:'center' }}>

        <div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilMap   style={ { marginRight: '10px' } } size={30} />
        <h5>Location</h5>

    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilBuilding   style={ { marginRight: '10px' } } size={30} />
        <h5>Plot number</h5>

    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilCompass   style={ { marginRight: '10px' } } size={30} />
        <h5>Facing</h5>

    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilTrees   style={ { marginRight: '10px' } } size={30} />
        <h5>Park</h5>

    </div>
        </div>

        <div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilCube   style={ { marginRight: '10px' } } size={30}/>
        <h5>Area</h5>
    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilComparison   style={ { marginRight: '10px' } } size={30}/>
        <h5>Floor</h5>
    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilCheckCircle   style={ { marginRight: '10px' } } size={30}/>
        <h5>Possesion</h5>
    </div>
    <div style={ { display:'flex' , flexDirection:'row' }}>
        < UilCornerUpRightAlt   style={ { marginRight: '10px' } } size={30}/>
        <h5>Corner</h5>
    </div>

        </div>
    
       </div>
   
   <div style={ { display:'flex' , flexDirection:'row' , justifyContent:'center' ,gap:'30px'}}> 
     

     
    <button style={ { border:'2px solid black' , height:'40px' , width:'80px' } }> 
    call    
     </button>
    <button style={ { border:'2px solid black' , height:'40px' , width:'80px' } }> 
    whatsapp    
     </button>


</div>
    </div>
    </>
  )
}

export default Infobox;