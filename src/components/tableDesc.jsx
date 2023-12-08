const ExpDesc = ({head, company, duration, li1,li2,advisor}) => {
    return (
    <div>
        <h1 style={{color :" grey"}}>{head }</h1>
        <h2>{company}</h2>
        <p style={{fontStyle:"italic"}}> {duration}</p>
        
        <p>{advisor}</p>
        <ul>
            <li>{li1}</li>
            <li>{li2}</li>
        </ul>
    </div>    
    );
}
export default ExpDesc;