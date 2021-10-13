import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function TableUsers() {
    const valorTotal = "1.500,00";
    const resultados = 100;
    return (
        <div>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col"><i class="bi bi-funnel-fill"></i>Vencimento</th>
                            <th scope="col"><i class="bi bi-funnel"></i>Nome do Beneficiário</th>
                            <th scope="col"><i class="bi bi-funnel"></i>Valor</th>
                            <th scope="col"><i class="bi bi-funnel"></i>Situação</th>
                            <th scope="col"><i class="bi bi-funnel"></i>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15/12/2020</td>
                            <td>João henrique</td>
                            <td>R$ 1.500,00</td>
                            <td className="atrasado">Atrasado</td>
                            <td>
                                <div className="opcoes">
                                    <button><i class="bi bi-printer"></i></button>

                                    <button><i class="bi bi-paperclip"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>15/12/2020</td>
                            <td>João henrique</td>
                            <td>R$ 1.500,00</td>
                            <td className="pago">Pago</td>
                            <td>
                                <div className="opcoes">
                                    <button><i class="bi bi-printer"></i></button>

                                    <button><i class="bi bi-paperclip"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>15/12/2020</td>
                            <td>João henrique</td>
                            <td>R$ 1.500,00</td>
                            <td >A vencer</td>
                            <td>
                                <div className="opcoes">
                                    <button><i class="bi bi-printer"></i></button>

                                    <button><i class="bi bi-paperclip"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>15/12/2020</td>
                            <td>João henrique</td>
                            <td>R$ 1.500,00</td>
                            <td className="atrasado">Atrasado</td>
                            <td>
                                <div className="opcoes">
                                    <button><i class="bi bi-printer"></i></button>

                                    <button><i class="bi bi-paperclip"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>15/12/2020</td>
                            <td>João henrique</td>
                            <td>R$ 1.500,00</td>
                            <td className="pago">Pago</td>
                            <td>
                                <div className="opcoes">
                                    <button><i class="bi bi-printer"></i></button>

                                    <button><i class="bi bi-paperclip"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="valorTotal">
                        <span><strong>TOTAL</strong> R${valorTotal} </span>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4">
                    <div id="clientesPag">
                        <select>
                            <option value="1" selected>10 por página</option>
                            <option value="2">20 por página</option>
                            <option value="3">100 por págin</option>
                            <option value="4">90 dias</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4 totalResultados">Total:{resultados} resultados</div>
                <div className="col-md-4">
                    <div className="paginacao">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TableUsers