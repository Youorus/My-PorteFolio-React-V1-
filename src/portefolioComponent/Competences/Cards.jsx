import Card from 'react-bootstrap/Card';
import "./Competence.css"

function Cards(props) {
  return (<div>
   <Card className='cards' style={{ width: '25rem' }}>
      <Card.Img  variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title className='cards-title' style={{ color: props.color }} >{props.title}</Card.Title>
        <Card.Text className='cards-text' >{props.text}
        </Card.Text>
        <span style={{ color: props.color }}>{props.val}%</span>
      </Card.Body>
    </Card>
  </div>
   
  );
}

export default Cards;