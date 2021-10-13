import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function User(props){
    return(
        <div className="info-user">
                 <div className="row"><span id={props.id}>{props.nameUser}</span><br/><span>{props.userId} *** *** **</span></div>
        </div>
    )
}

export default User