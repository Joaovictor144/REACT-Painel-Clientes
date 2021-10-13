import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../User';
import './styles.css';
function Header() {
    const name = "João";
    const id = "851";
    const iconProfile = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>;
    return (
        <div className="container card-header">
            <div className="row">
                <div className="title-header col-md-3"><p>Bys<strong>360</strong></p></div>
                <div className="comp1-header col-md-3"><p>COBRANÇAS RECEBIDAS</p></div>
                <div className="col-md-3">&nbsp;&nbsp;&nbsp;</div>
                <div className="col-md-1 ">
                    
                </div>
                <div className="col-md-2 info-user ">
                    <div className="img-user">{iconProfile}</div><div><User nameUser={name} userId={id} id="a" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header