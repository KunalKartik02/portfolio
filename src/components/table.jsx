import TableRow from "./tableRow";
const Table = () => {
    return (
        <div>
            <h1>Experience</h1>
            <table>
                <TableRow head="Summer Analyst" company = "Goldman Sachs" duration = "May'23 - Jul'23" li1 = "Built end to end LLM pipelines" li2 = "Built end to end LLM pipelines" imgsrc="assets/gs.png" advisor = "Team : Risk Engineering"/>
                <TableRow head="Quantitaive Research Consultant" company = "WorldQuant" duration = "Mar-23 - May'23" li1 = "Built end to end LLM pipelines" li2 = "Built end to end LLM pipelines" imgsrc="assets/wq.png" advisor= "Part-Time"/>
                <TableRow head="Research Intern" company = "University of New South Wales Sydney" duration = "Ongoing" li1 = "Built end to end LLM pipelines" li2 = "Built end to end LLM pipelines" imgsrc="assets/unsw.png" advisor="Dr. Rohitash Chandra"/>
                <TableRow head="Bachelor's Thesis Project under Dr. N. Selvaraju" company = "IIT Guwahati" duration = "Ongoing" li1 = "Built end to end LLM pipelines" li2 = "Built end to end LLM pipelines" imgsrc="assets/iitglogo.png" advisor= "Prof. N. Selvaraju"/>
                {/* <TableRow head="" company = "" duration = "" li1 = "" li2 = "" imgsrc="assets/.png"/>
                <TableRow head="" company = "" duration = "" li1 = "" li2 = "" imgsrc="assets/.png"/> */}
            </table>
        </div>
    );
}
export default Table;