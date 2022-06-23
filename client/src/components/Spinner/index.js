import Spinner from 'react-bootstrap/Spinner'

export default function MySpinner() {

return (
<div style={{textAlign:'center'}}>
<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
</div>
)

}

