import 'bootstrap/dist/css/bootstrap.min.css';
import DateTable from '../DateTable';
import ReturnButton from '../ReturnButton';
import TableUsers from '../TableUsers';
import './styles.css';
function Main() {
    const inicioData = "03/06/2021";
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const fimData = `${dia}/${mes}/${ano}`
    return (
        <div className="container card-main">
            <div></div>
            <br />
            <div className="row">
                <div className="position-relative">
                    <div className="position-absolute top-0 end-0">
                        <ReturnButton name="voltar" />
                    </div>
                </div>
            </div>
            <div><br /><br /></div>
            <div className="row">
                <div className="col-md-5 title-table">
                    <span>Relação de Cobranças Recebidas</span>
                </div>
                <div className="col-md-2">
                    <form>
                        <div >
                            <input type="text" id="search"  placeholder="Buscar"/>
                        </div>
                    </form>
                </div>
                <div className="col-md-1">
                    <div className="espace-date">
                        <select>
                            <option value="1" selected>7 dias</option>
                            <option value="2">15 dias</option>
                            <option value="3">30 dias</option>
                            <option value="4">90 dias</option>
                        </select>
                    </div>
                    
                </div>
                <div className="col-md-2">
                <div className="Data">
                        <input type="text" id="inicioData" maxlength="10" placeholder="De 28/10/2020"/>
                        <span className><i className="bi bi-calendar-date"></i></span>
                    </div>
                    
                </div>
                <div className="col-md-2">
                    <div className="Data">
                        <input type="text" id="fimData" maxlength="10" placeholder="Até 15/11/2020"/>
                        <span className><i className="bi bi-calendar-date"></i></span>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <DateTable initDate={inicioData} finishDate={fimData} />
                </div>
            </div>
            <div><br/></div>
            <br/>
            <div className="row">
                <div className="col-md-2 ">
                    <div className="text-table"><span>Todas as cobranças</span></div>
                    
                </div>
            </div>
            <div><br/></div>
            <div className="row">
                <div className="col-md-12">
                    <TableUsers/>
                </div>
            </div>
        </div>
    )
}
export default Main