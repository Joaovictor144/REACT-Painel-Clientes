import User from "../User";
import "./styles.css"
function UserManager() {
    const user = "João";
    const id ="851"
    const iconProfile = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>;
    return (
        <div>
            <div className="container cardUser">
                    <div></div>
                    <br/>
                    <div className="row">
                    <div className="col-md-12 ">
                        <div className="iconProfile">{iconProfile}</div>   
                    </div>
                    </div>
                <div className="row">
                    <div className="col-md-12 user ">
                        <User nameUser={user} userId={id} id="info-user" />
                    </div>
                </div>
                <div></div>
                <br/>
                <div className="row">
                    <div className="col-md-12 meu-perfil">
                        <a href="#">Meu Perfil</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 meu-perfil-senha">
                        <a href="#">alterar senha</a>
                    </div>
                </div>
                <div></div>
                <br/>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 meu-perfil-sair">
                        <a href="#">Sair <i class="bi bi-arrow-bar-right"></i></a>
                    </div>
                </div>
                <div></div>
                <br/>

            </div>
        </div>
    )
}

export default UserManager