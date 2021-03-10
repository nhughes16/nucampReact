import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';



function RenderDirectoryItem({campsite, onClick}) {
    return(
        <div key={campsite.id} className="col-md-5 m-1">
            <Card onClick={() => onClick(campsite.id)}> 
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

function Directory(props) {
    const directory = this.props.campsites.map(campsite => {
        return (
            <RenderDirectoryItem campsite={campsite} onclick={props.onClick} />
        );
    });

    <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
}

export default Directory;