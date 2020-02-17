import React from 'react';


class ImageCard extends React.Component{
    constructor (props){
        super(props)

        this.state = { span: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
       this.imageRef.current.addEventListener('load' , this.setSpan);
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeigh;

        const span = Math.ceil(height / 10);

        this.setState( {span} );
    };

    render(){
        const {desciption, urls} = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img alt={desciption} src={urls.regular} />
            </div>
        );
    }
}


export default ImageCard