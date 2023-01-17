import './Error.css'
function Error(props) {
	return <>{props.errorMessage ?<div  className='error'>{props.errorMessage}</div>:null}</>
}

export default Error;
