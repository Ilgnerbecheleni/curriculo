import { useState } from 'react';
import FormDados from './Dados';
import Formexperiencias from './Experiencias';
import FormFormacoes from './Formacoes';



function Forms({ page , setCurrentPage }) {
    
    const [dados , setDados] = useState();
    const [experiencias, setExperiencias] = useState([]);


    function render(pagina:number) {
        switch (pagina) {
            case 1:
                return <FormDados dados={dados} setDados={setDados} setCurrentPage= {setCurrentPage}/>;
            case 2:
                return <Formexperiencias experiencias={experiencias}  setExperiencias={setExperiencias}  />;
            case 3:
                    return <FormFormacoes />;
            default:
                return null; // Tratamento para outros casos, se necessário
        }
    }

    const renderedForm = render(page);

    return (
        <>
            {renderedForm}
        </>
    );
}

export default Forms;
