import axios from 'axios'
import { Body, CardBox, CardsWrapper, Title } from './style';
import React, { useEffect , useState} from 'react'

function MainPage() {

    const [posts, setPosts] = useState([]);

    const getData = () =>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setPosts(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("error", err);
        })
    }
    useEffect(() => { 
        getData();
    }, [])

    return (
        <CardsWrapper>
            
            {
                posts.map((value, index)=>(
            <CardBox  key={value.id}>
             <Body>  <b>Name:</b> {value.name} </Body>
              <Body>  <b>UserName:</b> {value.username} </Body>
               <Body>  <b>Email: </b> { value.email} </Body>
                <Body> <b>Street:</b> {value.address.street} </Body>
                <Body> <b>Suite:</b> {value.address.suite} </Body>
                <Body> <b>City:</b> {value.address.city} </Body>
                <Body> <b>ZipCode:</b> {value.address.zipcode} </Body>
                <Body> <b>Geo-Lat: </b>  {value.address.geo.lat} </Body>
                <Body> <b>Geo-Lng: </b>  {value.address.geo.lng} </Body>
                <Body> <b>Phone:</b> {value.phone}</Body>
                <Body> <b>Website:</b> {value.website}</Body>
                <Body> <b>CompanyName:</b> {value.company.name}</Body>
                <Body> <b>CatchPhrase: </b> {value.company.catchPhrase}</Body>
                <Body> <b>Bs:</b> {value.company.bs}</Body>
            </CardBox>
                ))
            }
            
            
        </CardsWrapper>
    );
}

export default MainPage
