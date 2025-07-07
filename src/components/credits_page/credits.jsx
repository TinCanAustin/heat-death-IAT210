import './style.css';

function Credits() {
    const openPDF = () => {
        window.open('/docs/Contribution.pdf', '_blank');
    };

    return (
        <div className="credits-container">
        <h1 className="credits-heading">Game Created By</h1>
        <ul className="credits-list">
            <li>Jack Bradshaw</li>
            <li>Nathaniel Butler</li>
            <li>Han Chen</li>
            <li>Austin Philip</li>
            <li>Koen Stinchcombe</li>
        </ul>
        <a href="#" onClick={openPDF}>Contributions</a>
        </div>
    );
}

export default Credits;