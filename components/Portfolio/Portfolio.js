import React,{useState} from 'react';
// import image from '../../assets/img';
import '../Portfolio/Portfolio.css';
import b1 from '../../assets/img/b1.jpg';
import b2 from '../../assets/img/b2.png';
import b3 from '../../assets/img/b3.png';
import b4 from '../../assets/img/b4.jpg';
import b5 from '../../assets/img/b5.jpg';
import b6 from '../../assets/img/b6.png';

const imageData=[
    {
        "image":`${b1}`,
        "title":"Building1",
        "place":"City1",
        "index":"0"
    },
    {
        "image":`${b6}`,
        "title":"Building2",
        "place":"City2",
        "index":"1"
    },
    {
        "image":`${b2}`,
        "title":"Building3",
        "place":"City3",
        "index":"2"
    },
    {
        "image":`${b3}`,
        "title":"Building4",
        "place":"City4",
        "index":"3"
    },
    {
        "image":`${b4}`,
        "title":"Building5",
        "place":"City5",
        "index":"4"
    },
    {
        "image":`${b5}`,
        "title":"Building6",
        "place":"City6",
        "index":"5"
    },
]

const Portfolio=()=>{
    const [dispimg,setdisp]=useState('');
    const [cardIndex,setIndex]=useState(0);
    const [dispImgStyle,setStyle]=useState({display:'none'});

    const showImage=(event)=>{
        setdisp(imageData[Number(event.target.id)].image);
        setIndex(Number(event.target.id));
        setStyle({display:'flex'});
    }

    const card = imageData.map(function(obj,i){
        return (
        <div className="card" key={i}>
            <img src={obj.image} alt="building"/>
            <div className="card--info">
                {/* <label className="card--place">{obj.place}</label><br/> */}

                <center><button id={i} onClick={showImage}><i className="fa fa-paper-plane" aria-hidden="true"></i></button></center>
            </div>
        </div>)
    })

    const closeDisp=()=>{
        setStyle({display:'none'});
    }

    const prevShow=()=>{
        if(cardIndex===0)
        {
            setIndex(imageData.length-1);
            setdisp(imageData[imageData.length-1].image);
        }
        else
        {
            let decrement=cardIndex-1;
            setdisp(imageData[decrement].image);
            setIndex(decrement);
        }

    }
    const nextShow=()=>{
        if(cardIndex===imageData.length-1)
        {
            setIndex(0);
            setdisp(imageData[0].image);
        }
        else
        {
            let increment=cardIndex+1;
            setdisp(imageData[increment].image);
            setIndex(increment);
        }
    }
    return(
        <div>
            {/* card */}

            <div className="page-section bg-light" id="portfolio" >
                <br/><br/>
                <div className="text-center">
                        <h2 className="section-heading text-uppercase">Gallery</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.
                        <center><hr width="30%"/></center>
                        </h3>
                </div>
                
                <div className="container c">
                    {card}
                </div>
            </div>
           

            {/* lightbox */}
            
            <div>
                <div className="lightbox" style={dispImgStyle}>

                    <button className="close" onClick={closeDisp}>X</button>
                    <div className="carousel left" onClick={prevShow}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="carousel right" onClick={nextShow}>
                        <span></span>
                        <span></span>
                    </div>
                    <img src={dispimg} alt={dispimg}/>
                    
                </div>
            </div>
        </div>
    )
}
export default Portfolio;
