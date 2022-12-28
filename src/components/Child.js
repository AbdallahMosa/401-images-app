import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Child = (props) => {
    let [numOfLikes, setnumOfLikes] = useState(0);
    const countOflike = () => {
        setnumOfLikes(numOfLikes + 1)
        props.likes();
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_url} onClick={countOflike} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <h1>number of likes :{numOfLikes} </h1>
        </Card.Text>
        <Button variant="primary" onClick={countOflike}>LIKE </Button>
      </Card.Body>
    </Card>
  )
}

export default Child;