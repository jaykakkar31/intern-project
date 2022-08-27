import "./failed.css";
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


function Failed() {

    const history=useHistory()
	return (
		<div className="failed-verify">
			<h2>Verification Failed</h2>
            <Button onClick={()=>{
                window.location="/educator"
            }}>Try again</Button>
		</div>
	);
}

export default Failed;
