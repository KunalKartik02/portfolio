import ExpDesc from './tableDesc.jsx';
const TableRow = ({head, company, duration, li1,li2,imgsrc,advisor}) => {
    return(
       
            <tr>
                <td>
                    <img src={imgsrc} alt="gs" style={{width:"50%"}}/>
                    
                </td>
                <td><ExpDesc head = {head} company={company} duration={duration} li1={li1} li2={li2} advisor={advisor}/></td>
            </tr>
        
    )
}

export default TableRow;