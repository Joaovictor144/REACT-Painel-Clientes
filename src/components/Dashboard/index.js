import Header from "../Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Main from "../Main";
import UserManager from "../UserManager";

function Dashboard() {
    return (
        <div className="container-fluid primary-page">
            <div><br /></div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <Header />
                            </div>
                            <div></div>
                            <div className="col-md-12 col-12">
                                <Main />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <UserManager/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard