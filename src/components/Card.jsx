function Card (props){
    console.log(props)
    return(
        
    <div id= {props.id}>
        <div className={props.class} >{props.title} </div>
    </div>

    )}

    export default Card