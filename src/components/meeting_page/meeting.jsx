import './style.css';

function Meetings() {
    const openPDF = (filename) => {
        window.open(`/docs/${filename}`, '_blank');
    };

    return (
        <div className="pdf-container">
        <h1 className="pdf-title">Meeting Hours & Playtests</h1>
        <div className="pdf-links">
            <button onClick={() => openPDF('MeetingMinutes.pdf')}>📄 Meeting Minutes</button>
            <button onClick={() => openPDF('Sample_Session.pdf')}>📄 Sample Playtest</button>
            <button onClick={() => openPDF('Dev_Playtest1.pdf')}>📄 Playtest 2</button>
            <button onClick={() => openPDF('Dev_Playtest2.pdf')}>📄 Playtest 3</button>
        </div>
        </div>
    );
}

export default Meetings;