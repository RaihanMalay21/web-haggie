import React,{ forwardRef } from "react";
import "../../../App.css"

const SectionOneLK = forwardRef((_, ref) => {
    return(
        <div ref={ref} className="container-sectionOneLK" >
            <div className="container-fill-sectionOneLK">
                <h1>Apa saja yang tercakup dalam laporan keuangan yang disediakan oleh Finfast?</h1>
            </div>
        </div>
    )
})

export default SectionOneLK;