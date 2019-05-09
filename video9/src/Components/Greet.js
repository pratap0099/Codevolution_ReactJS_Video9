import React, {Componentes} from 'react'

const Greet = props => {
return(
<div className="Greet">
<h1>hii Greet {props.fName }{props.Gender}</h1>
</div>

)
}

export default Greet